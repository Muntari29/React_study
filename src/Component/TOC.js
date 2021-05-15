import React, { Component } from 'react';

class TOC extends Component{
  /* 변하지 않은 데이터를 계속 랜딩하는 비효율성을 줄이기 위한 함수
  기본 약속으로 새로운 props와 state를 받을 수 있다.
  함수의 결과로 true면 아래 render() 실행, false면 실행되지 않는다.
  이전 props 값과 변경된 props 값을 비교할 수 있으며 
  여기서 push가 아닌 concat을 통해 원본을 변경하지 않는 방법으로 아래와 같은 조건을 사용할 수 있게됨.
  이는 프로젝트가 커질 수 수록 높은 성능을 발휘하게 된다.*/
    shouldComponentUpdate(newProps, newState){
      console.log('==> TOC Should');
      if (this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      console.log('TOC render');
      const data = this.props.data;
      var i = 0;
      const tocList = [];
      while(i < data.length){
        tocList.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" + data[i].id}
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            >{data[i].title}
          
          </a>
        </li>
        )
        i++
      }
      return(
        <nav>
              <ul>
                {tocList}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;