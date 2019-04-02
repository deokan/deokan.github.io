#14 AJAX on React
===

익히 알겠지만..
AJAX : Asynchronous JavaScript and XML
JSON : JavaScript Object Notation (오브젝트를 자바스크립트로 작성하는 기법)

FETCH를 통해 리액트앱에서 AJAX 통신을 한다.
URL 기반으로 통신하며, YTS.ag 라는 사이트에서 제공하는 API로 영화 DB에서 data를 가져올 예정
https://yts.am/api#list_movies

~~~
https://yts.am/api#list_movies
~~~

아래와 같이 componentDidMount에 fetch를 통해 data를 가져올 수 있도록 수정한다.
```js
componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json')
  }
```
