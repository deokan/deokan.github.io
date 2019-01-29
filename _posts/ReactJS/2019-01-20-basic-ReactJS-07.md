#7 List with .map()
===

몇개의 영화가 있는지, 그리고 계속 복붙을 할 수는 없으므로 List를 만들자
API에서 긁어온 많은 양의 영화정보를 처리할 수 있을 것이다.

### App.js
```js
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
```

javascript array에서 제공하는 map()을 이용한 모습이다.
map()은 원본 array의 각 요소들에 대해 주어진 함수를 호출한 결과를 모아 새로운 array에 담아 return하는 function이다.

#### example
```js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
위 코드에서는 람다식으로 표현하였다.
```js
//아래 두 코드의 결과는 같다.
const map1 = array1.map(x => x * 2);
const map1 = array1.map(function(x) {
  return x*2;
});
```
