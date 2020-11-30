import React from 'react'
import './NavigationItem.css'
import {Link} from 'react-router-dom'

const navigationItem=(props)=>(
    <React.Fragment>
        <li className='nav-item'>
            <Link className='nav-link' to={props.link}>
                {props.children}
            </Link>
        </li>
    </React.Fragment>
)
export default navigationItem;