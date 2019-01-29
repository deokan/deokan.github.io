#09 Component Lifecycle
===

컴포넌트 라이프사이클에 관하여 알아보자
컴포넌트는 여러 기능들을 정해진 순서대로 실행한다.

예를들어 컴포넌트 render를 할때, 즉 컴포넌트가 페이지에 띄워질때
~~~
componentWillMount() -> render() -> componentDidMount()
~~~
순서로 실행된다. 이 싸이클은 자동으로 발생한다.

예를들어 현재 만들고 있는 영화앱의 경우, willMount 단계에서 API를 통해 영화정보를 가져오고,
render 단계에서 가져온 데이터 관련 작업을 할 것이다.
그 후, didMount에서 컴포넌트가 모두 만들어진 후의 처리를 하게 된다.

willMount는 싸이클이 시작되었음을 알게될 것이고
render는 컴포넌트가 이제 존재하게 되었음을, didMount는 성공적으로 생성이 완료되었음을 알린다.

Update의 과정은 좀 더 복잡하다.
~~~
1. componentWillReceiveProps() : 컴포넌트가 새로운 props를 받았다는 의미.
2. shouldComponentUpdate() : 이전 props와 새로운 props를 살펴본 후에 이전과 다르면 리액트는 update == true라고 판단. 업데이트를 한다.
3. componentWillUpdate() : 컴포넌트가 업데이트 될 것임을 알린다. 
4. render() : 위와 동일.
5. componentDidupdate() : 업데이트가 완료되었음을 알림.
~~~

예를들어 업데이트 과정에서 componentWillUpdate단계에 모래시계 표시 내지는 spinner 아이콘등을 보여주고
componentDidupdate 단계에서 이를 사라지게 하는등의 응용이 가능하다.

정리하자면 컴포넌트는 많은 function들을 가지고 있고, 이들은 특정 순서대로 동작한다는 것이다.
