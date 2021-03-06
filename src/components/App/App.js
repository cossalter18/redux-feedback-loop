import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
//import components
import Understanding from '../Understanding/Understanding'
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback"
import Comments from "../Comments/Comments"
import Submit from "../Submit/Submit"

class App extends Component {

  state = {
    feedback:[],
    
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
          {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
        </header>
        <br/>
        <div className="img">
            <img src="images/download.jpeg" alt="spongebob"/>
        </div>
       
        <br />
        <Router>
          <div>
          <Route exact path="/" render= {(props) => <Understanding {...props} feedack={this.state.feedback}/>} />
          <Route path="/Feeling" render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />} />
          <Route path="/Support" render={(props) => <Support {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />} />
          <Route path="/ReviewFeedback" render={(props)=><ReviewFeedback {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState}/>}/>
          <Route path="/Comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
          <Route path="/Submit" render={(props) => <Submit {...props} dispatch={this.props.dispatch}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);
