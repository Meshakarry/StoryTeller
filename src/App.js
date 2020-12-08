import './App.css';
import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {Route} from 'react-router-dom';
import Home from './component/Home/Home';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Login from "./component/Login/Login";
 import Registracija from "./component/Registracija/Registracija";
import Nesto from './component/Nesto/Nesto';
import Regist from './Regist/Regist';
import Log from './Log/Log';


class App extends Component {
  render() {
    return (
      <div style={{ height: '100%'}}>
        <Layout>
          <Route path="/home" component={Home}></Route>
          <Route path="/Regist" component={Regist}></Route>
          <Route path="/Log" component={Log}></Route>
          <Route path="/Nesto" component={Nesto}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Registracija" component={Registracija}></Route>


        </Layout>
      </div>
    )
  }
}

export default App;
