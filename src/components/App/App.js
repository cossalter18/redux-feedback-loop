import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state={
    feedback: []
  }

componentDidMount(){
  console.log('App mounted');
  this.getFeedback();
}

getFeedback=()=>{
  console.log('get feedback');
  axios({
    method: 'GET',
    url: '/feedback'
  }).then(response => {
    //console.log(response.data);
    this.setState({
      feedback: response.data
    })
    console.log(this.state.feedback);  
  }).catch(error => {
    console.log(error);
    
  })
  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
