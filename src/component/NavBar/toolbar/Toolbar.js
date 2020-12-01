import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import NavigationItems from '../navigationItems/NavigationItems'
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { AppBar, Toolbar,IconButton,Container,Hidden } from '@material-ui/core';
const Header = () => {
  
    const navLinks = [
        { title: `Profile`, path: `/Profile` },
        { title: `About us`, path: `/About-us` },
        { title: `Contact`, path: `/Contact` },
    ]

    const useStyles=makeStyles({
        navDisplayFlex:{
            display:'flex',
            justifyContent:'space-between',
           
        }
    })

    const classes=useStyles();
    return (

        <React.Fragment>
            <AppBar  style={{backgroundColor:'#242582',position:'static'}}>
                <Toolbar>
                    <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                    <Hidden xsDown>
                   <NavigationItems/>
                   </Hidden>
                   <Hidden smUp>
                   <Sidebar/>
                   </Hidden>
                </Container>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}
export default Header;

