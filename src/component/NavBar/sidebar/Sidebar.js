import React, {useState} from 'react'
import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
const Sidebar=()=>{
    const [state, setState] = useState({ right: false }) // Add this
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setState({ [anchor]: open })
    }
    return(
        <React.Fragment>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("right",true)}>
                <Menu/>
            </IconButton>
        </React.Fragment>
    )
}
export default Sidebar;