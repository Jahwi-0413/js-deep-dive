# 43장 Ajax

## 43.1 Ajax란?

Asynchronous Javascript and XML의 줄임말으로
자바스크립트를 사용해 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신해 웹페이지를 동적으로 갱신하는 방식을 뜻함

이전에는 html 파일 전체를 서버로부터 받아 처음부터 다시 렌더링 하는 방식으로 동작했다.
이러한 전통방식의 문제점은 다음과 같다.

1. 변경할 필요가 없는 부분까지 포함된 html을 서버로부터 받아 불필요한 데이터 통신이 발생한다
2. 변경할 필요가 없는 부분까지 처음부터 다시 렌더링한다. 이로 인해 화면이 순간적으로 깜빡이는 현상이 발생한다.
3. 통신이 동기 방식으로 작동해 다음 처리가 블로킹 된다.

Ajax가 생간 후 빠른 퍼포먼스와 부드러운 화면 전환이 가능해졌다. Ajax 도입으로 얻을 수 있는 장점은 다음과 같다.

1. 변경할 부분에 필요한 데이터만 서버로부터 전송받아 불필요한 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링 하지 않는다.
3. 통신이 비동기 방식으로 동작해 블로킹이 발생하지 않는다.

## 43.2 JSON

JSON(Javascript Object Notation)은 클라이언트와 서버간 HTTP 통신을 위한 텍스트 데이터 포맷이다.
자바스크립트에 종속되지 않는 언어 독립형 데이터 포맷으로 대부분의 프로그래밍 언어에서 사용할 수 있다.

### 43.2.1 JSON 표기 방식

```JSON
{
  "name" : "J",
  "age" : 25
}
```

key는 반드시 큰따옴표로 묶어야한다. (작은따옴표 불가능)
value는 작은따옴표를 사용해도 상관없다.

### 43.2.2 JSON.stringify

객체를 JSON 포맷의 문자열로 변환한다. 이를 직렬화(serializing)라 한다.

### 43.2.3 JSON.parse

JSON 포맷의 문자열을 객체로 변환한다. 이를 역직렬화(deserializing)라 한다.

## 43.3 HMLHttpRequest

브라우저가 form 태그나 a 태그를 통해 http 요청 전송 기능을 기본 제공하지만
자바스크립트로 http 요청을 하려면 XMLHttpRequest 객체를 이용해야한다.

### 43.3.1 XMLHttpRequest 객체 생성

XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 브라우저 환경에서만 정상적으로 실행된다.

### 43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드

- 프로토타입 프로퍼티
  - readyState : HTTP 요청의 현재 상태를 나타내는 정수
    - UNSET
    - OPENED
    - HEADERS_RECEIVED
    - LOADING
    - DONE
  - status : http 응답 상태 코드
  - statusText : HTTP 응답 메시지를 나타내는 문자열 (ex : OK)
  - responseType : HTTP 응답 타입
  - response : response body
  - responseText : 서버가 전송한 HTTP 요청에 대한 응답 문자열
- XMLHttpRequest 객체의 이벤트 핸들러 프로퍼티
  - onreadystatechange
  - onloadstart
  - onprogress
  - onabort
  - onerror
  - onload : http 요청이 성공적으로 완료한 경우
  - ontimeout
  - onloaded
- XMLHttpRequest 객체의 메서드
  - open
  - send
  - abort
  - setRequestHeader
  - getResponseHeader

### 43.3.3 HTTP 요청 전송

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "/users");
xhr.setRequestHeader("content-type", "application/json");
xhr.send();
```

- XMLHTtpRequest.prototype.send
  GET 요청은 쿼리 문자열로 데이터를 서버에 전송한다
  POST 요청은 데이터(페이로드)를 요청 몸체에 담아 전송한다.

  몸체에 담아 보내는 데이터가 객체면 반드시 직렬화 후 전달해야한다.
  GET 요청으로 send할 경우 페이로드로 전달한 인수는 무시도고 요청 몸체는 null로 설정된다.

- XMLHttpRequest.prototype.setRequestHeader

  ```javascript
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/users");
  xhr.setRequestHeader("content-type", "application/json"); //서버로 전송할 페이로드의 MIME 타입 지정
  xhr.setRequestHeader("accept", "application/json"); //서버가 응답할 데이터의 MIME 타입
  xhr.send();
  ```

### 43.3.4 HTTP 응답 처리

응답 처리시 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야한다.
onreadystatechange, onload, onerror 이벤트 핸들러 프로퍼티를 이용해 처리할 수 있다.
