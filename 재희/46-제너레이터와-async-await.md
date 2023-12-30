# 46장 제너레이터와 async/await

## 46.1 제너레이터란?

ES6에서 도입되었다. 일반 함수와의 차이는 아래와 같다.

1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
2. 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.
3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.

## 46.2 제너레이터 함수의 정의

```javascript
function* func() {}

const func = function* () {};

const obj = {
  *func() {},
};

class MyClass {
  *func() {}
}
```

에스터리스크(\*)의 위치는 function 키워드와 함수 사이에라면 어떻게 쓰던지 상관없지만 function 키워드 바로 뒤에 붙이는것을 권장함

제너레이터 함수는 화살표 함수로 정의할 수 없고 new 연산자와 함께 생성자 함수로 호출할 수 없다.

## 46.3 제너레이터 객체

제너레이터 함수 호출시 함수 코드블록을 실행하는게 아니라 제너레이터 객체를 생성해 반환한다.

반환된 제너레이터 객체는 이터러블이면서 이터레이터다.

```javascript
function* func() {
  yield 1;
  yield 2;
}

const generator = func();

console.log(Symbol.iterator in generator); //true
console.log("next" in generator); //true
```

제너레이터 객체는 return, throw 메서드를 갖는다.

- next 호출 -> 제너레이터 함수의 yield 표현식까지 실행하고 yeidl 값을 value 프로퍼티로, false를 done 프로퍼티 값을 가진 이터레이터 result 객체를 반환한다.
- return 메서드 호출 -> 인수로 전달받은 값을 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 가진 이터레이터 result 객체를 반환한다.
- throw 메서드 호출 -> 인수로 전달받은 에러를 발생시키고 undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 객체를 반환한다.

## 46.4 제너레이터의 일시 중지와 재개

일반 함수는 호출 이후 제어권을 독점하지만
제너레이터는 함수 호출자에게 제어권을 양도(yield)해 필요한 시점에 함수 실행을 재개할 수 있다.

yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield 키워드 뒤에 오는 표현식의 평가 결과를 제너레이터 함수 호출자에게 반환한다.

```javascript
function* func() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = func();

console.log(generator.next()); //{value : 1, done : false}
console.log(generator.next()); //{value : 2, done : false}
console.log(generator.next()); //{value : 3, done : false}
console.log(generator.next()); //{value : undefined, done : true}
```

제너레이터 객체의 next 메서드에 전달한 인수는 제너레이터 함수의 yield 표현식을 할당받는 변수에 할당된다.

```javascript
function* func() {
  const x = yield 1;

  const y = yield (x = 10);

  return x + y;
}

const generator = func(0);

//처음 호출하는 next 인수를 전달해도 무시된다.
let res = generator.next();
console.log(res); //{value : 1, done: false}

// 10은 x 변수에 할당된다.
// 할당 연산자는 오른쪽 -> 왼쪽으로 실행되기 때문인듯?
res = generator.next(10);
console.log(res); //{value : 20, done: false}

// 20은 y 변수에 할당된다.
res = generator.next(20);
console.log(res); //{value : 30, done: true}
```

## 46.5 제너레이터의 활용

### 46.5.1 이터러블 구현

제너레이터 함수 사용시 이터레이션 프로토콜을 준수해 이터러블을 생성하는것보다 간단히 이터러블을 구현할 수 있다.

### 46.5.2 비동기 처리

프로미스를 사용한 비동기 처리를 동기 처리처럼 구현할 수 있다.

## 46.6 async/await

ES8에서 도입된 async/await 도입으로 제너레이터를 사용하는것보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하게 할 수 있다.

### 46.6.1 async 함수

await 키워드는 반드시 async 함수 내부에서 사용해야 한다.
async 함수는 언제나 프로미스를 반환한다.
명시적으로 프로미스를 반환하지 않더라도 async 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

### 46.6.2 await 키워드

await 키워드는 프로미스가 settled(비동기 처리가 수행된 상태)가 될때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 결과를 반환한다.
await 키워드는 반드시 프로미스 앞에서 사용해야 한다.

모든 프로미스에 await 키워드를 사용하는 것은 주의해야한다.
순차적으로 처리해야만 하는 작업에만 await 키워드를 써야한다.

### 46.6.3 에러 처리

async/await에서는 try catch문으로 에러 처리가 가능하다.
async 함수 내에서 catch 문으로 에러 처리를 하지 않으면 async 함수는 에러를 reject하는 프로미스를 반환한다.
