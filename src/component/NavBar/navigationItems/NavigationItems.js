import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem'
import './NavigationItems.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigationItems = () => {
    return (
        <React.Fragment>
            <ul class='nav '>
                <NavigationItem link='/home' >Home</NavigationItem>
                <NavigationItem link='#'>Profile</NavigationItem>
                <NavigationItem link='#'>Find Friends</NavigationItem>
            </ul>

        </React.Fragment>
    )
}
export default NavigationItems;
