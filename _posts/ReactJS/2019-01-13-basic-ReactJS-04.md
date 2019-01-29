#04
===

CRA (Create React App) 설치하기 (Windows 기준)
---

npm을 사용하기 위해 node.js를 설치. (node.js에 npm이 내장되어 있다.)
설치 후 명령프롬프트 창을 열어 명령어 실행
~~~
npx create-react-app movie_app
~~~
 - 명령어는 https://github.com/facebook/create-react-app > README.md 파일 참조

![Alt install](C:\Users\deokan\Pictures\for_github_posts\cra_install.png)

해당 명령어를 수행하면 자동으로 CRA를 설치한다.
그와 동시에 movie_app이라는 cra app용 dir를 만들어준다.
(동영상 강좌에 따라 movie_app이라는 dir로 만들어주었다.)

패키지 매니징은 yarn을 통해서 할건데, yarn 설치는 npm을 통해 할 수 있다.
~~~
npm install -g yarn
~~~

cd movie_app을 통해 해당 dir로 들어가 아래 명령어를 실행한다.
~~~
yarn start
~~~
이 명령어는 react-scripts를 실행시킨다.
그리고 미리 설치된 개발서버를 시작한다!

![Alt install](C:\Users\deokan\Pictures\for_github_posts\server_started.png)

화면에 출력된 로컬주소로 접속하면 기본화면을 볼 수 있다.

~\movie_app\src\App.js 파일을 열어보자. (그 밖의 다른 파일들을 보면 기본설정이 되어있음을 알 수 있다.)
CRA는 이처럼 기본 configuration을 하는 수고를 줄여준다.

App.js 파일의 내용을 수정하면 실시간으로 yarn이 컴파일링을 하고, 실제 앱에 즉각 적용됨을 확인할 수 있다.
~~~
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Let's devel up! </h2>
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
~~~
