#11 Practicing this setState
===

state에 관한 좀 더 심오한 내용을 다뤄본다.
컴포넌트 외부에 있는 movies를 state안에 옮기고, didMount()에 수행할 function을 작성한다.

```js
componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "trainsporting",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51GolvcFJTL.jpg"
          }
        ]
      })
    }, 1000)
  }
```

소스 해석 :
컴포넌트가 마운트 되면 1초 후 정의한 function이 수행된다.
state에 있는 movies에 새로운 영화를 추가하는 작업이다.
이를 위해 기존에 있던 movies의 요소들을 불러오는데,
이때 사용하는 것이 ...this.state.movies 이다.

이를 이용해 스크롤을 아래로 할 수록 새로운 영화가 로드되게 하는 등의 응용이 가능하다.

```js
{
  title: "trainsporting",
  poster: "https://images-na.ssl-images-amazon.com/images/I/51GolvcFJTL.jpg"
},
 ...this.state.movies
```
위와 같이 순서를 바꾸면 새로이 추가되는 영화가 맨 위로 오게 된다. 
