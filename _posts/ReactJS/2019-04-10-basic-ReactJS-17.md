#17 Updating Movie : Component
===

추가적인 영화 정보를 가져오는 작업을 할 것이다.  
제목, 포스터에 이어 장르와 시놉시스를 추가로 가져오기 위해, API상으로 필드명을 확인한다.  

API url : https://yts.am/api/v2/list_movies.json
```js
return <Movie 
  title={movie.title_english} 
  poster={movie.medium_cover_image} 
  genres={movie.genres}
  synopsis={movie.synopsis}
  key={movie.id} 
/>
```

Movie.js에서는 전달받은 data를 기반으로 화면에 출력한다.
```js
function Movie({title, poster, genres, synopsis, key}){
  return (
    <div className="Movie">
      <div className="Movie_column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie_column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie_Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}
```
위 소스상에서 Genre 정보를 그리는 새로운 컴포넌트를 정의하였다.
```js
function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre} </span>
  )
}
```

