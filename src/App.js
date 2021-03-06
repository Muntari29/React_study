import './App.css'; // APP이라는 컴포넌트의 디자인은 App.js 안에 넣는다는 의미.
import React, { Component } from 'react';
import TOC from './Component/TOC';
import ReadContent from './Component/ReadContent';
import Control from './Component/Control';
import CreateContent from './Component/CreateContent';
import UpdateContent from './Component/UpdateContent';

/*
컴포넌트를 만드는 가장 기본 코드
React의 Component를 상속하여 클래스를 만듬
이렇게 만든 클래스는 render라는 메서드를 가짐.
*/
class App extends Component {
  // 컴포넌트가 실행되기 전에 constructor라는 함수가 제일 먼저 실행되서 초기화를 담당한다.
  constructor(props){
    super(props);
    // 단순 id 지표로만 사용할 것이기에 state 안에 넣어주면 불필요한 랜딩이 발생한다.
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
  getReadContent(){
    let i = 0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if (data.id === this.state.select_content_id){
            return data;
          }
          i++;
        }
  }
  getContent(){
    var _title, _desc, _article = null;
      if (this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      } else if(this.state.mode === 'read'){
        var _Read = this.getReadContent();
        _article = <ReadContent title={_Read.title} desc={_Read.desc}></ReadContent>
      } else if (this.state.mode === 'create'){
        _article = <CreateContent makeOnSubmit={function(_title, _desc){
          // 추후 성능 개선을 통해 push 대신 반드시 concat을 사용하도록하자.
          // shouldComponentUpdate 함수와 관련되어 있다.
          this.max_content_id = this.max_content_id + 1;
          const _content = this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc:_desc}
          )
          this.setState({
            contents:_content,
            mode:'read',
            select_content_id:this.max_content_id
          })
        }.bind(this)}></CreateContent>
      } else if (this.state.mode === 'update'){
        _Read = this.getReadContent();
        _article = <UpdateContent data={_Read} makeOnSubmit={function(_id, _title, _desc){
          // Array.from(array)로 기존 배열을 복사한 새로운 배열을 만드는 방법을 활용
          const _content = Array.from(this.state.contents);
          let i = 0;
          while(i < this.state.contents.length){
            if(_content[i].id === _id){
              _content[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i++;
          }
          this.setState({
            contents:_content,
            mode: 'read'
          })
        }.bind(this)}></UpdateContent>
      }
      return _article;
    }
  render() {
    console.log('app render')
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
        <Control 
          onChangeMode={function(_mode){
            if (_mode === 'delete'){
              if (window.confirm('really??')){
                const _contents = Array.from(this.state.contents);
                let i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.select_content_id){
                    _contents.splice(i,1);
                    break;
                  }
                i++;
                }
            this.setState({
              mode: 'welcome',
              contents:_contents
            });
            alert('Done');
          } else{
            this.setState({
              mode:_mode
            });
          }
        }
      }.bind(this)}></Control>
        {this.getContent()}
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
