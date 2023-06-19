import { Fade, ScaleFade, Slide, SlideFade, Collapse, Button, useDisclosure, Box } from "@chakra-ui/react";

const Transition = () => {
    const [isOpen, onToggle] = useDisclosure()

    return ( 
        <>
            <Button onClick={onToggle}>Click me</Button>
            <Fade in={isOpen}>
                <Box
                p='50px'
                color='white'
                bg='teal.500'
                mt={5}
                >
                    Fade
                </Box>
            </Fade>
        </>
     );
}
 
export default Transition;