import React from 'react'
import './Layout.css'
import Toolbar from '../../component/NavBar/toolbar/Toolbar'
import Sidebar from '../../component/NavBar/sidebar/Sidebar'

const Layout=(props)=>{
    return(
        <React.Fragment>
          <Toolbar/>
          <Sidebar/>
    <main>{props.children}</main>
        </React.Fragment>
    );
}
export default Layout;