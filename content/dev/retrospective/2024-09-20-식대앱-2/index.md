---
title: "식대앱 개발기 -2"
date: "2024-09-20"
slug: "productivity"
mainCategory: "Dev"
tags: ["aws","lightsail"]
thumbnail: "./thumbnail.webp"
summary: "식대 작성 앱"
---


외부 방화벽 설정 변경이 불가능하다는 피드백을 듣고 해결방안을 생각해 내야 했다.

사내 서버에 무슨일이 있어도 외부 접근은 불가능하다고 하셨으니, 

그 파일들을 내 AWS 버켓에 올려서 작업해야겠다고 판단했다.

그러면 방화벽 설정도 내가 할 수 있고, 접근도 훨씬 용이할 것 같았다.

&nbsp;

그러던 중 [AWS Lighsail](https://aws.amazon.com/ko/free/compute/lightsail/?trk=5ee88988-35e0-4ac4-b54f-913791232630&sc_channel=ps&ef_id=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB:G:s&s_kwcid=AL!4422!3!536392904551!e!!g!!lightsail!11549848931!116492045190&gclid=Cj0KCQjwna6_BhCbARIsALId2Z3wW8fIIrJdoQCMC-qz2Z8CBsJKVJHCgOUFYREl-zHNO_nImBVJ3OkaAsWHEALw_wcB)이란 것이 있다고 말씀해 주셔서 살펴보았는데, 클릭 몇번만으로 간단하게 EC2 생성이 가능했다.

또한 도메인, S3 등 보기 쉽게 정리되어 있어서 사용해보기로 했다.


&nbsp;

우선 원본 엑셀 파일들을 버킷에 옮겼다.

