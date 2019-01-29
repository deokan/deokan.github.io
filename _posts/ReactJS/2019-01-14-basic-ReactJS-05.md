#05 React App 만들기 - Component의 이해와 활용
===

리액트앱을 만들기 전에 하는 것 = 컴포넌트 디자인
우리가 만들 앱에는 크게 3가지의 컴포넌트가 있다.

1. movie list component
2. movie component
3. image component (poster)

1.은 전체이자 기본 component이기에 app이라고 부른다.
지난 회차에서 이미 app 컴포넌트는 제작해두었다.

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> "Let's devel up!" </h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```
App.js를 보면 자바스크립트 안에 html이 자리잡고 있는데. 이를 JSX라고 한다.
JSX는 리액트 컴포넌트를 만들때 사용하는 언어다.

이제 3가지 컴포넌트를 만들건데, 
첫번째는 movie list component,
두번째는 movie card component,
세번째는 movie cover component 이다.

세개 모두 다른 파일에 작업할 것이다.

각 컴포넌트는 각기 다른 function과 methods를 가지고 있다.
모든 컴포넌트는 render function을 가져야 한다.
render는 뭔가를 보여주는, 출력하는 기능이다.
이 컴포넌트가 보여주는 것이 무엇인가에 대한 것이 render에 정의되어 있다.

```js
ReactDOM.render(<App />, document.getElementById('root'));
```
"ReactDOM이 App 컴포넌트를 render(출력)한다. 출력 위치는 document의 id = root 이다.

react vs reactDOM

react : UI library 역할
reactDOM : react를 웹사이트에 출력(render)하는 역할

리액트돔은 1개의 컴포넌트를 출력하고, 출력하는 document안에 엘리먼트가 있는데 id는 root이다.
이건 index.html 파일에 있다.

필수 기능은
> Component > render > return > JSX

##### App.js
```js
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default App;
```

##### Movie.js
```js
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg"/>
    )
  }
}
export default Movie
```
