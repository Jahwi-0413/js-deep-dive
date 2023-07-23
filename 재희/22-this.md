# 22 this

## 22.1 this 키워드

```javascript
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.raduis;
  },
};
```

객체 리터럴에서는 객체 식별자를 재귀적으로 참조할 수 있음
객체 리터럴 방식은 변수 할당전에 이미 평가가 완료되어 객체가 생성되어 메서드 내부에서
circle 식별자를 참조할 수 있다.
하지만 재귀적으로 식별자를 참조하는 방식은 **바람직하지 않음**

```javascript
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};
```

생성자 함수에서는 this를 활용할 수 있다.
this는 자신이 속한 객체, 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다.
this 바인딩은 함수 호출 방식에 의해 동적으로 결정됨

strict mode에서는 일반 함수 내부의 this에 undefined가 바인딩됨. non-strict-mode에서는 어디서든지 this를 사용할 수 있음.

## 22.2 함수 호출 방식과 this 바인딩

> 렉시컬 스코프와 this 바인딩은 결정 시기가 다름
> 렉시컬 스코프는 함수 정의를 평가해 함수 객체를 생성하는 시점에 상위 스코프를 결정함
> this 바인딩은 함수 호출 시점에 결정함

### 22.2.1 일반 함수 호출

기본적으로 this에는 전역 객체가 바인딩됨
strict mode에서는 undefined가 바인딩됨

### 22.2.2 메서드 호출

메서드를 호출한 객체가 바인딩됨.
메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩됨
프로토타입 메서드 내부에서 사용된 this도 마찬가지

### 22.2.3 생성자 함수 호출

생성자 함수가 생성할 인스턴스가 바인딩됨

### 22.2.4 Funtion.prototype.apply/call/bind 메서드에 의한 간접 호출

```javascript
Funtion.prototype.apply(thisArg[, argsArray])

// thisArg : this로 사용할 객체
// argsArray : 함수에게 전달한 인수 리스트의 배열이나 유사 배열 객체
// return 호출된 함수의 반환값

Funtion.prototype.call(thisArg[, arg1[, arg2[, ...]]])

//thisArg : this로 사용할 객체
//arg1, arg2, ... : 함수에 전달한 인수 리스트
//return : 호출된 함수의 반환값
```

apply와 call 메서드는 대표적으로 유사 배열 객체에 배열 메서드를 사용할 때 사용한다.
arguments 같은 객체는 배열은 아니기 때문에 Array.prototype.slice 같은 메서드는 사용할 수 없다. 하지만 apply와 call 메서드를 사용하면 가능하다.

```javascript
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinidng.bind(thisArg)());
```

bind 메서드는 넘겨받은 인자로 this 바인딩이 교체된 함수를 새롭게 생성해 반환함.
bind 메서드는 함수를 호출하지 않기 때문에 명시적으로 호출해주어야함
bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용됨
