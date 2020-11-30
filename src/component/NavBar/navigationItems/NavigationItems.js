import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem'
import './NavigationItems.css'
import Brand from '../Brand/Brand'

const NavigationItems = () => {
    return (
        <React.Fragment>
            
            <Brand />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>

                <NavigationItem link='/home' >Home</NavigationItem>
                <NavigationItem link='#'>Profile</NavigationItem>
                <NavigationItem link='#'>Find Friends</NavigationItem>
            </ul>
            </div>

        </React.Fragment>
    )
}
export default NavigationItems;
