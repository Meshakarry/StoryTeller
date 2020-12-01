import React from 'react'
import './NavigationItem.css'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const NavigationItem = (props) => {
    const useStyles = makeStyles({

        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            '&:hover': {
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: 'white',

            },
        }

    })

    const classes = useStyles();
    return(
    <React.Fragment>
        <Link to={props.Link} className={classes.linkText}>

            <ListItem button>
                <ListItemText primary={props.children} />
            </ListItem>


        </Link>
    </React.Fragment>
    )
}
export default NavigationItem;