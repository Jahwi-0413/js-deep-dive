# 39장 DOM

DOM -> html 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API

## 39.1 노드

### 39.1.1 HTML 요소와 노드 객체

html 요소 : html 문서를 구성하는 개별적인 요소
html 요소는 중첩 관계를 갖는다.
html 요소를 객체화해 트리 자료 구조로 구성한다

> 트리 자료구조 <br>
> 비선형 자료구조 :하나의 자료 뒤에 여러개의 자료가 존재할 수 있는 자료구조

노드 트리 자료구조를 DOM이라고 하고 DOM 트리라고 부르기도 한다.

### 39.1.2 노드 객체의 타입

중요 노드 타입

1. 문서 노드
   dom 트리의 최상위, document 객체
   window의 document 프로퍼티에 바인딩됨
   html 문서당 document 객체는 유일함
2. 요소 노드 (element node)
   html 요소를 가리키는 객체
3. 어트리뷰트 노드
   html 요소의 어트리뷰트 객체
   해당 html 요소의 요소 노드와 연결되어 있다.
4. 텍스트 노드
   html 요소의 텍스트를 가리키는 객체
   자식 노드를 가질 수 없는 leaf node

그 외로는 comment 노드(주석), document type node, DocumentFragment node(복수 노드 생성 추가시 사용) 등등 총 12가지가 있다.

### 39.1.3 노드 객체의 상속 구조

DOM의 노드 객체는 빌트인 객체가 아니라 브라우저 환경에서 추가적으로 제공하는 호스트 객체이다.
하지만 노드도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 가짐

모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
문서 노드는 Docuemtn, HTMLDocument 인터페이스르 상속받음
어트리뷰트 노드는 Attr 인터페이스 상속
텍스트 노드는 CharacterData 인터페이스 상속
요소 노드는 Element, HTMLElement 인터페이스를 상속받음
태그별로 HTMLHeadElement, HTMLUListElemetn 등등 세분화된 인터페이스를 상속받음

ex) input
객체 -> Object
이벤트 발생 -> EventTarget
트리 자료구조의 노드 객체 -> Node
웹 문서의 요소를 표현하는 객체 -> HTMLElement
input 요소를 표현하는 객체 -> HTMLInputElement 등등

## 39.2 요소 노드 취득

### 39.2.1 id를 이용한 요소 노드 취득

- Document.prototype.getElementById

가장 처음 찾은 element 반환
없을경우 null

html 요소에 id를 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되어 해당 노드 객체가 할당됨

### 39.2.2 태그 이름을 이용한 요소 노드 취득

- Document.prototype/getElementsByTagName
- Element.prototype/getElementsByTagName

- 해당 태그를 가진 모든 element 노드를 HTMLCollection 객체 형태로 반환
  - 유사 배열이면서 이터러블

### 39.2.3 class를 이용한 요소 노드 취득

- Document.prototype.getElementByClassName
- Element.prototype.getElementByClassName

HTMLCollection 객체 반환
없을 경우 빈 HTMLCollection 객체 반환

### 39.2.4 CSS 선택자를 이용한 요소 노드 취득

- Document.prototype.querySelector
- Element.prototype.querySelector

선택자를 만족시키는 요소 노드를 탐색해 하나만 반환
없는 경우 null 반환
css 선택자가 문법에 맞지 않는 경우 DOMException 에러 발생

- Document.prototype.querySelectorAll
- Element.prototype.querySelectorAll

CSS 선택자를 만족시키는 모든 요소 노드를 탐색해 반환함
css 선택자가 문법에 맞지 않는 경우 DOMException 에러 발생

이 둘은 getElementById, getElementBy\*\*\* 메서드보다 느리지만 구체적인 조건으로 요소 노드를 획득할 수 있다는 장점이 있다

### 39.2.5 특정 요소 노드를 취득할 수 있는지 확인

- Element.prototype.matches

인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인

### 39.2.6 HTMLCollection과 NodeList

- HTMLCollection
  - 노드의 상태 변화를 실시간으로 반영하는 DOM 컬렉션 객체
  - getElementByTagName, getElementsByClassName 메서드가 반환
- NodeList
  - 실시간으로 노드 객체의 상태 변경을 반영하지 않음
  - querySelectorAll 메서드가 반환
  - 하지만 node의 childNodes 프로퍼티가 반환하느 NodeList는 실시간으로 노드 객체의 상태 변경을 반영하므로 주의

실시간으로 변경되지 않도록 하려면 HTMLCollection이나 NodeList를 배열로 변환해 사용하는것을 권장함

## 39.3 노드 탐색

Node, Element 인터페이스는 트리를 탐색할 때 사용할 수 있는 프로퍼티를 제공함

- Node.prototype이 제공
  - parentNode
  - previousSibling
  - firstChild
  - childNodes
- Element.prototype이 제공
  - previousElementSibling
  - nextElementSibling
  - children

위의 프로퍼티는 모두 접근자 프로퍼티이고 읽기 전용이다.
해당 프로퍼티에 값을 할당하면 아무런 에러 없이 무시된다.

### 39.3.1 공백 텍스트 노드

html 요소 사이의 스페이스, 탭, 줄바꿈 등은 텍스트 노드를 생성하고 이를 공백 텍스트 노드라 부른다.

### 39.3.2 자식 노드 탐색

- Node.prototype.childNodes
  - 요소 노드, 텍스트 노드 포함
  - NodeList 반환
- Element.prototype.children
  - 텍스트 노드 포함 X
  - HTmlCollection 반환
- Node.prototype.firstChild
  - 첫번째 자식 노드
  - 텍스트 노드 or 요소 노드
- Node.prototype.lastChild
  - 마지막 자식 노드
  - 텍스트 노드 or 요소 노드
- Element.prototype.firstElementChild
  - 첫 번째 자식 요소 노드
- Element.prototype.lastElementChild
  - 마지막 요소 노드

### 39.3.3 자식 노드 존재 확인

- Node.prototype.hasChildNodes
  - 자식 요소가 있는지 boolean 반환
  - 텍스트 노드도 포함해 확인
- Element.prototype.childElementCount
  - 텍스트 노드가 아닌 자식 요소 갯수 반환

### 39.3.4 요소 노드의 텍스트 노드 탐색

- Node.prototype.firstChild

### 39.3.5 부모 노드 탐색

- Node.prototype.parentNode
  - 무조건 요소 노드 (텍스트 노드는 무조건 리프 노드이므로)

### 39.3.6 형제 노드 탐색

- Node.prototype.previousSibling
- Node.prototype.nextSibling

텍스트 노드 or 요소 노드

- Element.prototype.previousElementSibling
- Element.prototype.nextElementSibling

요소 노드만

## 39.4 노드 정보 취득

- Node.prototype.nodeType
  - Node.ELEMENT_NODE -> 1
  - Node.TEXT_NODE -> 3
  - Node.DOCUMENT_NODE -> 9
- Node.prototype.nodeName
  - 요소 노드 : 대문자 문자열로 태그 이름 반환
  - 텍스트 노드 : 문자열 `"#text"` 반환
  - 문서 노드 : 문자열 `"#document"` 반환

## 39.5 요소 노드의 텍스트 조작

### 39.5.1 nodeValue

Node.prototype.nodeValue
setter, getter 모두 있는 접근자 프로퍼티임
node의 value이기 때문에 텍스트 노드의 텍스트이다.
요소 노드나 문서 노드의 nodeValue 프로퍼티 참조시 null을 반환한다.

### 39.5.2 textContent

Node.prototype.textContent
setter, getter 모두 있는 접근자 프로퍼티임
요소 노드의 콘텐츠 영역 내의(시작 태그와 종료 태그 사이) 텍스트를 모두 반환함.
html 마크업은 모두 무시됨

## 39.6 DOM 조작

DOM 조작이란 새로은 노드를 생성해 추가하거나 삭제, 교체하는것을 뜻함
노드 추가, 삭제는 리플로우와 리페인트가 발생해 성능 문제에 주의해야한다.

### 39.6.1 innerHTML

Element.prototype.innerHTML
요소 노드의 콘텐츠 영역 내에 포함된 모드 html 마크업을 문자려 반환함
innerHTML에 새로운 문자열을 할당하면 기존의 모든 자식 노드가 삭제되고 새로운 문자열을 파싱해 만들어진 요소 노드가 추가된다.
사용자로부터 입력받은 데이터를 innerHTML에 그대로 할당하는 것은 **cross-site scripting attacks**에 취약하므로 위험하다.

HTML5는 innerHTML로 삽입된 script 요소 내의 자바스크립트 코드를 실행하지 않는다.

### 39.6.2 insertAdjacentHTML 메서드

Element.prototype.insertAdjacentHTML(positoin, DOMString) 메서드는 기존 메서드를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입함

- position으로 전달할 수 있는 문자열
  - beforebegin : 시작 태그 앞
  - afetrbegin : 시작 태그 뒤
  - beforeend : 종료 태그 앞
  - afterend : 종료 태그 뒤

이것도 innerHTML과 마찬가지로 string을 html로 파싱하기 때문에 크로스 사이트 스크립팅 공격에 취약하다는 것은 동일함

### 39.6.3 노드 생성과 추가

- 요소 노드 생성
  - Document.prototype.createElement(tagName)
  - 요소 노드를 생성해 반환함
- 텍스트 노드 생성
  - Document.prototype.createTextNode(text)
- 텍스트 노드를 요소 노드의 자식 노드로 추가
  - Node.prototype.appendChild(childNode)
  - document에도 추가해줘야 페이지에 적용됨

### 39.6.4 복수의 노드 생성과 추가

여러 노드를 하나씩 생성해 dom에 추가하는것은 성능상의 문제가 생길 수 있다.
빈 요소에 넣고 dom에 추가할 수도 있지만 불필요한 요소가 추가되어 바람직하지 않다.

이럴때는 빈 요소 대신에 DocumentFragment 노드를 생성해 추가할 노드를 DocumentFragment에 넣고 한꺼번에 dom에 추가하는 방식으로 해결할 수 있다.

### 39.6.5 노드 삽입

- 마지막 노드로 추가
  - Node.prototype.appendChild
- 지정한 위치에 노드 삽입
  - Node.prototype.insertBefore(newNode, childNode)
  - newNode를 childNode 앞에 추가한다

### 39.6.6 노드 이동

DOM에 이미 있는 노드를 appendChild 또는 insertBefore를 이용해 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가함

### 39.6.7 노드 복사

Node.prototype.cloneNode([deep:true | false])
deep이 true인 경우 깊은 복사를 해 자손 노드가 포함된 사본 생성
false인 경우 얕은 복사로 자기 자신만의 사본을 생성함. 이때는 자손 노드를 복사하지 않아 텍스트 노드도 없다.

### 39.6.8 노드 교체

Node.prototype.replaceChild(newChild, oldChild)
자신을 호출한 노드의 자식 노드를 다른 노드로 교체함

### 39.6.9 노드 삭제

Node.prototype.removeChild(child)

## 39.7 어트리뷰트

### 39.7.1 어트리뷰트 노드와 attributes 프로퍼티

html 어트리뷰트는 html 요소의 시작 태그에 attribute-이름 = attribute-값 형식으로 정의

글로벌 어트리뷰트(id, class, style, title)와 이벤트 핸들러 어트리뷰트는 모든 html 요소에서 공통적으로 사용할 수 있다
특정 html 요소에만 한정적으로 사용 가능한 어트리뷰트도 있다

어트리뷰트 하나당 하나의 어트리뷰트 노드가 생성된다

Element.prototype.attributes로 모든 어트리뷰트를 획득할 수 있다. 다만 getter만 있는 읽기 전용 접근자 프로퍼티이다. 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 반환함.

### 39.7.2 HTML 어트리뷰트 조작

Element.prototype.getAttribute/setAttribute로 요소 노드에서 바로 어트리뷰트 값을 얻거나 변경할 수 있다.

Element.prototype.hasAttribute로 특정 어트리뷰트가 있는지 확인할 수 있다.
Element.prototype.removeAttribute(attribte name)으로 특정 html 어트리뷰트를 삭제할 수 있다.

### 39.7.3 HTML 어트리뷰트 vs DOM 프로퍼티

DOM 프로퍼티 -> HTML 어트리뷰트에 대응하는 프로퍼티
DOM 프로퍼티는 HTML 어트리뷰트 값을 초기값으로 가지고 있다.

HTML 어트리뷰트는 HTML 요소의 초기 상태를 지정하는 용도이다. HTML 어트리뷰트 값은 HTML 요소의 초기 상태를 의미하는 것이고 이는 변하지 않는다.

요소 노드는 상태를 가지고 있다. 요소 노드는 초기 상태와 최신 상태를 관리하는데 초기 상태는 어트리뷰트 노드가 관리하고 최신 상태는 DOM 프로퍼티가 관리한다.

- attribute 노드
  setAttribute 메서드는 어트리뷰트 노드에서 관리하는 HTML 요소에 지정한 어트리뷰트 값, 초기 상태값을 변경하는 것이다.

- DOM 프로퍼티
  - HTML 어트리뷰트와 DOM 프로퍼티가 언제나 1:1로 대응하는 것은 아니다.
  - 대응되는 키도 항상 일치하는것은 아니다
  - getAttribute 메서드로 취득한 값은 언제나 문자열이지만 DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐수도 있다.

### 39.7.4 data 어트리뷰트와 dataset 프로퍼티

html 요소에 정의한 사용자 정의 어튜리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다.

data 어트리뷰트 값은 HTMLElement.dataset 프로퍼티로 취득할 수 있다.

## 39.8 스타일

### 39.8.1 인라인 스타일 조작

- HTMLElement.prototype.style
  - 요소 노드의 인라인 스타일을 얻거나 추가, 변경
  - CSSStyleDeclaration 타입의 객체 반환
    - CSS 프로퍼티에 대응되는 프로퍼티를 가지고 프로퍼티는 카멜 케이스를 따른다

### 39.8.2 클래스 조작

- Element.prototype.className

  - setter와 getter 모두 존재하는 접근자 프로퍼티
  - class 어트리뷰트 값을 문자열로 반환 (여러개일 경우 공백을 구분자로 사용)

- Element.prototype.classList
  - class 어트리뷰트 정보를 담은 DOMTokenList 객체 반환
  - DOMTokenList는 유사 배열 객체이고 이터러블이다
  - 제공하는 메서드
    - add
    - remove
    - contains -> 인수로 전달된 문자열과 일치되는 클래스가 있는지 확인
    - replace
    - toggle -> 인수로 전달된 문자열에 해당하는 클래스가 있으면 빼고 없으면 넣음

### 39.8.3 요소에 적ㅇ요되어 있는 CSS 스타일 참조

window.getComputedStyle(element)
인수로 전달한 요소 노드에 적용된 스타일을 CSSStyleDeclaration 객체에 담아 반환

## 39.9 DOM 표준

HTML과 DOM 표준은 W3C와 WHATWG이라는 단체가 협력하며 공통된 표준을 만들어 왔다.

2018년 4월부터는 구글, 애플, 마이크로소프트, 모질라로 구성된 4개의 주류 브라우저 벤더사가 주도하는 WHATWG가 단일 표준을 내놓기로 합의했다.
