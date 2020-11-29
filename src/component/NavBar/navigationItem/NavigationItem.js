import React from 'react'
import './NavigationItem.css'
// import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const navigationItem=(props)=>(
    <React.Fragment>
        <li class='nav-item'>
            <a class='nav-link' href={props.link} exact={props.exact}>
                {props.children}
            </a>
        </li>
    </React.Fragment>
)
export default navigationItem;