#12 Loading State
===

컴포넌트가 생성될때 항상 모든 data가 그 전에 존재하지는 않을 것이다.
먼저 data가 없는 컴포넌트가 로딩 된 후, API호출 등을 통해 data를 가져오는 경우가 한 예시다.

이 경우 API를 통해 data가 생성되면, 그 후 state가 update가 되고 render()가 재실행 되면 될 것이다.
위 상황을 재현하기 위해 timeout을 이용해 state를 update해 볼 것이다.

componentDidMount()를 아래와 같이 작성한다.
```js
componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies: [
        {
          title : "Matrix",
          poster : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
          title : "Full Metal Jacket",
          poster : "https://i.pinimg.com/originals/57/d8/bd/57d8bdad8499a8dce87d63e7a76b7ee4.jpg"
        },
        {
          title : "Oldboy",
          poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIJejBMqwyCg7CgpSZOsduF347of3P-FMV5E_HgGU4LYenk3f"
        },
        {
          title : "Star Wars",
          poster : "https://imgix.ranker.com/user_node_img/50076/1001511915/original/the-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces"
        },
        {
          title: "trainsporting",
          poster: "https://images-na.ssl-images-amazon.com/images/I/51GolvcFJTL.jpg"
        }
      ]
    })
  }, 5000)
}
```
컴포넌트가 mount되고나면, 5초후 state에 영화정보들이 채워진다.
기존 소스 내용 중 
~~~ 
this.state.movies.map((movie, index)
~~~
에서 에러가 난다. 이유는 state에 movies라는 array가 없는데, array에서 제공하는 map function을 호출하기 때문이다.
따라서 state안에 movies가 없으면 Loading을 보여주고, 있으면 영화 리스트를 보여주기 위해 아래와 같이 수정한다.
```js
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
```
_renderMovies 라는 function을 추가하였고, 이 function을 이용해 state의 상태에 따라 다른 결과물을 출력하도록 수정하였다.
페이지가 로드된 후 5초후에 state가 변경되고, render가 재실행되면서 영화 리스트가 제대로 출력 되는 것을 확인 할 수 있다.

### App.js
```js
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDismount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidupdate()

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title : "Matrix",
            poster : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://i.pinimg.com/originals/57/d8/bd/57d8bdad8499a8dce87d63e7a76b7ee4.jpg"
          },
          {
            title : "Oldboy",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIJejBMqwyCg7CgpSZOsduF347of3P-FMV5E_HgGU4LYenk3f"
          },
          {
            title : "Star Wars",
            poster : "https://imgix.ranker.com/user_node_img/50076/1001511915/original/the-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces"
          },
          {
            title: "trainsporting",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51GolvcFJTL.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
```
