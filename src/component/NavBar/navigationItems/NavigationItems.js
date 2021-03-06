import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem'
import './NavigationItems.css'
import Brand from '../Brand/Brand'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const NavigationItems = () => {
    const navLinks = [
        { title: `Profile`, path: `/Profile` },
        { title: `About us`, path: `/About-us` },
        { title: `Contact`, path: `/Contact` },
    ]
    const useStyles = makeStyles((theme) => ({

        navDisplayFlex: {
           display:'flex',
           justifyContent:'center',
          
            [theme.breakpoints.down('xs')]: {
                display:'block',
               
            }
        }}))

    const classes = useStyles();
    return (
        <React.Fragment>

            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                   
                    <NavigationItem  key={title} Link={path}>{title}</NavigationItem>
                ))}


            </List>

        </React.Fragment>
    )
}
export default NavigationItems;
