import React from 'react'
import './Layout.css'
import Toolbar from '../../component/NavBar/toolbar/Toolbar'

const Layout=(props)=>{
    return(
        <React.Fragment>
          <Toolbar/>
    <main>{props.children}</main>
        </React.Fragment>
    );
}
export default Layout;