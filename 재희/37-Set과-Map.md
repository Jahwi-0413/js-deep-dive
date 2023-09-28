# 37장 Set과 Map

## 37.1 Set

Set 객체는 요소가 중복되지 않는 집합이다.

배열과의 차이점은

1. 요소간의 순서가 무의미하고
2. 값의 중복이 되지 않으며 요소에
3. 접근할 때 인덱스를 사용하지 않는다.

### 37.1.1 Set 객체 생성

```javascript
const set1 = new Set();

const set2 = new Set([1, 2, 3, 4]);
```

이터러블을 인수로 받아 객체를 생성할 수 있다.
중복된 값은 저장되지 않는다.

중복된 값을 제거하기 위해 Set을 이용할 수 있다.

### 37.1.2 요소 개수 확인

`Set.prototype.size`를 사용해 확인한다

size는 setter는 없고 getter만 있어 readOnly이다.

### 37.1.3 요소 추가

```javascript
const set = new Set();
set.add(1).add(2);

set.add(1); //중복값 저장시 에러 없이 무시된다.
```

일반 비교 연산자(===)은 NaN과 NaN을 다른 값이라고 평가하지만
Map 객체는 같은 값이라고 평가한다
-0과 +0도 마찬가지이다.

### 37.1.4 요소 존재 확인

```javascript
const set = new Set([1, 2]);

set.has(1); //true
```

### 37.1.5 요소 삭제

```javascript
const set = new Set([1, 2]);

set.delete(1); //true
```

삭제 후 성공했는지 boolean 값 반환함
없는 요소 삭제시 무시됨
boolean을 반환해 add처럼 연속적으로 사용할 수 없으니 주의!

### 37.1.6 일괄 삭제

`Set.prototype.clear()` 사용, 항상 **undefined 반환함**

### 37.1.7 요소 순회

`Set.prototype.forEach()` 사용

forEach의 콜백함수에 세 개의 인수가 전달됨

1. 현재 순회 중인 요소값
2. 현재 순회 중인 요소값
3. 현재 순회 중인 set 객체

첫번째 인수와 두번째 인수가 같은 이유는 `Array.prototype.forEach()`와 인터페이스를 동일하게 하기 위함이다

Set 객체는 이터러블이므로 for...of로 순회할 수 있고 디스트럭처링의 대상이 될 수 있다.

### 37.1.8 집합 연산

- 교집합
- 합집합
- 차집합
- 부분 집합과 상위 집합

## 37.2 Map

키와 값의 쌍으로 이루어짐

일반 객체와는 다른점

1. 일반 객체와는 달리 객체를 키로 사용할 수 있다.
2. 일반 객체는 이터러블이 아니지만 Map은 이터러블이다
3. Map은 map.size로 요소의 개수를 확인할 수 있다.

### 37.2.1 Map 객체 생성

```javascript
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
```

인수는 이터러블이어야하고 키와 값의 쌍으로 이루어진 이터러블이어야 한다.
중복되는 키는 값을 덮어쓴다.

### 37.2.2 요소 개수 확인

`Map.prototype.size` 사용

### 37.2.3 요소 추가

```javascript
const map = new Map();
map.set("key1", "value1").set("key2", "value2");
```

중복되는 키의 값을 설정할때는 값이 덮어쓰고 에러를 발생하지 않는다.
일반 비교 연산자(===)은 NaN과 NaN을 다른 값이라고 평가하지만
Map 객체는 같은 값이라고 평가한다
-0과 +0도 마찬가지이다.

### 37.2.4 요소 취득

`Map.prototype.get` 메서드 사용
인수로는 확인할 키를 넘긴다.
해당하는 키의 값이 없으면 undefined 반환

### 37.2.5 요소 존재 여부 확인

`Map.prototype.has` 메서드 사용
인수로는 확인할 키를 넘긴다.
해당하는 키의 값이 있는지 boolean 반환

### 37.2.6 요소 삭제

`Map.prototype.delete` 메서드 사용
삭제 성공 여부를 boolean으로 반환
존재하지 않는 키를 삭제시 에러 없이 무시됨

### 37.2.7 일괄 삭제

`Map.prototype.clear` 메소드 사용
언제나 undefined 반환

### 37.2.8 요소 순회

`Map.prototype.forEach()` 사용

forEach의 콜백함수에 세 개의 인수가 전달됨

1. 현재 순회 중인 요소값
2. 현재 순회 중인 요소키
3. 현재 순회 중인 Map 객체

Map 객체는 이터러블이라 for...of문으로 순회할 수 있고 디스트럭처링 대상이 될 수 있다.

`Map.prototype.keys()`
`Map.prototype.values()`
`Map.prototype.entries()`
