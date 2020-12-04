import * as React from "react"
import { IconButton, List, ListItem, ListItemText, Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {Menu}   from "@material-ui/icons"
import { useState } from "react"
import NavigationItems from '../navigationItems/NavigationItems'

const SideDrawer = () => {
  const [state, setState] = useState({ right: false }) // Add this

  const useStyles = makeStyles({
    list: {
      width: 250,
      
    }
  })
  const classes = useStyles();



  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }



  const sideDrawerList = (anchor) => (
    <div
      className={classes.list} /*Add this */
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h4 style={{padding:'10px',textAlign:'center'}}>StoryTeller</h4>
      <NavigationItems/>
    </div>
  )



  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}>
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}>

        {sideDrawerList("right")}

      </Drawer>
    </React.Fragment>
  )
}
export default SideDrawer