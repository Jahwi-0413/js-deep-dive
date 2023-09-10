# 33장 7번째 데이터 타입 Symbol

## 33.1 심벌이란?

심벌은 ES6에서 도입된 7번째 데이터 타입
변경 불가능한 원시 타입의 값이다.

다른 값과 중복되지 않는 유일무이한 값

## 33.2 심벌 값의 생성

### 33.2.1 Symbol 함수

심벌은 Symbol 함수를 생성해야만 생성할 수 있다.

```javascript
const symbol = Symbol(); //Symbol()

const testSymbol = Symbol("test");
```

객체를 생성하긴 하지만 값이 외부로 노출되지 않아 확인할 수 없음
인수로 문자열을 전달할 수 있고 문자열은 심벌 값에 대한 설명이다.
심벌도 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성하고 암묵적으로 문자열, 숫자로는 변환되지 않지만 boolean 타입으로는 가능하다.

### 33.2.2 Symbol.for / Symbol.keyFor 메서드

심벌 레지스트리 -> 키, 심벌 값 쌍들이 저장되어 있음
Symbol.for은 인수로 전달받은 문자열로 심벌 레지스트에서 문자열과 일치하는 키의 심벌 값을 검색함
Symbol.keyFor은 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.

## 33.2 심벌과 상수

```javascript
const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};
```

방향을 지정하는 Direction의 각 프로퍼티 상수값은 변경될 수 있고, 다른 변수값과 중복될 수도 있다.
이러한 변경 가능성/중복 가능성을 무의미한 상수 대신 중복 가능성이 없는 심벌 값을 사용할 수 있다.

```javascript
const Direction = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT"),
};
```

## 33.4 심벌과 프로퍼티 키

심벌 값으로 프로퍼티 키를 대신해 동적으로 생성할 수 있음

```javascript
const obj = {
  [Symbol.for("mySymbol")]: 1,
};
```

심벌 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 충돌하지 않음

## 33.5 심벌과 프로퍼티 은닉

심벌 값으로 프로퍼티 키를 만드는 또 다른 이유는 for ...in, Object.keys, Object.getownPropertyNames 메서드로 찾을 수 없어
외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있음

## 33.6 심벌과 표준 빌트인 객체 확장

표준 빌트인 객체는 확장하지 않는 편이 좋다.
왜냐하면 후에 추가될 메서드의 이름과 중복될 수 있기 때문이다.

하지만 중복될 가능성이 없는 심벌 값으로 프로퍼티 키를 생성하면 후에도 중복될 가능성 없이 안전하게 확장할 수 있다.

## 33.7 Well-Known Symbol

자바스크립트가 기본 제공하는 빌트인 심벌 값을 ECMAScript 사양에서는 Well-Known Symbol이라 부름
Well-Known Symbol은 자바스크립트 엔진의 내부 알고리즘에 사용됨
