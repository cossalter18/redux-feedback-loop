import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'


import Understanding from '../Understanding/Understanding'
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback"
import Comments from "../Comments/Comments"

class App extends Component {

  state = {
    feedback: []
  }

  componentDidMount() {
    console.log('App mounted');
    this.getFeedback();
  }

  getFeedback = () => {
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
       
        <br />
        <Switch>
          <Route exact path="/" render= {(props) => <Understanding {...props} feedack={this.state.feedback}/>} />
          <Route path="/Feeling" render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />} />
          <Route path="/Support" render={(props) => <Support {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />} />
          <Route path="/ReviewFeedback" render={(props)=><ReviewFeedback {...props} dispatch={this.props.dispatch}/>}/>
          <Route path="/Comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
        </Switch>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
