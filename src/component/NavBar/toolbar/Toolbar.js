import React from 'react'
import NavigationItems from '../navigationItems/NavigationItems'
import 'bootstrap/dist/css/bootstrap.min.css'

const Toolbar = () => {
    return (

        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
               <NavigationItems/>
        
         
        </nav>
        
        </header>
    )
}
export default Toolbar;

