#10 Thinking in React Component State
===

state는 모든 컴포넌트가 가지고 있는 객체이다.
앞서 배운 각종 function (componentWillMount, componentWillUpdate 등등) 처럼, 모든 리액트 컴포넌트에 존재한다.

중요한 사실은
~~~
staterk 바뀔 때 마다, component는 다시 render()를 한다!
~~~

주의할점은 state를 직접적으로 변경해선 안된다.
(에러는 나지 않지만 console에 경고가 뜸)

```js
this.state.greeting = 'something'
```
직접적으로 변경하면 위의 render 설정들이 작동을 하지 않는다.
변경을 위해서는 아래와 같이 작성한다.
```js
this.setState({
  greeting: 'hello again!'
})
```

결론
1. state 변경을 위해선 setState를 사용한다.
2. state가 변경되면 render()가 다시 실행된다. 새로운 state를 참조하며!
