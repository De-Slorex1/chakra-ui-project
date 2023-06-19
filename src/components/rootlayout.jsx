import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

const RootLayout = () => {
    return ( 
        <Grid templateColumns='repeat(6, 1fr)' bg='grey.50'>
            <GridItem 
            as={motion.aside}
            initial={{
                y: 0,
                x: -200,
                opacity: 0.5
            }}
            animate={{
                y: 0,
                x: 0,
                transition: {
                    type: 'tween',
                    duration: 3,
                    delay: 0
                },
                opacity: 1
            }}
            colSpan={{base: '6', md: '2', lg: '1'}} 
            bg='purple'
            minHeight={{lg: '100vh'}}
            p={{base: '20px', lg: '30px'}}
            >
                <Sidebar />
            </GridItem>
            <GridItem as='main' 
            colSpan={{base: '6', md: '4', lg: '5'}} 
            p='30px'>
                <Navbar />
                <Outlet />
            </GridItem> 
        </Grid>
     );
}
 
export default RootLayout;