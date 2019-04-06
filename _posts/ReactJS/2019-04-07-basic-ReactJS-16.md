#16 Async Await
===

지난 챕터에서 가져온 영화 리스트를 state에 올리려면, 다음과 같은 작업을 해야한다.

```js
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => {
      console.log('json :', json)
      this.setState({
        movies : json.data.movies
      })
    })
    .catch(err => console.log('Error! ::: ', err))
  }
```
위와 같은 방식은 코드의 양도 길고 then 안에 then이 이어지며 callback 지옥에 빠질 우려가 있다.

이럴때 async, await를 사용한다.

먼저 getMovies라는 새로운 function을 작성한다.

```js
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log('Error! ::: ', err))
  }
```

이렇게 하는 이유는 componentDidMount의 사이즈를 줄일 수 있기 때문이다.
(많은 function을 불러올때 한군데 있는것 보다는 각기 다른 장소에 function들이 존재하는 편이 더 좋다.)

didMount 후에 asyncronous function인 getMovies가 실행되고, 이 function은 movies라는 변수를 가지고 있다.
이 변수의 값은 _callApi를 통해 가지고 오며, 이때 _callApi function은 await 모드에서 동작한다!

await는 해당 function이 끝나기를 기다리겠다는 의미이다.(성공이든 실패든)
callApi의 return 값을 movies에 set 한다. 그 후 이 컴포넌트의 state를 movies로 SET.

setState는 _callApi가 끝나기 전까지는 실행되지 않는다.
*** json => json.data 은 모던 자바스크립트 기법으로, => 다음에는 return을 생략 가능하다.(return이 포함되어 있다.)

callApi는 fetch promise를 return한다. 
끝나면 const 변수(movies)에 return한 값을 set.

```js
this.setState({
  movies : movies
})

//같은 의미 (모던 자바스트립트)
this.setState({
  movies
})
```
