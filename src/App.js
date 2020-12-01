import './App.css';
import div, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {Route} from 'react-router-dom';
import Home from './component/Home/Home';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Login from "./component/Login/Login";
 import Registracija from "./component/Registracija/Registracija";
import Nesto from './component/Nesto/Nesto';


class App extends Component {
  render() {
    return (
      <div style={{ height: '100%'}}>
          <Route path="/Nesto" component={Nesto}></Route>
        {/* <Layout>
          <Route path="/home" component={Home}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Registracija" component={Registracija}></Route>


        </Layout> */}
      </div>
    )
  }
}

export default App;
