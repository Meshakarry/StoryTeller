import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem'
import './NavigationItems.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavigationItems = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class='nav '>
                        <NavigationItem link='#'>Home</NavigationItem>
                        <NavigationItem link='#'>Profile</NavigationItem>
                        <NavigationItem link='#'>Find Friends</NavigationItem>
                    </ul>

                </div>
            </nav>

       </React.Fragment>
    )
}
export default NavigationItems;
