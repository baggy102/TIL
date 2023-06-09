# 함수와 람다 표현식

# 함수
'''
함수란 특정한 작업을 하나의 단위로 묶어 놓은 것을 의미한다.
함수를 사용하면 불필요한 소스코드의 반복을 줄일 수 있다.
'''


# 함수의 종류
'''
내장 함수: 파이썬이 기본적으로 제공하는 함수
사용자 정의 함수: 개발자가 직접 정의하여 사용할 수 있는 함수
'''


# 함수 정의하기
'''
프로그램에는 똑같은 코드가 반복적으로 사용되어야 할 때가 많다.
함수를 사용하면 소스코드의 길이를 줄일 수 있게 된다.
 - 매개변수 : 함수 내부에서 사용할 변수
 - 반환 값 : 함수에서 처리 된 결과를 반환

def 함수명(매개변수):
	실행할 소스코드
	return 반환 값
'''

# 더하기 함수 예시1
def add(a, b):
	return a + b

print(add(3, 7))

# 더하기 함수 예시2
def add(a, b):
	print('함수의 결과:', a + b)

add(3, 7)


# 파라미터 지정하기
'''
파라미터의 변수를 직접 지정할 수 있다.
 - 이 경우 매개변수의 순서가 달라도 상관이 없다.
'''
def add(a, b):
	print('함수의 결과:', a + b)

add(b = 3, a = 7)


# global 키워드
'''
global 키워드로 변수를 지정하면 해당 함수에서는 지역 변수를 만들지 않고, 
함수 바깥에 선언된 변수를 바로 참조하게 된다.
'''
a = 0

def func():
	global a
	a += 1

for i in range(10):
	func()

print(a) 


# 전역변수로 list가 선언되어 있는 경우
'''
전역 변수로 선언된 내부 매서드를 호출하는것은 오류 없이 수행 가능하다.
'''
array = [1, 2, 3, 4, 5]

def func():
	array.append(6)
	print(array)

func()


# 여러 개의 반환 값
'''
파이썬에서 함수는 여러 개의 반환 값을 가질 수 있다.
'''
def operator(a, b):
	add_var = a + b
	subtract_var = a - b
	multiply_var = a * b
	divide_var = a / b
	return add_var, subtract_var, multiply_var, divide_var

a, b, c, d = operator(7, 3)
print(a, b, c, d)

# -> 반환된 순서에 맞게 특정 변수에 반환 값을 담는다.


# 람다 표현식
'''
람다 표현식을 이용하면 함수를 간단히 작성할 수 있다.
 - 특정한 기능을 수행하는 함수를 한 줄에 작성할 수 있다.
'''
def add(a, b):
	return a + b

# 일반적인 add() 메서드 사용
print(add(3, 7))

# 람다 표현식으로 구현한 add() 메서드
print((lambda a, b: a + b)(3, 7))
# -> 람다 표현식에서 함수의 이름 또한 요구하지 않는다.

# -> 함수 자체를 입력으로 받는 또 다른 함수를 구현할 때, 한번만 사용하는 경우 효과적이다

array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]

def my_key(x):
	return x[1]

print(sorted(array, key=my_key))
print(sorted(array, key=lambda x: x[1]))
# -> 튜플 내부 두 번째 원소를 기준으로 정렬하도록 한다.


# 여러 개의 리스트에 적용
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]

result = map(lambda a, b: a + b, list1, list2)

print(list(result))

# -> 각 순서에 맞는 원소끼리 더한 결과를 별도의 리스트에 담는다.