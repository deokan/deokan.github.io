02는 1분 여짜리 단순 앱 소개 영상이라 Skip

#03 Transfiler, Transformer, Modulebundler : Web pack
===

우리가 사용하는 코드는 리액트 코드이기 때문에, 
이를 일반 자바스크립트 코드로 바꿔주는 툴이 필요.
트랜스파일러 또는 트랜스포머하고 함.

우리가 사용할 트랜스파일러는 '웹팩'이다.
웹팩은 리액트 코드를 브라우져가 이해할 수 있는 코드로 변경해주는 역할을 수행한다.

현재 javascript는 6까지 나와있으며, 다양한 기능을 제공한다.
하지만 모든 브라우저가 es6를 이해하진 못하므로, 
웹팩을 이용해 최신 javascript를 브라우저가 이해할 수 있게 변경해 주어야 한다.
ex)이미지파일을 웹팩을 통해 png로 바꿀 수 있다.

ReactJS로 작업하려면 웹팩과 같은 모듈번들러가 필요하지만, 
페이스북이 웹팩과 같은 툴을 사용할 필요 없이 쉽게 리액트앱을 만들어주는 'creat react app'을 제공한다.
https://github.com/facebook/create-react-app
~~~
npx create-react-app my-app
cd my-app
npm start
~~~
추가로 node.js도 install 해야한다.
