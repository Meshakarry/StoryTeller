import React from 'react'
import './Layout.css'

const Layout=(props)=>{
    return(
        <React.Fragment>
            {/* <Toolbar/>
            <Sidebar/> */}
    <main>{props.children}</main>
        </React.Fragment>
    );
}
export default Layout;