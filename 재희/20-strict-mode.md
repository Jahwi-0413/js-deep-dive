# 20 strict mode

## 20.1 strict mode란?

```javascript
function foo() {
  x = 10;
}
foo();

console.log(x); //10
```

foo 함수 스코프에서 x를 선언하지 않았지만 x 변수를 검색하기 위해 암묵적으로 전역 객체에 x 프로퍼티를 동적으로 생성함
이것을 **암묵적 전역**이라고 부름.

ES5부터 strict mode를 추가함. js 문법을 엄격히 적용함.
ESLint로도 비슷한 효과를 얻을 수 있다.

## 20.2 strict mode의 적용

전역의 선두나 함수 몸체 선두에 `use strict`를 추가함
전역의 선두에 추가시 스크립트 전체에 적용
함수 몸체 선두가 아닌 다른곳에 추가시 작동 안함

## 20.3 전역에 strict mode를 적용하는 것은 피하자

전역에 적용한 strict mode는 스크립트 단위로 적용됨
strict mode와 non-strict mode 혼용은 오류를 발생시킬 수 있으므로 바람직하지 않음

## 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

함수에 일일이 적용하는것도 번거롭고
strict mode가 적용된 함수를 non-strict mode인 컨텍스트에서 참조시 문제가 될 수 있음

즉시 실행 함수로 감싼 스크립트 단위로 적용하는것이 바람직함

## 20.5 strict mode가 발생시키는 에러

### 20.5.1 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError 발생

### 20.5.2 변수, 함수, 매개변수 삭제

delete 연산자 사용시 SyntaxError

### 20.5.3 매개변수 이름 중복

### 20.5.4 with 문 사용

with 문은 전달된 객체를 스코프 체인에 추가함
코드의 반복을 줄일수 있지만 가독성과 성능이 나빠짐

## 20.6 strict mode 적용에 의한 변화

### 20.6.1 일반 함수의 this

함수를 일반 함수로 호출시 this에 undefined 바인딩
에러는 안남

### 20.6.2 arguments 객체

매개변수에 전달된 인수를 변경해도 arguments 객체에 반영되지 않음
