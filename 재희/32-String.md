# 32장 String

## 32.1 String 생성자 함수

문자열은 원시값으로 변경할 수 없다.
String 생성자 함수에 문자열이 아닌 값을 전달하면 문자열로 강제 변환후 `[[StringData]]` 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

## 32.2 length 프로퍼티

문자열의 문자 개수를 반환
String 래퍼 객체는 유사 배열 객체이다

## 32.3 String 메서드

String 객체에는 원본을 직접 변경하는 메서드는 없다.
String 객체의 메서드는 언제나 새로운 문자열을 반환함
String 래퍼 객체도 읽기 전용 객체로 제공된다.

### 32.3.1 String.prototype.indexOf

대상 문자열에서 인수로 전달받은 문자열을 검색해 첫 번째 인덱스를 반환
실패시 -1 반환

2번째 인수로 시작 위치를 전달할 수 있음

### 32.3.2 String.prototype.search

대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색해 일치하는 문자열의 인덱스를 반환함
검색 실패시 01 반환

### 32.3.3 String.prototype.includes

대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인해 boolean 반환
2번째 인수로 시작 위치를 전달할 수 있음

### 32.3.4 String.prototype.startsWith

대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인해 boolean 반환

### 32.3.5 String.prototype.endsWidth

대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인해 boolean 반환

### 32.3.6 String.prototype.charAt

대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 반환

### 32.3.7 String.prototype.substring

대상 문자열에서 첫번째 인수의 위치부터 두번째 인수의 위치까지의 문자열을 반환

### 32.3.8 String.prototype.slice

substring과 동일하게 작동하지만 인수에 음수를 전달할 수 있음
음수는 가장 뒤에부터 시작한해 문자열을 자른다는 뜻이다

### 32.3.9 String.prototype.toUpperCase

대상 문자열을 모두 대문자로 변경한 문자열 반환

### 32.3.10 String.prototype.toLowerCase

대상 문자열을 모두 소문자로 변경한 문자열 반환

### 32.3.11 String.prototype.trim

대상 문자열 앞뒤에 공백 문자가 있을 경우 제거한 문자열 반환

### 32.3.12 String.prototype.repeat

대상 문자열을 전달받은 정수만큼 반복해 연결한 새로운 문자열 반환
음수시 Error

### 32.3.13 String.prototype.replace

대상 문자열에서 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색해
두번째 인수로 전달한 문자열로 치환한 문자열을 반환함
여러번 검색되어도 첫번째로 검색된 문자열만 치환함
첫번째 인수로 정규 표현식 전달 가능

### 32.3.14 String.prototype.split

전달한 문자열을 구분자로 문자열을 잘라 배열로 만들어 반환
두번째 인수로 배열의 길이 지정 가능
