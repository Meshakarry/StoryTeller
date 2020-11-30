import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem'
import './NavigationItems.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Brand from '../Brand/Brand'

const NavigationItems = () => {
    return (
        <React.Fragment>
            
            <Brand />
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class='navbar-nav'>

                <NavigationItem link='/home' >Home</NavigationItem>
                <NavigationItem link='#'>Profile</NavigationItem>
                <NavigationItem link='#'>Find Friends</NavigationItem>
            </ul>
            </div>

        </React.Fragment>
    )
}
export default NavigationItems;
