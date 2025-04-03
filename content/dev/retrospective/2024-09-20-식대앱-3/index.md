---
title: "식대앱 개발기 - 3"
date: "2024-09-20"
slug: "productivity"
mainCategory: "Dev"
tags: ["lightsail","pm2","nginx","Let's encrypt"]
thumbnail: "./thumbnail.webp"
summary: "식대 작성 앱"
---


### AWS Lightsail

&nbsp;

동료분이 [AWS Lighsail](https://aws.amazon.com/ko/free/compute/lightsail/?trk=5ee88988-35e0-4ac4-b54f-913791232630&sc_channel=ps&ef_id=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB:G:s&s_kwcid=AL!4422!3!536392904551!e!!g!!lightsail!11549848931!116492045190&gclid=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB)을 말씀해 주셔서 살펴보았는데, 클릭 몇번만으로 간단하게 EC2 생성이 가능했다.
또한 도메인, S3 등 보기 쉽게 정리되어 있어서 사용해보기로 했다.


[![lightsail Logo](./lightsail.png)](https://aws.amazon.com/ko/free/compute/lightsail/?trk=5ee88988-35e0-4ac4-b54f-913791232630&sc_channel=ps&ef_id=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB:G:s&s_kwcid=AL!4422!3!536392904551!e!!g!!lightsail!11549848931!116492045190&gclid=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB)

&nbsp;

### 배포

어느정도 기본적인 기능을 거의 개발한 뒤 배포작업만 남았다.

**엑셀 원본 파일 관리**  
우선 원본 엑셀 파일들을 버킷에 옮겼다.

**배포**  
Ubuntu환경 인스턴스에 업로드했다.
아직은 주소가 IP주소로 접속해야 하는 상황.

**PM2**  
무중단 서비스를 위해서 PM2 세팅을 했다.



**CI/CD**  
사내에서 CI/CD 세팅 후 편리함을 느껴서 여기에도 추가했다.  
`main` 브랜치에 Pull Request를 하면 자동으로 EC2에 코드가 업데이트된다.

```yaml
name: Deploy to AWS Lightsail

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Deploy to Lightsail
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          LIGHTSAIL_IP: ${{ secrets.LIGHTSAIL_IP }}
        run: |
          echo "${SSH_PRIVATE_KEY}" > acg-extension-lightsail.pem
          chmod 600 acg-extension-lightsail.pem
          ssh -i acg-extension-lightsail.pem -o StrictHostKeyChecking=no ubuntu@${LIGHTSAIL_IP} "echo SSH connection established"
          rsync -avz --exclude='node_modules' -e "ssh -i acg-extension-lightsail.pem -o StrictHostKeyChecking=no" ./ ubuntu@${LIGHTSAIL_IP}:/home/ubuntu/acg-extension
          ssh -i acg-extension-lightsail.pem -o StrictHostKeyChecking=no ubuntu@${LIGHTSAIL_IP} "cd /home/ubuntu/acg-extension && npm install"
```





### #도메인, #Nginx, #HTTPS

lightsail DNS 설정 가격이 최소 12달러부터 시작한다.

일단 배포는 해야 하고, 도메인은 있어야 하니 과감히 결제

http://meal.acg-playground.com


&nbsp;

도메인이 등록이 됐다 해도, 접속하면 안들어가질 것이다.

왜나하면 아직 도메인 이름은 http://example.com  이고,

접속을 시도하면 http 이기 때문에 기본 http 포트번호인 80번으로 접속하게 된다.

이때, 네트워크 탭에서 80번 포트 허용이 필요하다.

&nbsp;

다시 접속하면 그래도 안될 것이다. 

왜나하면 내가 인스턴스에서 돌리고 있는 앱은 3000번을 바라보고 있기 때문이다.

이때, 80번으로 접속한 나를 3000번으로 이동시켜주는 포트포워딩이 필요하다.

이를 위해서, 로드밸런싱 또는 nginx 를 활용하면 포트포워딩이 가능하다.

1. 로드밸런싱 😵
    
    → 비용이 너무 비싸다 (약 월 3만원, Lightsail 에서 신청했을 때)
    
2. Nginx ✅
    
    → SSH 터미널에 접속하여 nginx를 설치



&nbsp;

마지막으로 https 프로토콜 확보를 위해 SSL 인증을 받아야 한다.

**Certbot 설치** 

```
sudo apt install certbot python3-certbot-nginx -y
```

**SSL 인증서 발급**

  ```
  sudo certbot --nginx
  ```

  참고

  ```
  Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.-------------------------------------------------------------------------------1: No redirect - Make no further changes to the webserver configuration.2: Redirect - Make all requests redirect to secure HTTPS access. Choose this fornew sites, or if you're confident your site works on HTTPS. You can undo thischange by editing your web server's configuration.-------------------------------------------------------------------------------Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
  ```

  기존 HTTP 연결 요청을 HTTPS 로 자동으로 바꿔줄 것인지 선택한다. 

  자동으로 바뀌길 원한다면 2를 선택한다.

  설정이 완료되었다면 Nginx 설정파일에 아래 내용들이 추가된다.

  ```
  server {

  server_name ...

  root ...

  location / {
      
      ...
      
  }

  location ~* \.(js|css|png|jpg|jpeg|gif|ico|mp4|json|svg)$ {
    
    ...
    
  }

  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/meal.acg-playground.com/fullchain.pem; # manage>
  ssl_certificate_key /etc/letsencrypt/live/meal.acg-playground.com/privkey.pem; # mana>
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

  }
  ```

  ---

  ### **SSL 인증서 갱신 자동화**

  자동화 타이머 설정된 리스트를 조회

  ```
  sudo systemctl list-timers snap.certbot.renew.service
  ```

  설정파일 열기

  ```
  sudo nano /etc/letsencrypt/renewal/meal.acg-playground.com.conf
  ```

  아래 설정들을 추가해 주었다.

  ```
  만료 30일 전에 갱신하기 
  renew_before_expiry = 30 days

  갱신 시 자동으로 Nginx 재시동 설정
  renew_hook = systemctl reload nginx
  ```




최종적으로 https://meal.acg-playground.com 사이트 도메인을 사용할 수 있게 되었다. (v1 도메인, 현재는 다른 도메인으로 migration한 상태.)

대표님까지 사용 승인을 받아 전 직원이 언제 어디서나 앱을 사용하여 편리하게 식대를 입력 할 수 있게 되었다. 

또한, 점심조 제비뽑기를 위해 한명씩 찾아다니지 않아도 되었고, 

정산금 계산을 위해 엑셀 파일을 하나씩 열어서 확인할 필요가 없어졌다.


칭찬과 격려 속에 뿌듯하게 마무리 할 수 있었다.