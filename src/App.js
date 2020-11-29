import './App.css';
import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import {Route ,BrowserRouter as Router} from 'react-router-dom';
import Home from './component/Home/Home';

import NavigationItems from './component/navigation/navigationItems/NavigationItems'
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* layout je kao neki okvir, layouta ce se odnositi na  navigacisku traku
         i footer i unutar njega ide sve ostalo dakle nije self klosing */}
        <Layout>
        <nav class='navbar-light bg-light'>
      <NavigationItems />
      </nav>
      <Route path="/home" component={Home}></Route>


        </Layout>
        

      </React.Fragment>
    )
  }
}

export default App;
