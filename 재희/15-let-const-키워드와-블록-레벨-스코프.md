# 15장 let,const 키워드와 블록 레벨 스코프

## 15.1 var 키워드로 선언한 변수의 문제점

### 15.1.1 변수 중복 선언 허용

### 15.1.2 함수 레벨 스코프

함수 외부에서 var 키워드로 변수 선언시 모두 전역 변수가 됨

### 15.1.3 변수 호이스팅

변수 호이스팅시 undefined로 초기화됨
에러는 없지만 가독성이 떨어지고 오류 발생 여지를 남김

## 15.2 let 키워드

### 15.2.1 변수 중복 선언 금지

var 키워드로 중복 선언시 에러 발생(SyntaxError)

### 15.2.2 블록 레벨 스코프

if문, for문, while문, try/catch문 등을 지역 스코프로 인정하는 블록 레벨 스코프를 따름

### 15.2.3 변수 호이스팅

var 키워드랑 달리 선언 단계와 초기화 단계가 분리되어 진행됨
일시적 사각지대 : 스코프 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간(TDZ)

TDZ에서는 참조 에러가 발생함

### 15.2.4 전역 객체와 let

var 키워드는 전역 객체로 선언할 경우 window의 property가 된다
하지만 let 키워드로 선언한 전역 객체는 window의 property가 아닌 보이지 않는 개념적 블록 내에 존재함

## 15.3 const 키워드

### 15.3.1 선언과 초기화

const 키워드로 선언한 변수는 선언과 동시에 반드시 초기화해야한다

### 15.3.2 재할당 금지

### 15.3.3 상수

상수는 재할당이 금지된 변수를 뜻함

### 15.3.4 const 키워드와 객체

재할당이 금지될 뿐 "불변"을 의미하는것은 아님
const 키워드로 객체를 할당한 경우 객체의 프로퍼티는 재할당없이 변경할 수 있으므로 변경할 수 있다

## 15.4. var vs let vs const

- ES6 사용시 var 키워드 사용 X
- 재할당이 필요한 경우만 let 키워드 사용
