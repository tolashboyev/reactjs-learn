import React from 'react';
import './App.css';
import Posts from './components/Posts';

class App extends React.Component {
  state = {
    posts: [
      {id: 1, name: 'JavaScript'},
      {id: 2, name: 'ReactJs'},
      {id: 3, name: 'AngularJs'},
      {id: 4, name: 'VueJs'}
    ]
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }
  render(){
    return (
      <>
        <Posts post={this.state.posts} />
        <h1>Hi!</h1>
      </>
      
    );
  }
}

export default App;
