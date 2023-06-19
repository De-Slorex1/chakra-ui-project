import { Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Framer = () => {

    const newAnimate = {
        visible: {
            
        }
    }

    return ( 
        <Container width='100%' height='100%'>
            <Box
            as={motion.div}
            whileHover={{scale: 1.3, borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}
            whileTap={{scale: 1.2, borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}
            dragConstraints={{left: -100, right: 100}}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            p='10px'
            textAlign='center'
            w='100px'
            h='100px'
            color='white'
            >
            Animate
            </Box>
        </Container>
     );
}
 
export default Framer;