import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons' 
import { motion } from "framer-motion";

const Sidebar = () => {

    const hoverBg = {
        ":hover": {
            m: "0",
            py: "5px",
            px: "0px",
            borderBottom: "2px solid white",
            color: "white"
        }
    }

    return ( 
        <List as={motion.li}  position='fixed' mx="0px" color="white" fontSize='1.3em' spacing='4'>
            <ListItem sx={hoverBg}>
                <ListIcon as={CalendarIcon} />
                <NavLink to='/'>Dashboard</NavLink>
            </ListItem>
            <ListItem sx={hoverBg}>
                <ListIcon as={EditIcon} />
                <NavLink to='/create'>New Task</NavLink>
            </ListItem>
            <ListItem sx={hoverBg}>
                <ListIcon as={AtSignIcon} />
                <NavLink to='/profile'>Profile</NavLink>
            </ListItem>
        </List>
     );
}
 
export default Sidebar;