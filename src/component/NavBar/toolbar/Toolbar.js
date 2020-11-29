import header from 'react'
import NavigationItems from '../navigationItems/NavigationItems'
const Toolbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                   <NavigationItems/>

                {/* </div> */}
            </nav>

        </header>
    )
}
export default Toolbar;