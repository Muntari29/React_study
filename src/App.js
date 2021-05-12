import './App.css'; // APP이라는 컴포넌트의 디자인은 App.js 안에 넣는다는 의미.
import React, { Component } from 'react';
import TOC from './Component/TOC';
import Content from './Component/Subject';

/*
컴포넌트를 만드는 가장 기본 코드
React의 Component를 상속하여 클래스를 만듬
이렇게 만든 클래스는 render라는 메서드를 가짐.
*/
class App extends Component {
  // 컴포넌트가 실행되기 전에 constructor라는 함수가 제일 먼저 실행되서 초기화를 담당한다.
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'WWW!!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML!!'},
        {id:2, title:'CSS', desc:'CSS!!'},
        {id:3, title:'Javascript', desc:'javascript!!'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} sub={this.state.subject.sub}> 
        </Subject>
        <Subject title="REACT" sub="RRRRR"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="string~~"></Content>
      </div>
    );
  }
}
/* / 컴포넌트를 만들때는 반드시 하나의 최상위 태그로 시작해야한다.
 여기서 사용하는 태그들은 유사 자바스크립트이다.
 페이스북에서 만든 컴퓨터언어 jsx이다.
 우리가 jsx로 작성하면 react가 자바스크립트 코드로 매핑해준다 이해하자
*/
// HTML에서의 속성은 attribute라고 하고, React에서는 Props라 부른다.
class Subject extends Component{
  render(){
    return (
      <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
      </header>
    );
  }
} 


export default App;
