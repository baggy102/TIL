# Python 자료형

''' 파이썬의 자료형으로는 정수형, 실수형, 복소수형, 문자열, 리스트, 튜플, 사전 등이 있다.
	파이썬의 자료형은 필수적으로 알아두어야한다.


정수형
정수형(Integer)은 정수를 다루는 자료형이다.
	양의 정수, 음의 정수, 0이 포함된다.
코딩 테스트에서 출제되는 많은 문제들은 정수형을 주로 다룬다.
'''

# 양의 정수
a= 1000
print(a)

# 음의 정수
a = -7
print(a)

# 0 
a = 0
print(a)


# 실수형
'''
실수형(Real Number)은 소수점 아래의 데이터를 포함하는 수 자료형이다.
 - 파이썬에서는 변수에 소수점을 붙인 수를 대입하면 실수형 변수로 처리된다.
 - 소수부가 0이거나, 정수부가 0인 소수는 0을 생략하고 작성할 수 있다.
'''

# 지수 표현 방식
'''
파이썬에서는 e나 E를 이용해 지수 표혆 방식을 이용할 수 있다.
e나 E 다음에 오는 수는 10의 지수부를 의미한다.
이러한 지수 표현 방식은 실수 형태로 표현된다. 
예를 들어 1e9라고 입력하게 되면, 10의 9제곱이 됩니다.

유효숫자e지수 = 유효숫자 x 10^지수

지수 표현 방식은 임의의 큰 수를 표현하기 위해 자주 사용된다.
최단 경로 알고리즘에서는 도달할 수 없는 노드에 대해 최단 거리를 무한(INF)로 설정하곤 한다.
이때 가능한 최댓값이 10억 미만이라면 무한(INF)의 값으로 1e9를 이요할 수 있다.
'''

'''
오늘날 가장 널리 쓰이는 IEEE754 표준에서는 실수형을 저장하기 위해 4바이트, 혹은 8바이트의 고정된 크기의 메모리를 할당하므로, 컴퓨터 시스템은 실수 정보를 표현하는 정확도에 한계를 가진다.

예를 들어 10진수 체계에서는 0.3과 0.6을 더한 값이 0.9로 정확히 떨어진다.
 - 하지만 2진수에서는 0.9를 정확히 표현할 수 있는 방법이 없다.
 - 컴퓨터는 최대한 0.9와 가깝게 표현하지만, 미세한 오차가 발생한다.
'''

a = 0.3 + 0.6
print(a)	# 0.8999999999

if a == 0.9:
	print(True)
else:
	print(False)	#False

'''
이러한 표현상의 한계를 해결하기 위해
round() 함수를 이용할 수 있으며, 이러한 방법이 권장된다.
예를 들어 123.456을 소수 셋째 자리에서 반올림하려면
roumd(123.456, 2)라고 작성한다.
	- 그 결과는 123.46이 된다.
'''

a = 0.3 + 0.6
print(round(a, 4))	#0.9

if round(a, 4) == 0.9:
	print(True)
else:
	print(False)	# True


# 수 자료형의 연산
'''
수 자료형에 대해 사칙연산과 나머지 연산자가 많이 사용된다.
단 나누기 연산자(/)를 주의해서 사용해야하는데,
 - 파이선에서 나누기 연산자(/)는 나눠진 결과를 실수형으로 반환한다.
다양한 로직을 설계할 때 나머지 연산자(%)를 이용해야 할 때가 많다.
파이썬에서 몫을 얻기 위해 몫 연산자(//)를 사용한다.
이외에도 거듭 제곱 연산자(**)를 비롯한 다양한 연산자가 존재
'''

a = 7
b = 3

# 나누기
print(a / b)

# 나머지
print(a % b)

# 몫
print(a // b)


# 리스트 자료형

'''
여러 개의 데이터를 연속적으로 담아 처리하기 위해 사용하는 자료형이다.
 - 사용자 입장에서 C나 자바에서의 배열의 기능 및 연결 리스트와 유사한 기능을 지원한다.
 - C++의 STL vector와 기능적으로 유사하다.
 - 리스트 대신에 배열 혹은 테이블이라고 부르기도 한다.
'''

# 리스트의 초기화

'''
 - 대괄호([])안에 원소를 넣어 초기화 하며, 쉼표(,)로 원소를 구분한다.
 - 비어 있는 리스트를 선언하고자 할 때는 list() 혹은 간단히 []를 이용할 수 있다.
 - 리스트의 원소에 접근할 때는 인덱스(index) 값을 괄호에 넣는다. (이때 인덱스는 0부터 시작)
'''

# 직접 데이터를 넣어 초기화
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(a)

# 네 번째 원소만 출력
print(a[3])

# 크기가 N이고, 모든 값이 0인 1차원 리스트 초기화
n = 10
a = [0] * n
print(a)

# 리스트의 인덱싱과 슬라이싱

'''
인덱스 값을 입력하여 리스트의 특정한 원소에 접근하는 것을 인덱싱이라고 한다.
 - 파이썬의 인덱스 값은 양의 정수와 음의 정수 모두 사용 가능하다.
- 음의 정수를 넣으면 원소를 거꾸로 탐색하게 된다.
'''

a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 여덟 번째 원소만 출력
print(a[7])

# 뒤에서 첫 번째 원소 출력
print(a[-1])

# 네 번째 원소 값 변경
a[3] = 7
print(a)

'''
리스트에서 연속적인 위치를 갖는 원소들을 가져와야 할 때 슬라이싱(Slicing)을 이용한다.
 - 대괄호 안에 콜론(:)을 넣어 시작 인덱스와 끝 인덱스를 설정한다.
 - 끝 인덱스는 실제 인덱스보다 1을 더 크게 설정한다.
'''

a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 네 번째 원소만 출력
print(a[3])

# 두 번째 원소부터 네 번째 원소까지 출력
print(a[1 : 4])


# 리스트 컴프리헨션

'''
리스트를 초기화하는 방법 중 하나
 - 대괄호 안에 조건문과 반복문을 적용하여 리스트를 초기화 할 수 있다.
'''

# 0부터 9까지 수를 포함하는 리스트
array = [i for i in range(10)]

print(array)

# 0부터 19까지의 수 중 홀수만 포함하는 리스트
array = [i for i in range(20) if i % 2 == 1] 

print(array)

# 1부터 9까지의 수 들의 제곱 값을 포함하는 리스트
array = [i * i for i in range(1, 10)]

print(array)

'''
리스트 컴프리헨션은 2차원 리스트를 초기화할 때 효과적으로 사용될 수 있다.
특히 N x M 크기의 2차원 리스트를 한 번에 초기화 해야 할 때 유용하다.
 - ex. array = [[0] * m for _in range(n)]

만약 2차원 리스트를 초기화할 때 다음과 같이 작성하면 예기치 않은 결과가 나올 수 있다.
 - ex. array = [[0] * m] * n
 - 위 코드는 전체 리스트 안에 포함된 각 리스트가 모두 같은 객체로 인식된다.
'''


# 언더바(_)

# 파이썬에서는 반복을 수행하되 반복을 위한 변수의 값을 모두 무시하고자 할 때 언더바(_)를 자주 사용한다.

# 1부터 9까지의 자연수 더하기

summary = 0
for i in range(1, 10):
	summary += i
print(summary)

# "Hello World" 5번 출력하기

for _ in range(5):
	print("Hello World")

# 리스트 관련 메서드

'''
append()    변수명.append() : 리스트에 원소를 하나 삽입할 때 사용

sort()      변수명.sort() : 기본 정렬 기능으로 오름차순으로 정렬한다.
            변수명.sort(reverse=True) : 내림차순으로 정렬한다.

reverse()   변수명.reverse() : 리스트의 원소의 순서를 모두 뒤집는다.

insert()    insert(삽입할 위치 인덱스, 삽입할 값) : 특정 인덱스 위치에 원소를 삽입할 때 사용한다.

count()     변수명.count(특정 값) : 리스트에서 특정한 값을 가지는 데이터의 개수를 셀 때 사용한다.

remove()    변수명.remove(특정 값) : 특정한 값을 갖는 원소를 제거하는데, 
                                    값을 가진 원소가 여러 개면 하나만 제거한다.
'''

a = [1, 4, 3]
print("기본 리스트: ", a)

# 리스트에 원소 삽입
a.append(2)
print("삽입: ", a)

# 오름차순 정렬
a.sort()
print("오름차순 정렬 ", a)

# 내림차순 정렬
a.sort(reverse = True)
print("내림차순 정렬: ", a)

a = [4, 3, 2, 1]

# 리스트 원소 뒤집기
a.reverse()
print("원소 뒤집기: ", a)

# 특정 인덱스에 데이터 추가
a.insert(2, 3)
print("인덱스 2에 3 추가: ", a)

# 특정 값인 데이터 개수 세기
print("값이 3인 데이터 개수: ", a.count(3))

# 특정 값 데이터 삭제
a.remove(1)
print("값이 1인 데이터 삭제: ", a)

a = [1, 2, 3, 4, 5, 5, 5]
remove_set = {3, 5} 

# remove_list에 포함되지 않은 값만을 저장
result = [i for i in a if i not in remove_set]

print(result)

