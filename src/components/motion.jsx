import {Container, Text, chakra, Box} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp
})

const FramerMotion = () => {
    return ( 
        <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
            <ChakraBox
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            }}
            padding="2"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100px"
            height="100px"
            >
            <Text>I'm feeling STRONG</Text>
            </ChakraBox>
    
            <Box
                as={motion.div}
                height='40px'
                width='40px'
                bg='orange.400'
                drag='x'
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 3.3, borderRadius: ['20%', '20%', '50%', '50%', '20%'] }}
                whileTap={{ scale: 0.9 }}
                transition='0.5s linear'
                // not work: transition={{ transition: "0.5", ease: "linear" }}
            />
        </Container>
    );
}
 
export default FramerMotion;