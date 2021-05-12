import './App.css'; // APP이라는 컴포넌트의 디자인은 App.js 안에 넣는다는 의미.
import React, { Component } from 'react';

/*
컴포넌트를 만드는 가장 기본 코드
React의 Component를 상속하여 클래스를 만듬
이렇게 만든 클래스는 render라는 메서드를 가짐.
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
/* / 컴포넌트를 만들때는 반드시 하나의 최상위 태그로 시작해야한다.
 여기서 사용하는 태그들은 유사 자바스크립트이다.
 페이스북에서 만든 컴퓨터언어 jsx이다.
 우리가 jsx로 작성하면 react가 자바스크립트 코드로 매핑해준다 이해하자
*/
class Subject extends Component{
  render(){
    return (
      <header>
            <h1>WEB</h1>
            world wide web!
      </header>
    );
  }
} 

class TOC extends Component{
  render(){
    return(
      <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
            </ul>
        </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
            <h2>HTML</h2>
            HTML tttttt
        </article>
    );
  }
}
export default App;
