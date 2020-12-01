import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import NavigationItems from '../navigationItems/NavigationItems'
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { AppBar, Toolbar, List, ListItem, ListItemText, IconButton,Container } from '@material-ui/core';
const Header = () => {
  
    const useStyles=makeStyles({
        navDisplayFlex:{
            display:'flex',
            justifyContent:'space-between',
           
        }
    })

    const classes=useStyles();
    return (

        <React.Fragment>
            <AppBar  style={{backgroundColor:'#242582'}}>
                <Toolbar>
                    <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                   <NavigationItems/>
                   {/* <Sidebar/> */}
                </Container>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}
export default Header;

