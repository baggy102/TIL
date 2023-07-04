# 사전 자료형 
'''
사전 자료형은 키와 값의 쌍을 데이터로 가지는 자료형이다.
 - 리스트나 튜플이 값을 순차적으로 저장한느 것과는 대비된다.
사전 자료형은 키와 값의 쌍을 데이터로 가지며, 임의의 '변경 불가능한(Immutable) 자료형'을 키로 사용할 수 있다.
파이썬의 사전 자료형은 해시 테이블(Hash Table)을 이용하므로 데이터의 조회 및 수정에 있어서 O(1)의 시간에 처리할 수 있다.
'''

data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

print(data)
# {'사과': 'Apple', '바나나': 'Banana', '코코넛' : 'Coconut'}

if '사과' in data:
	print("'사과'를 키로 가지는 데이터가 존재합니다.")


# 사전 자료형 관련 메서드
'''
사전 자료형에서는 키와 값을 별도로 뽑아내기 위한 메서드를 지원한다.
 - 키 데이터만 뽑아서 리스트로 이용할 때는 keys() 함수
 - 값 데이터만 뽑아서 리스트로 이용할 때는 values() 함수를 이용한다.
'''

data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

# 키 데이터만 담은 리스트
key_list = data.keys()


# 값 데이터만 담은 리스트
value_list = data.values()

print(key_list)
# dict_keys(['사과', '바나나', '코코넛']

print(values_list)
# dict_values(['Apple', 'Banana', 'Coconut'])

# 각 키에 따른 값을 하나씩 출력
for key in key_list:
	print(data[key])
# Apple
# Banana
# Coconut


# 집합 자료형
'''
집합은 다음과 같은 특징이 있다.
 - 중복을 허용하지 않는다.
 - 순서가 없다.
집합은 리스트 혹은 문자열을 이용해서 초기화할 수 있다.
 - 이때 set() 함수를 이용한다.
혹은 중괄호({}) 안에 각 원소를 콤마(,)를 기준으로 구분하여 삽입함으로써 초기화 할 수 있다.
데이터의 조회 및 수정에 있어서 O(1)의 시간에 처리할 수 있다.
'''

# 집합 자료형 초기화 방법 1 
data = set([1, 1, 2, 3, 4, 4, 5])
print(data)
# -> {1, 2, 3, 4, 5} 중복 데이터가 제거 됨

# 집합 자료형 초기화 방법 2
data = {1, 1, 2, 3, 4, 4, 5}
print(data) 


# 집합 자료형의 연산
'''
기본적인 집합 연산으로는 합집합, 교집합, 차집합 연산 등이 있다.
 - 합집합 : 집합 A에 속하거나 B에 속하는 원소로 이루어진 집합 (A U B)
 - 교집합 : 집합 A에도 속하고 B에도 속하는 원소로 이루어진 집합 (A ∩ B)
 - 차집합 : 집합 A의 원소 중 B에 속하지 않는 원소들로 이루어진 집합 (A - B)
'''

a = set([1, 2, 3, 4, 5])
b = set([3, 4, 5, 6, 7])

# 합집합
print(a | b)

# 교집합
print(a & b)

# 차집합
print(a - b)


# 집합 자료형 관련 함수
data = set([1, 2, 3])
print(data)

# 새로운 원소 추가
data.add(4)
print(data)
# -> {1, 2, 3, 4}

# 새로운 원소 여러 개 추가
data.update([5, 6])
print(data)

# 특정한 값을 갖는 원소 삭제
data.remove(3)
print(data)


# 사전 자료형과 집합 자료형의 특징
'''
리스트나 튜플은 순서가 있기 때문에 인덱싱을 통해 자료형의 값을 얻을 수 있다.
사전 자료형과 집합 자료형은 순서가 없기 때문에 인덱싱 값을 얻을 수 없다.
 - 사전의 키 혹은 집합의 원소를 이용해 O(1)의 시간 복잡도로 조회한다.
''' 