import { UnlockIcon } from "@chakra-ui/icons";
import { Button, Flex, Spacer, Text, Heading, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react";
import {motion } from 'framer-motion'

const Navbar = () => {
    const toast = useToast()

    const showToast = () => {
        toast(
            {
                title: 'Logged out',
                description: 'Successfully logged out',
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
                icon: <UnlockIcon />
            }
        )
    }

    return ( 
        <Flex
        as={motion.div} 
        initial={{
            x: 0,
            y: -200,
            opacity: 0,
        }}
        animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 2,
                delay: 1
            }
        }}
        my='10px' mb='40px' 
        mx='20px' alignItems='center'>
            <Heading as='h3' fontSize='25px'>Sam Tasks</Heading>
            <Spacer />
            <HStack spacing='15px'>
                <Avatar bg='purple' name="S" src="" size='sm'>
                    <AvatarBadge color='white' bg='purple'>
                        <Text></Text>
                    </AvatarBadge>
                </Avatar>
                <Text>samsonaina12@gmail.com</Text>
                <Button onClick={showToast} bg='purple' color="white">Logout</Button>
            </HStack>
        </Flex>
        //<Flex w='100%' bgColor='grey' wrap='wrap' gap='2' justify='space-around'>
        //   <Box w='200px' h='50px' bg='red'>1</Box>
        //    <Box w='200px' h='50px' bg='blue'>2</Box>
        //    <Box w='200px' h='50px' bg='orange'>3</Box>
        //    <Box w='200px' h='50px' bg='black'>4</Box>
        //</Flex>
    );

}
 
export default Navbar; 