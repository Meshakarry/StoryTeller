import React from 'react'
import './NavigationItem.css'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const NavigationItem = (props) => {
    const useStyles = makeStyles((theme) => ({

        linkText: {
            textDecoration: 'none',
            fontFamily:'Times New Roman',
            color: 'white',
            '&:hover': {
                textDecoration: 'none',
                
                color: 'white',
            },
            [theme.breakpoints.down('xs')]: {
                color: '#242582',
                width:'30px',
                '&:hover': {
                    textDecoration: 'none',
                    color: '#242582',
                },
            }
        }
        

    }))

    const classes = useStyles();
    return (
        <React.Fragment>
            <Link to={props.Link} className={classes.linkText}>

                <ListItem button>
                    <ListItemText primary={props.children} className={classes.root}/>
                </ListItem>


            </Link>
        </React.Fragment>
    )
}
export default NavigationItem;