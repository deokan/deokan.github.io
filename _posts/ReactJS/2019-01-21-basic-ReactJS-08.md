#08 Validating Props with Prop Types
===

본론에 앞서... 지난 시간에 생성한 각각의 자식 component(Movie)는 고유한 key값을 가져야 한다.
```js
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })}
      </div>
    );
  }
}
```
위 소스처럼 function parameter로 index를 추가로 선언하여 key props에 할당한다.(0부터 증가)

---

props로 전달받은 data의 유효성을 검사하는 방법중에,
propTypes이 있다.

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
```
기존에는 React 안에 있었으나, 분리되면서 따로 설치해 주어야 한다.
~~~
yarn add prop-types
~~~

props를 전달받는 컴포넌트에 아래와 같이 작성한다.
```js
static propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
```
~~~
isRequired : 필수 값 여부
PropTypes.string : props의 type 검사 (여기서는 문자열인지)
~~~
선언한 validation을 통과하지 못하면 error가 발생한다.

### Movie.js
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster} width="300" height="430"/>
    )
  }
}
export default Movie
```
