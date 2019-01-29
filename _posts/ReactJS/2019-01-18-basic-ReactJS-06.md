#06 Data flow with Props
===

메인 컴포넌트 "app"은 모든 영화들을 가지고 있다.
영화는 카드 형태로 보여진다.

즉 메인 컴포넌트안엔 무비 리스트가 있다.
그리고 리스트를 이루는 영화카드엔 해당 영화의 정보가 담긴다.

즉 메인 컴포넌트는 영화 리스트를, 영화 리스트는 영화 각각의 정보를 가지고 있다.
이처럼 부모 컴포넌트가 자식 컴포넌트에게 정보를 줄 때, 사용하는 것이 props

```js
const movies = [
  "Matrix",
  "Full Metal Jacket",
  "Old boy",
  "Star wars"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]}/>
        <Movie title={movies[1]}/>
        <Movie title={movies[2]}/>
        <Movie title={movies[3]}/>
      </div>
    );
  }
}
```
위 코드처럼 Movie 컴포넌트 뒤에 속성으로 title을 부여하면, 각 컴포넌트에 props로 전달된다.

### App.js

```js
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old boy",
  "Star wars"
]

const movieImages = [
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "https://i.pinimg.com/originals/57/d8/bd/57d8bdad8499a8dce87d63e7a76b7ee4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIJejBMqwyCg7CgpSZOsduF347of3P-FMV5E_HgGU4LYenk3f",
  "https://imgix.ranker.com/user_node_img/50076/1001511915/original/the-very-first-_star-war_-poster-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
```
### Movie.js

```js
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    console.log(this.props);
    return (
      <img src={this.props.poster} width="300" height="430"/>
    )
  }
}
export default Movie
```

이러한 DATA FLOW 방식을 통해 강력한 UI를 구축가능하다.
한개의 데이터 소스가 각 자식 컴포넌트들에게 필요한 DATA를 전달하면 되기 때문.
