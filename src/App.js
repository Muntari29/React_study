import './App.css'; // APP이라는 컴포넌트의 디자인은 App.js 안에 넣는다는 의미.
import React, { Component } from 'react';
import TOC from './Component/TOC';
import Content from './Component/Content';

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
      mode: 'Non_welcome',
      select_content_id: 1,
      subject:{title:'WEB', sub:'WWW!!!!'},
      welcome: {title:'welcome event', desc:'welcome event!!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML!!'},
        {id:2, title:'CSS', desc:'CSS!!'},
        {id:3, title:'Javascript', desc:'javascript!!'}
      ]
    }
  }
  render() {
    console.log('app render')
    var _title, _desc = null;
      if (this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
      } else if(this.state.mode === 'read'){
        let i = 0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if (data.id === this.state.select_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i++;
        }
      } else {
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          // onChangePage 이벤트 설치
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
          > 
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              select_content_id:id
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
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
    console.log('Subject render');
    return (
      <header>
            <h1><a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
      </header>
    );
  }
} 


export default App;
