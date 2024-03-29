# TIL 
## 자료구조
<details>
<summary>Stack</summary>

<!-- summary 아래 한칸 공백 두어야함 -->
#### 스택(stack)

> 스택은 가장 마지막으로 들어간 데이터가 가장 첫 번째로 나오는 후입선출(LIFO, Last In First Out)을 가진 자료구조이다.
재귀적인 함수, 알고리즘에 사용되며 웹 브라우저 방문 기록 등에 쓰인다.

<img width="675" alt="image" src="https://github.com/baggy102/TIL/assets/127190426/698b94c4-06b1-4984-bc1e-f7b319b42717">

<br/>

#### JavaScript로 구현하기

```
class Stack {
  top = null;
  count = 0;
    
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  }
    
  pop() {
    if (!this.top) { // stack underflow 방지
      return false;
    }
    const data = this.top.data;
    this.top = this.top.next;
    // 예전 this.top의 메모리 정리
    this.count--;
    return data;
  }

  stackTop() {
    return this.top.data;
  }
}
```

```
class Node {
  next = null;
  constructor(data) {
    this.data = data;
  }
}
```
<br/>

```
* stack overflow 와 stack underflow란
각각 주어진 스택 메모리보다 데이터를 더 넣거나,
스택 메모리가 비어있는데 데이터를 꺼내려 했을 때
발생하는 에러이다.
```
</details>


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

	최소 용량, 희망 용량, 최대 용량을 설정해, EC2 인스턴스의 갯수를 조정하여 비용 효율적인 아키텍처를 설계할 수 있다.


#### 트래픽 처리

로드 밸런서
요청을 받은 후 처리할 인스턴스로 라우팅하는 인스턴스

Elastic load balancing

ELB는 트래픽을 EC2 인스턴스와 같은 여러 리소스에 자동 분산하는 AWS 서비스이다.
들어오는 트래픽의 양에 따라 EC2 인스턴스를 추가, 제거하므로 
이러한 요청이 로드 밸런서로 먼저 라우팅 되고, 이후 요청을 처리할 리소스로 분산된다.

즉, ELB와 EC2 Auto Scaling을 서로 연동하여 실행되는 애플리케이션이 뛰어난 성능과 가용성을 제공하도록 돕는다.


#### 메시징 및 대기열

애플리케이션이 직접 소통하는 밀결합된 상태에서는 구성 요소의 고장이나 변경의 경우 다른 구성 요소 혹은 애플리케이션 전체에 장애가 발생할 수 있다.
안정적인 아키텍처에서는 애플리케이션 A에서 메시지 대기열에 메시지를 전송하고 애플리케이션 B에서 순차적으로 이를 실행한다.

AWS 에서는 이를 Amazon Simple Queue Service(Amazon SQS)와 Amazon Simple Notification Service(Amazon SNS)를 통해 제공한다.

- SQS
	SQS 대기열은 메시지가 처리될 때까지 배치되는 영역으로
	규모에 상관없이 소프트웨어 구성요소 간 메시지를 전송, 저장, 수신 할 수 있다.
	메시지에 포함된 데이터는 페이로드라고 하며, 이러한 데이터는 전달되기 전까지 안전하게 보호된다.
- SNS
	Amazon Simple Notification Service는 게시 및 구독 서비스로써
	SNS 주제(메시지를 전달할 채널)를 사용하여
	주제에 대한 구독자를 구성하고, 구독자에게 최종적으로 메시지를 전달한다.

### 추가 컴퓨팅 서비스

사용 사례에 따라 EC2 인스턴스를 대신 할 대안을 사용해야하는 경우
다른 컴퓨팅 옵션을 대안을 사용할 수 있다.

#### 서버리스

기본 인프라나 인스턴스를 마치 서버가 없는것 처럼 관리할 필요가 없다.
사용자는 애플리케이션에만 집중 할 수 있다.

- AWS Lambda
	서버리스 컴퓨팅 옵션 중 하나로
	사용자가 코드를 Lambda 함수에 업로드 할 수 있게 도와
	트리거에 의해 이 Lambda가 자동으로 조절된다.
	이를 통해 사용자는 사용한 컴퓨팅 시간에 대한 요금만 지불할 수 있다.
	(웹 서비스의 백엔드 혹은 요청 처리 등 처리 시간이 빠른 경우 유용)

또한, AWS 에서는 컨테이너식 애플리케이션을 빌드하고 실행할 수 있다.

- 컨테이너
  
	애플리케이션과 애플리케이션을 실행하는 구성 요소를 모아둔 패키지
	컨테이너식 애플리케이션을 실행 할 경우 확장성을 고려해야한다.
	
- 컨테이너 오케스트레이션 도구
  
	컨테이너 관리를 지원하기 위한 서비스
	- Amazon Elastic Container Service (ECS)
   
		AWS에서 컨테이너식 애플리케이션을 실행, 확장할 수 있는 확장성이 뛰어난 컨테이너 관리 시스템

		ECS는 애플리케이션을 신속하게 구축, 테스트 배포할 수 있는 플랫폼인 Docker 컨테이너를 지원
	- Amazon Elastic Kubernetes Service (EKS)
   
		AWS에서 Kubernetes를 실행하는 데 사용할 수 있는 완전관리형 서비스이다.
	- AWS Fargate
   
		컨테이너 용 서버리스 컴퓨팅 플랫폼

		Amazon EKS와 Amazon ECS에서 작동한다.

		Fargate는 자동으로 서버 인프라를 관리한다.

</details>

<details>
<summary>AWS 네트워킹</summary>

<!-- summary 아래 한칸 공백 두어야함 -->
### Amazon Vurtural Private Cloud(VPC)
AWS 서비스 사용자들의 인스턴스와 같은 리소스에 경계가 없다면 네트워크 트래픽이 제한 없이 리소스 간에 흐를 것이다.

VPC 를 사용하면 사용자가 정의한 가상 네트워크에서 AWS 리소스를 실행할 수 있는 격리된 AWS cloud 섹션을 프로비저닝 할 수 있다.

VPC 내에는 EC2 인스턴스와 같이 사용자가 정의한 가상 네트워크 리소스를 배치할 수 있으며,
한 VPC 내에서 여러 서브넷을 통해 리소스를 구성할 수 있다. 

서브넷은 VPC에 있는 ip 주소의 모음으로써,  리소스를 그룹화 할 수 있게한다.

#### 인터넷 게이트웨이

인터넷 게이트 웨이는 VPC와 인터넷 간의 연결으로써, 인터넷 게이트 웨이가 없으면 아무도 VPC 내의 리소스에 액세스할 수 없다.

- 퍼블릭 트래픽
	인터넷 게이트라는 공개된 출입구를 통해서 리소스에 액세스
- 프라이빗 트래픽
	가상 프라이빗 게이트웨이를 통해 승인된 네트워크에서 나오는 트래픽만 VPC로 들어가도록 허용
	
#### AWS Direct Connect
	
 데이터센터에서 AWS로 이어지는 비공개 전용 회선 구축
 
이를 통해 높은수준의 규제와 규정준수 요구사항을 쉽게 충족할 수 있다.
<br/>
<br/>
### VPC 네트워크 트랙픽

고객이 AWS 클라우드에서 호스팅되는 애플리케이션에 데이터를 요청하면 이 요청은 패킷을 전송된다.

패킷은 인터넷 게이트웨이를 통해 VPC 내부로 들어가서,

서브넷 경계에서 네트워크 액세스 제어 목록을 통해 권한을 확인한다.

#### 네트워크 ACL
서브넷 수준에서 인바우드 및 아웃바운드 트래픽을 제어하는 가상 방화벽
- **스테이트리스** 패킷 필터링(상태 비저장)
- ACL은 기본적으로 모든 트래픽 허용	

하지만 네트워크 ACL은 서브넷 경계를 지나는 패킷만 검사할 수 있으며,
패킷이 특정 EC2 인스턴스에 도달할 수 있는지는 평가할 수 없다.

#### 보안그룹
Amazon EC2 인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽
- **스트레이트풀** 패킷 필터링 (상태 저장) 즉, 들어오는 패킷에 대한 결정을 기억한다.
	

</details>

<details>
<summary>AWS 스토리지 및 데이터 베이스</summary>

<!-- summary 아래 한칸 공백 두어야함 -->
### 인스턴스 스토어 및 Amazon Elastic Block Store(Amazon EBS)

#### 블록 수준 스토리지
- 파일을 저장하는 곳
- 바이트 단위로 디스크의 블록에 저장
- 파일이 변경되는 경우 변경 된 부분만 업데이트
- 자주 변경되는 데이터를 다루는 경우 효율적인 스토리지 유형

#### 인스턴스 스토리지 볼륨
- 시작한 인스턴스 EC2 유형에 따라
- 인스턴스 스토리지 볼륨이라는 로컬 저장소를 제공할 수 있다.
- 이러한 볼륨은 EC2 인스턴스가 실제로 실행되는 호스트에 **물리적으로** 연결,
- 인스턴스를 중지하거나 종료하면 인스턴스 스토리지 볼륨의 모든 데이터가 삭제된다.

휘발되어서는 안되는 중요한 데이터는 어디에 작성해야 할까?

#### Amazon Elastic Block Store (Amazon EBS)
- EC2 수명주기가 끝나도 데이터 지속
- EBS 볼륨이라는 가상 하드 드라이브와 EC2 인스턴스를 연결
- EBS 볼륨은 지속적으로 애플리케이션이 쓰기 작업을 할 수 있는 하드디스크가 필요할 때 유용
- EBS 볼륨에 대한 스냅샷(증분백업)을 정기적으로 생성하는 것이 중요

<br/>

### Amazon Simple Storage Service (Amazon S3)

#### Amazon S3

객체 수준 스토리지를 제공하는 서비스
- 무한대의 데이터 저장 및 검색 가능
- 데이터는 객체로써 저장
- 객체를 버킷에 저장
- 객체 버전 관리 가능

#### Amazon S3 Strage Class
Amazon S3 Standard
- 자주 액세스하는 데이터용 설계
- 최소 3개 가용 영역에 데이터 저장
Amazon S3 standard-Infrequent Access (S3 standard-IA)
- 자주 액세스 하지 않지만 필요할 때 빠른 액세스가 필요한 경우 효과적
Amazon S3 One-Zone-Infrequent Access
- 단일 가용영역에 데이터 저장
- 스토리지 비용 절감
Amazon S3 Glacier Flexible Retrieval
- 데이터 보관용 저비용 스토리지

S3 수명 주기 정책으로 데이터는 여러 계층을 자유롭게 이동 가능하다.

<br/>

### Amazon Eelastic File System (Amazon EFS)

#### 파일 스토리지
- 파일 스토리지에서는 여러 클라이언트가 공유 파일 폴더에 저장된 데이터에 액세스 가능
- 많은 수의 서비스 및 리소스가 동시에 동일한 데이터에 액세스해야 하는 경우

#### Amazon EFS 
- AWS에서 제공하는 확장 가능한 파일 시스템
- 파일 추가 또는 제거에 따라 EFS는 자동으로 확장 및 축소된다.

단일 가용 영역에 데이터를 저장해, EC2 인스턴스와 동일 가용영역에서 연결되는 EBS와 달리
EFS는 리전 기반 리소스로써, 여러 가용 영역에 걸쳐 데이터를 저장한다.
중복 스토리지 사용을 통해 파일 시스템이 위치한 리전의 모든 가용 영역에서 동시에 데이터에 액세스 할 수 있다.

<br/>

### Amazon Relational Database Service (Amazon RDS)

- AWS 클라우드에서 관계형 데이터 베이스를 실행할 수 있는 서비스
- 하드웨어 프로비저닝, 데이터베이스 설정, 패치 적용 백업과 같은 작업을 자동화하는 관리형 서비스

#### Amazon RDS 데이터 베이스 엔진
- Amazon Aurora
- Postgre SQL
- MySQL
- MariaDB
- Oracle Database
- Microsoft SQL Server

<br/>

### Amazon DynamoDB
AWS에서 제공하는 **key-value** 데이터베이스 서비스
- 서버리스 데이터베이스로서, 서버를 프로비저닝, 패치 적용 또는 관리할 필요가 없다.
- 용량변화에 맞춰 자동으로 크기 조정하면서 일관된 성능을 유지한다. (크기 조정에도 고성능이 요구되는 경우 적합)

<br/>

### Amazon Redshift
- 빅데이터 분석에 사용할 수 있는 **데이터 웨어하우징** 서비스
- 여러 원본에서 데이터를 수집, 데이터 간 관계 및 추세를 파악하는 기능 제공

<br/>

### AWS Database Migration Service (AWS DMS)
기존 데이터 베이스를 안전하게 AWS로 Migration할 수 있는 서비스
- 원본 및 대상 데이터베이스의 유형이 동일할 필요 없다.
- 개발 및 테스트 데이터베이스 마이그레이션, 데이터베이스 통합, 연속 데이터베이스 복제 가능

</details>


## Session
