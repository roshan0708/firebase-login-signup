import React from 'react';
import './App.css';
import Cover from "./components/Cover/cover.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
      return (
      <div className="App">
        <Cover currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
