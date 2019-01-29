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
  // Render : componentWillMount() -> render() -> componentDismount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidupdate()

  state = {
    greeting: 'Hello!'
  }

  componentDismount(){
    setTimeout(() => {
      this.setState({
        greeting: 'hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
      {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
