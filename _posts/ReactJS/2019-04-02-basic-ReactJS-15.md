#15 Promises
===

promise는 새로운 자바스크립트 컨셉이다.
기본적으로 비동기방식 프로그래밍이다.
라인에 따라 순차적으로 실행되는 것이 아니라, 동시에 여러개의 동작을 처리할 수 있다.

또다른 특징으로는 시나리오를 설정 & 관리 할 수 있다.
(good or bad scenario)

- then() : 동작과 관계없이 무조건 이후에 실행됨
- catch() : error가 났을 경우 실행됨 


then() function은 1개의 attribute만을 전달한다. (fetch의 결과, 오브젝트)

```js
componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log('Error! ::: ', err)
    })
  }
```
위와 같이 response로 받아서 console.log로 출력해보면 body가 readable stream 이라고 나온다.
이는 byte로 data가 이루어져 있다는 의미고, json으로 변환하여야 눈으로 확인이 가능하다.

```js
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => {
      console.log('Error! ::: ', err)
    })
  }
```
console log를 확인하면 json형식의 영화리스트를 확인 할 수 있다.
이처럼 fetch를 사용하면 url을 ajax로 매우 간단하게 불러올 수 있다.
