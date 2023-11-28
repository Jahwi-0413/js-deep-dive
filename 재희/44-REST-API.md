# 44장 REST API

REST -> HTTP의 장점을 최대한 활용할 수 있는 아키텍쳐
이를 이용해 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도함

RESTful -> RESt의 기본 원칙을 성실히 지킨 서비스 디자인

REST API -> REST를 기반으로 서비스 API를 구현한것

## 44.1 REST API의 구성

REST API는 자원-resource, 행위-verb, 표현-representations 3가지 요소로 구성됨
REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

## 44.2 REST API 설계 원칙

1. URI는 리소스를 표현하는데 집중
2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현
