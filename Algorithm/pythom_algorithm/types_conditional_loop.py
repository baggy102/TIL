# 조건문과 반복문

#조건문 
'''
조건문은 프로그램의 흐름을 제어하는 문법이다
조건문을 이용해 조건에 따라 프로그램의 로직을 설정할 수 있다.
'''
x = 15

if x >= 10:
	print("x >= 10")

if x >= 0:
	print("x >= 0")

if x >=30:
	print("x >= 30")


#들여쓰기
'''
파이썬은 코드의 블록(block)을 들여쓰기로 지정한다.
다음의 코드에서 2번 라인은 무조건 실행된다.
'''
score = 85 

if score >= 70:
	print('성적이 70점 이상입니다.')
	if score >= 90:
		print('우수한 성적입니다.')
else:
	print('성적이 70점 미만입니다.')
	print('조금 더 분발하세요.')

print('프로그램을 종료합니다.') # 2번 라인

# 파이썬 스타일 가이드라인에서는 4개의 공백 문자를 사용하는 것을 표준으로 설정하고 있다.


# 조건문의 기본 형태
'''
조건문의 기본적인 형태는 if~elif~else이다.
 - 조건문을 사용할 때 elif 혹은 else 부분은 경우에 따라서 사용하지 않아도 된다.

if 조건문 1:
	조건문 1이 True일 때
elif 조건문 2:
	조건문 1에 해당하지 않고, 조건문 2가 True일 때
else:
	위의 모든 조건문이 모두 True 값이 아닐 때
'''


# 비교 연산자
'''
비교 연산자는 특정한 두 값을 비교할 때 이용한다.
 - 대입 연산자(=) 와 같은 연산자(==) 차이 주의

	X == Y	: X와 Y가 서로 같을 때 참이다.
	X != Y	: X와 Y가 서로 다를 때 참이다
	X > Y	: X가 Y 보다 클 때 참이다.
	X < Y	: X가 Y 보다 작을 때 참이다.
	X >= Y	: X가 Y 보다 크거나 같을 때 참이다.
	X <= Y	: X가 Y 보다 작거나 같을 때 참이다.
'''


# 논리 연산자
'''
논리 연산자는 논리 값 (True/ False) 사이의 연산을 수행할 때 사용한다.

	X and Y	: X와 Y가 모두 참일 때 참이다.
	X or Y	: X와 Y 중 하나만 참이어도 참이다.
	not X	: X가 거짓일 때 참이다.
'''


# 파이썬의 기타 연산자
'''
다수의 데이터를 담는 자료형을 위해 in 연산자와 not in 연산자가 제공된다.
 - 리스트, 튜플, 문자열, 딕셔너리 모두에서 사용이 가능하다.

	x in 리스트	: 문자열 안에 x가 들어있을 때 참이다.
	x not in 리스트	: 문자열 안에 x가 들어가 있지 않을 때 참이다.
'''


# pass 키워드
'''
아무것도 처리하고 싶지 않을 때 pass 키워드를 사용한다.
Ex. 디버깅 과정에서 일단 조건문 형태만 만들어 놓고 조건문을 처리하는 부분은 비워놓고 싶을 때
'''

score = 85 

if score >= 80:
	pass # 나중에 작성 할 코드
else:
	print('성적이 80점 미만입니다.')
	
print('프로그램을 종료합니다.')



# 조건문의 간소화

# 조건문에서 실행될 소스코드가 한 줄인 경우, 굳이 줄 바꿈을 하지 않고도 간략하게 표현할 수 있다.

score = 85

if score >= 80: result = "Success"
else: result = "Fail"

# 조건부 표현식은 if~else 문을 한 줄에 작성할 수 있도록 한다.

score = 85
result = "Success" if score >= 80 else "Fail"
# True일 때 if 조건문 False일 때

print(result)


# 파이썬 조건문 내에서의 부등식
'''
다른 프로그래밍 언어와 다르게 파이썬은 조건문 안에서 수학의 부등식을 그대로 사용할 수 있다.
Ex. x > 0 and x < 20 과 0 < x < 20은 같은 결과를 반환한다.
'''

x = 15
if x > 0 and x < 20:
	print("x는 0 이상 20 미만의 수 입니다.")

x = 15
if 0 < x < 20:
	print("x는 0 이상 20 미만의 수 입니다.")


# 반복문
'''
특정한 소스코드를 반복적으로 실행하고자 할 때 사용하는 문법이다.
파이썬에서는 While문과 for문이 있다.
 - 코딩 테스트 시 for문을 사용하는것이 더 간결한 경우가 많다.
'''

# 1부터 9까지 모든 정수의 합 구하기 (while)
i = 1 
result = 0

# i 가 9보다 작거나 같을 때 아래 코드를 반복적으로 실행
while i <= 9:
	result += 1
	i += 1

print(result)

# 1부터 9까지 홀수의 합 구하기

i = 1
result = 0

while i <= 9:
	if i % 2 == 1:
		result += 1
	i += 1

print(result)


# 반복문에서의 무한 루프
'''
무한 루프란 끊임없이 반복되는 반복 구문을 의미한다.
 - 코딩 테스트에서 무한 루프를 구현할 일은 거의 없으니 유의해야한다.
 - 반복문을 작성한 뒤에는 항상 반복문을 탈출할 수 있는지 확인해야한다.


x = 10

while x > 5:
	print(x)
'''


# 반복문 : for문
'''
반복문으로 for문을 이용할 수 있다.
for문의 구조는 다음과 같으며, 특정한 변수를 이요해 'in' 뒤에 오는 데이터(리스트, 튜플 등)에 포함되어 있는 원소를 첫 번째 인덱스부터 차례대로 하나씩 방문한다.

for 변수 in 리스트:
	실행할 소스코드
'''

array = [9, 8, 7, 6, 5]

for x in array:
	print(x)

'''
for문에서 연속적인 값을 차례대로 순회할 때 range()를 주로 사용한다.
 - 이때 range(시작 값, 끝 값 +1) 형태로 사용한다.
 - 인자를 하나만 넣으면 자동으로 시작 값은 0이 된다.
'''

result = 0 

# i는 1부터 9까지의 모든 값을 순회
for i in range(1, 10):
	result += 1

print(result)


# continue 키워드

# 반복문에서 남은 코드의 실행을 건너뛰고, 다음 반복을 진행하고자 할 때 continue를 사용한다.

# 1부터 9까지의 홀수의 합을 구하는 경우
result = 0 

for i in range(1, 10):
	if i % 2 == 0:
		continue
	result += 1

print(result)


# break 키워드

# 반복문을 즉시 탈출하고자 할 때 break를 사용한다.

# 1부터 5까지의 정수를 차례대로 출력하고자 할 때

i = 1

while True:
	print("현재 i의 값:", i)
	if i == 5:
		break
	i += 1

# Ex. 학생들의 합격 여부 판단 : 점수가 80점 넘으면 합격
scores = [90, 85, 77, 65, 97]

for i in range(5):
	if scores[i] >= 80:
		print(i + 1, "번 학생은 합격입니다.")

# Ex. 특정 번호의 학생은 제외하기
scores = [90, 85, 77, 65, 97]
cheating_student_list = {2, 4}

for i in range(5):
	if i + 1 in cheating_student_list:
		continue
	if scores[i] >= 80:
		print(i + 1, "번 학생은 합격입니다.")

# 중첩된 반복문 : 구구단 예제
for i in range(2, 10):
	for j in range(1, 10):
		print(i, "X", j, "=", i * j)
	print()