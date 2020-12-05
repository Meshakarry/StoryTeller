import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { AppBar, Toolbar, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Header from '../NavBar/toolbar/Toolbar'
const Nesto = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#242582' }}>
            <div style={{width:'50%',height:'600px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{ width: '60%', height: '200px', backgroundColor: 'white', borderRadius: '20px',display:'flex',flexFlow:'column',alignItems:'center',justifyContent:'center' }}>
                    <h3>ovo je neki tekst u sredini</h3>
                    <span>ovo je neki tekst u sredini</span>
                    <span>ovo je neki tekst u sredini</span>
                </div>
            </div>

            <div>


            </div>
        </div>
    )
}
export default Nesto;