---
layout: post
title: "Network_7"
categories: Computer_Science
tags: Network TCP Congestion_Control
---

# 7번째-수업

## Congestion Control

- 수도관을 예로 들어보자
  - 수도관의 너비를 알 수 없는 상황에서 수도관에 물을 과하게 부어버리면 터진다.
  - 그러면 이 수도관의 너비를 알아야 하는데 알 수가 없다.
  - 이러한 상황에서 물을 한바가지씩 붓는다.
  - 문제가 없다면 또 한바가지..
  - 문제가 생간다면 그때만큼 부었던 바가지의 양에서 조절 가능하다.

<br/> 

### 3 main phases

1. **Slow start**
2. **Addictive increases** 
3. **Multiplicative increase**



혼잡을 일으킬 가능성은 가장 적다.

하지만 너무 천천히하면 이것도 문제다.

따라서 1,2,3,4, ... 에서 제곱한 수를 보낸다 . 1,2,4,8, ...

이때, 조심해야 할 지점을 **threshold**라고 부른다

<br/>

<img src="/assets/images/image-20210111203358762.png" alt="image-20210111203358762" style="zoom:50%;" />

*왜 절반이나 떨어뜨릴까 ? N/W는 공유자원이므로 확 줄여야 혼란이 풀리기 때문.*



<br/> 

### MSS (Maximum segment Size)

: Segment는 최대 500byte를 가질 수 있다.

하나, 두개, 세개, ... 각각 하나의 MSS단위임.



TCP가 생성되면 두개의 버퍼 (send, receiver)가 생성되고, window size는 한번에 보낼 수 있는 양이다.

가장 처음에는 1MSS로 설정이 되어 있다. 

이러한 과정을 통해 window size가 수시로 조절된다.



<img src="/assets/images/image-20210111203705774.png" alt="image-20210111203705774" width ="60%"/>

congWin 사이가 클수록 속도가 빠르다.

`rate = CongWin / RTT `  *RTT : Round Trip Time

<img src="/assets/images/image-20210111203905693.png" alt="image-20210111203905693" width ="60%"/>

그림처럼 쭉 이어나가면 안되는건가 ? 

- 항상 N/W상황이 변하기 때문에 알 수가 없다. 즉, 계속해서 알아가는 과정이다.



`rate = CongWin / RTT `

둘 중 변동성이 더 큰 것은 `congWin` 이다. 즉, congWin(N/W환경)에 의해 속도가 좌우된다. 



<br/> 

### TCP Tahoe VS TCP Reno



<img src="/assets/images/image-20210111204648090.png" alt="image-20210111204648090" width ="90%"/>

#### TCP Tahoe

- TCP에서 패킷 유실을 감지하는 조건을 생각해보면,
- TCP에서 패킷 유실을 감지하는 조건은 2가지가 있다.
  1. timeout이 발생한 경우
  2. 3 duplicate ACK
- 두가지의 상황에서 N/W상황이 항상 같을까 ? ㄴㄴ
  1. 3 duplicate ACK 은 N/W상황은 원할하지만 특정 패킷만 받지 못한 경우임
  2. timeout은 N/W상황자체가 불안해 총체적 난국.
- 따라서 둘의 상황을 각각 나눠서 생각해야 한다.
- 이를 고려한 TCP가 **TCP Reno**

<br/> 

#### TCP Reno

<img src="/assets/images/image-20210111205048574.png" alt="image-20210111205048574" width ="90%" />

- 3 duplicate ACK 상황이면 **TCP Reno**
- timeout이라면 **TCP Taho**를 사용하게 된다.



<br/> 

### TCP fairness

실제로 수많은 TCP 연결을 사용할 것임.

그럼 그 각각의 독립적인 TCP사용에 자원을 공평하게 사용할 수 있는가 ???? ㅇㅇ

<img src="/assets/images/image-20210111205418957.png" alt="image-20210111205418957" width ="60%"/>



- 결국 교차점으로 수렴하게 된다. (우연의 일치?일수도?ㅎㅎ)







 






