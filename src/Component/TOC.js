import React, { Component } from 'react';

class TOC extends Component{
    render(){
      const data = this.props.data;
      var i = 0;
      const tocList = [];
      while(i < data.length){
        tocList.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>
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