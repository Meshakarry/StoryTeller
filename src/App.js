import './App.css';
import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {Route} from 'react-router-dom';
import Home from './component/Home/Home';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Route path="/home" component={Home}></Route>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
