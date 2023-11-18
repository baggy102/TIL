# TIL 
## Today I Learn

공부한 내용을 하루하루 기록합니다.

## AWS

<details>
<summary>클라우드 컴퓨팅</summary>

<!-- summary 아래 한칸 공백 두어야함 -->
### 클라우드 컴퓨팅
클라우드 컴퓨팅

클라우드 컴퓨팅은 IT 리소스를 인터넷을 통해 온디맨드로 제공하며 사용한 만큼만 비용을 지불합니다.

온디맨드 제공이란 AWS가 사용자에게 필요한 리소스를 필요한 순간에 전달할 수 있다는 것이다.
이를 통해 사용자는 리소스가 필요하다고 미리 알리지 않아도 되며,
300개의 가상 서버가 갑자기 필요해 질 경우 미리 통보하지 않고 클릭 몇번으로 바로 시작할 수 있는것이다.

클라우드 컴퓨팅 모델

- IaaS
	클라우드 IT의 기본 빌딩 블록을 포함하고 일반적으로
	네트워킹 기능, 컴ㅁ퓨터 및 데이터 스토리지 공간을 제공
- PaaS
	기본 인프로를 관리할 필요가 없어 애플리케이션 개발과 관리에 집중 가능
	리소스 구매, 용량 계획, 소프트웨어 유지 관리 등 다른 모든 획일적 작업에 대한
	부담을 덜어 줌
- SaaS
	서비스 제공업체에 의해 실행되고 관리되는 완전한 제품을 제공하여
	소프트웨어 특정 부분을 어떻게 사용할지만 생각하면 된다.


클라우드 컴퓨팅의 배포 모델

- 클라우드 기반 배포
	애플리케이션의 모든 부분을 클라우드에서 실행
	기존 애플리케이션을 클라우드로 마이그레이션
	클라우드에서 새 애플리케이션 설계 및 빌드
- 온프레미스 배포
	가상화 및 리소스 관리 도구를 사용해 리소스를 배포
	애플리케이션 관리 및 가상화 기술을 사용해 리소스 활용도를 높임
- 하이브리드 배포
	클라우드 기반 리소스를 온프레미스 인프라에 연결
	클라우드 기반 리소스를 레거시 IT 애플리케이션과 통합

### EC2
AWS EC2

Amazon Elastic Compute Cloud

서비스 운영을 위해 서버가 필요하다.
이 서버를 통해 웹 애플리케이션을 호스팅하고, 필요한 컴퓨팅 용량을 제공한다.

AWS를 사용하는 경우 이러한 서버가 곧 물리적이니서버가 아닌 가상화되어 있는 서버이다.
이 가상화된 서버에 액세스 하는데 사용하는 서비스를 EC2라고 한다.

기본적으로 EC2는 가상화 기술을 사용해 AWS에서 관리한다.
또한 AWS에서 관리하고 있는 물리적 호스트 시스템에서 실행 되기  때문에
EC2를 실제 가동할 때는 전체 호스트를 소유하지 않고, 호스트를 다른 여러 인스턴스와 공유해 사용한다.
이러한 방식을 가상 머신이라 한다.

이러한 가상 머신끼리 서로 물리적인 리소르르 공유하고 책임지는것을 멀티 테넌시라 한다.
AWS는 하이퍼바이저를 통해 멀티 테넌시 조정을 책임지고 관리한다.
또한, 하이퍼바이저는 호스트의 리소스를 서로 공유하는 가상 머신을 서로 분리한다.

즉, EC2 인스턴스가 서로 리소스를 공유하며, 그 호스트에 있는 다른 EC2 인스턴스는 인식하지 않는 것이다.


#### Amazon EC2 인스턴스 유형

Amazon EC2 인스턴스 유형은 다양한 작업에 최적화 되어 있으며,
워크로드 및 애플리케이션의 요구사항을 고려해야 한다.

각 EC2 인스턴스의 유형은 인스턴스 패밀리로 구분되며, 특정 작업에 최적화 된다.

- 범용
	균형 있는 리소스
	다양한 워크로드
- 컴퓨팅 최적화
	고성능 프로세서를 활용하는 컴퓨팅 집약적인 애플리케이션에 적합
	게임 서버
	고성능 컴퓨팅(HPC)
	과학 모델링
- 메모리 최적화
	대규모 데이터 집합을 처리하는 워크로드에 빠른 성능을 제공
	메모리 집약적 작업
- 액셀러레이티드 컴퓨팅
	하드웨어 액셀러레이터 또는 코프로세서를 사용해 CPU에서 실행되는 소프트웨어에서 보다 더 효율적으로 수행
	부동 소수점 숫자 계산
	그래픽 처리
	데이터 패턴 일치
- 스토리지 최적화
	로컬 스토리지의 대규모 데이터 집합에 대한 액세스가 많이 필요한 워크로드를 위해 설계
	대규모 데이터를 빠르게 처리하는 데이터 웨어하우스
	분산 파일 시스템
	고빈도 온라인 트랜잭션 처리(OLTP)


#### EC2 요금
Amazon EC2에서는 사용한 컴퓨팅 시간에 대해서만 비용을 지불하며,
사용 사례에 따라 다양한 요금 옵션을 제공한다.

EC2 요금 옵션
- 온디맨드
	중단할 수 없는 불규칙한 단기 워크로드가 있는 애플리케이션에 가장 적합
	인스턴스는 중지될 때까지 계속 실행되며, 사용한 컴퓨팅 시간에 대해서만 비용 지불
- 예약 인스턴스
	계정에서 온디맨드 인스턴스를 사용할 때 적용되는 결제 할인 옵션
	
	> - 표준 예약 인스턴스 : 안정적 상태의 애플리케이션에 필요한 인스턴스 유형 및 크기, AWS 리전을 알고 있는 경우 적합
	> - 컨버터블 예약 인스턴스 : 여러 가용 영역 또는 다양한 인스턴스 유형에서 실행해야 하는 경우 적합
- EC2 Instance Savings Plans
	특정 인스턴스 패밀리 및 리전에 대해 1년 또는 3년 기간 동안 시간당 지출 약정ㅇ르 할 경우 EC2 인스턴스 비용을 할인한다.
	약정 기간 동안 사용량에 유연성이 필요한 경우 적합한 옵션
- 스팟 인스턴스
	미사용 Amazon EC2 컴퓨팅 용량을 사용해 온디맨드 요금의 ㅣ최대 90% 까지 비용을 절감 할 수 있다.
	시작 및 종료 시간이 자유롭거나 중단을 견딜 수 있는 워크로드에 적합
- 전용 호스트
	EC2가 사용하는 물리적 호스트를 전용으로 사용할 수 있다.
	가장 많은 비용이 요구


#### Amazon EC2 크기 조정

온프라미스 데이터 센터 경우
고객 워크로드는 시간에 따라 달라진다.
만약 평균 사용량 만큼 하드웨어를 구매하는 경우 피크 부하 발생 시
하드웨어 부족으로 고객에게 서비스를 제공할 수 없을 것이다.

- EC2의 확정성, 탄력성
	필요한 리소스만으로 시작하고 확장 및 축소를 통해 변화에 자동으로 대응하도록 아키텍처를 설계해야한다.
	이 기능을 AWS에서 **Amazon EC2 Auto Scaling**을 통해 지원한다.

- Amazon EC2 Auto Scaling
	변화하는 애플리케이션 수요에 따라 EC2 인스턴스를 자동으로 추가하거나 제거할 수 있다.
	동적 조정(수요 변화에 대응)과, 예측 조정(적정 수 인스턴스를 자동으로 예약)이라는 2가지 접근 방식에 따라 이루어 진다.

	Auto Scaling 그룹의 크기를 구성할 때 최소 Amazon EC2 인스턴스 수를 1로 설정하면, 
	하나 이상의 EC2 인스턴스가 항상 실행중인 상태가 된다.

Auto Scaling에서는 최소 용량, 희망 용량, 최대 용량을 통해 EC2 인스턴스의 갯수를 조정하여 비용 효율적인 아키텍처를 설계할 수 있다.
</details>

