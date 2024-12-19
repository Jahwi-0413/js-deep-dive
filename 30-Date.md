# 30장 Date

## 30.1 Date 생성자 함수

Date 생성자 함수로 생성한 Date 객체는 날짜와 시간을 나타내는 정수값을 가짐

### 30.1.1 new Date()

인수 없이 new 연산자와 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환
내부적으로는 정수값을 가지지만 콘솔에 출력하면 날짜와 시간 정보를 출력함

### 30.1.2 new Date(milliseconds)

1970년 1월 1일 00:00:00(UTC) 기준으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체 반환

### 30.1.3 new Date(dateString)

dateString을 가르키는 날짜와 시간을 가진 Date 객체 반환
dateString은 Date.parse 메서드에 의해 해석 가능한 형식이어야 함

### 30.1.4 new Date(year, month[,date, hour, minute, second, millisecond])

연, 월은 필수로 지정해야함
그 외에 지정하지 않은 정보는 0 또는 1로 초기화됨

## 30.2 Date 메서드

### 30.2.1 Date.now

1970년 1월 1일 00:00:00(UTC)부터 현재까지 경과한 밀리초를 숫자로 반환함

### 30.2.2 Date.parse

인수로 전달된문자열을 1970년 1월 1일 00:00:00(UTC)부터 경과한 밀리초를 숫자로 반환

### 30.2.3 Date.UTC

new Date(year, month,...)와 같은 형식의 인수를 사용함
KST이 아닌 UTC로 인식함
month는 1부터 시작이 아닌 0부터 시작해 11까지의 정수를 사용함

### 30.2.4 Date.prototype.getFullYear

### 30.2.5 Date.prototype.setFullYear

### 30.2.6 Dat.prototype.getMonth

### 30.2.7 Date.prototype.setMonth

### 30.2.8 Date.prototype.getDate

### 30.2.9 Date.prototype.setDate

### 30.2.10 Date.prototype.getDay

### 30.2.11 Date.prototype.getHours

### 30.2.12 Date.prototype.setHours

### 30.2.13 Date.prototype.getMinutes

### 30.2.14 Date.prototype.setMinutes

### 30.2.15 Date.prototype.getSeconds

### 30.2.16 Date.prototype.setSeconds

### 30.2.17 Date.prototype.getMilliseconds

### 30.2.18 Date.prototype.setMilliseconds

### 30.2.19 Date.prototype.getTime

### 30.2.20 Date.prototype.setTime

### 30.1.21 Date.prototype.getTimezoneOffset

UTC와 Date 객체에 지정된 locale 시간과의 차이를 분 단위로 반환
KST는 UTC + 9시간 이다

### 30.2.22 Datep.prototype.toDateString

사람이 읽을수 잇는 형식의 문자열로 Date 객체의 날짜를 반환함

### 30.2.23 Date.prototype.toTimeString

사람이 읽을 수 있는 형식으로 Date 객체의 시간을 표현한 문자열 반환

### 30.2.24 Date.prototype.toISOString

### 30.2.25 Date.prototype.toLocaleString

인수로 전달안 locale을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열 반환.
인수 생략시 브라우저가 동작 중인 시스템의 locale 적용

### 30.2.26 Date.prototype.toLocaleTimeString
