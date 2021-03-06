import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import WholeNavModal from './components/WholeNavModal';
import './App.css';
import store from './store';

class App extends Component {
  mount = false;
  constructor(props) {
    super(props);
    this.state = {
      onExtendNavMod: false,
      onExtendMain: false,
      categoryArr: [],
      noteArr  : [],
      categorySelected: false
    }

    store.subscribe(function () {
      if(this.mount===true) {
        this.setState(store.getState())
      }
    }.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.categorySelected===false&&nextState.categorySelected===false)
      return true;
    if(this.state.categorySelected!==nextState.categorySelected){
      return true;
    }
    if(this.state===nextState) return false;
    return true;
  } 

  componentDidMount() {
      this.mount =true;
  }

  componentDidUpdate() {
    if(this.state.categorySelected!==false && this.state.onExtendMain === false)
    {
      store.dispatch({type:"EXTEND_MAIN", onExtendMain: true})   
    }
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav categoryArr={this.state.categoryArr}></Nav>
        {this.state.onExtendMain?<Main noteArr={this.state.noteArr}></Main>:null}
        {this.state.onExtendNavMod? <WholeNavModal categoryArr={this.state.categoryArr} /> : null}
      </div>
    )

  }
}

export default App;
