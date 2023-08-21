# 28장 Number

## 28.1 Number 생성자 함수

```javascript
let numObj = new Number();
console.log(numObj); //0

numOjb = new Number("10");
console.log(numObj); //10
```

숫자가 아닌 값을 인수로 전달하면 숫자로 강제 변환후 `[[NumberData]]`에 값을 할당한 래퍼 객체를 생성함

## 28.2 Number 프로퍼티

### 28.2.1 Number.EPSILON

1과 1보다 크지만 가장 작은 수 사이의 차이.

부동소수점으로 인한 오차를 해결할때 사용함

```javascript
Math.abs(a - b) < Number.EPSILON;
```

### 28.2.2 Number.MAX_VALUE

javascript에서 표현할 수 있는 **가장 큰 양수 값**

### 28.2.3 Number.MIN_VALUE

javascript에서 표현할 수 있는 **가장 작은 양수 값**

### 28.2.4 Number.MAX_SAFE_INTEGER

javascript에서 안전하게 표현할 수 있는 가장 큰 정수값

### 28.2.5 Number.MIN_SAFE_INTEGER

javascript에서 안전하게 표현할 수 있는 가장 작은 정수값

### 28.2.6 Number.POSITIVE_INFINITY

양의 무한대를 나타내는 숫자값 Infinity와 같음

### 28.2.7 Number.NEGATIVE_INFINITY

음의 무한대를 나타내는 숫자값 -Infinity와 같음

### 28.2.8 Number.NaN

Not-a-Number을 나타내는 숫자값.

## 28.3 Number 메서드

### 28.3.1 Number.isFinite

인수 암묵적 타입 변환 X
빌트인 전역 함수 isFinite는 암묵적 타입 변환 O
인수로 전달된 값이 유한수인지 검사해 true/false 반환
즉, Infinity, -Infinity 가 아닌지 검사

### 28.3.2 Number.isInteger

인수 암묵적 타입 변환 X
정적 메서드는 인수로 전달된 숫자값이 정수인지 검사해 true/false 반환

### 28.3.3 Number.isNaN

인수 암묵적 타입 변환 X
빌트인 전역 함수 isNaN는 암묵적 타입 변환 O
인수로 전달된 값이 NaN인지 검사해 true/false 반환

### 28.3.4 Number.isSafeInteger

인수 암묵적 타입 변환 X
인수로 전달된 값이 안전한 정수인지 검사해 true/false 반환

### 28.3.5 Number.prototype.toExponential

숫자를 지수 표기법으로 반환해 문자열로 반환함.
전달된 인수는 소수점 이하로 표현할 자릿수임

```javascript
//good
(77.1234).toExponential(); //"7.71234e+1"
(77.1234).toExponential(2); //"7.7123e+1"
```

### 28.3.6 Number.prototype.toFixed

숫자를 반올림해 문자열로 반환. 반올림할 소수점 이하 자릿수는 0~20 사이를 인수로 전달 가능
인수 생략시 default는 0

### 28.3.7 Number.prototype.toPrecision

인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림해 문자열로 반환
전체 자릿수로 표현이 불가능 할 경우 지수 표기법으로 결과 반환

```javascript
(12345.6789).toPrecision(); //12345.6789
(12345.6789).toPrecision(1); //1e+4
```

### 28.3.8 Number.prototype.toString

숫자를 문자열로 변환해 반환함.
2 ~ 36 사이의 정수값을 인수로 전달해 진법 표현을 적용할 수 있다.
