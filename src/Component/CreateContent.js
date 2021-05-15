import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.makeOnSubmit(
                e.target.title.value,
                e.target.desc.value
              );
              // this.props.makeOnSubmit();
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="abdbdb"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="descirption"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default CreateContent;