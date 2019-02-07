#13 Smart vs Dumb Components
===

모든 컴포넌트가 state가 있는 것은 아니다.
state가 없는 stateless functional component가 존재한다.

이 두 종류의 컴포넌트엔 큰 차이점이 있다.
state가 없는 컴포넌트를 dumb component, 있는 것은 smart component라 부른다.

dumb component는 props만을 가지고 있다.
props만을 가지고 있는 component는 Class 컴포넌트 이름이 아닌
function 컴포넌트 이름으로 작성한다.

```js
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
```
```js
function MoviePoster({poster}) {
  return (
    <img src={poster} width="300" height="430"/>
  )
}
```

어떤 컴포넌트는 단순 return을 위해 존재한다. 라이프 사이클도 없고, state도 없다.
한개의 props과 html 태그만 있으면 되는 것이다.

this.props.poster를 poster로 바꿔주어야 한다. class가 아니기 때문에 this가 없기 때문.
functional 컴포넌트는 props만 가지고 있기때문에 바로 이름을 기재하면 된다.
