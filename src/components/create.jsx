import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { redirect } from "react-router-dom";
import { motion } from "framer-motion";

const Create = () => {
    return ( 
        <Box as={motion.div} initial={{y: 600, opacity: 0.4}} animate={{y: 0, opacity: 1, transition: {type: 'tween', duration: 3}}} maxW='350px'>
            <form method="post" action="/create">
                <FormControl isRequired mb='40px'>
                    <FormLabel>Task name:</FormLabel>
                    <Input type="text" name="title" />
                    <FormHelperText>Enter a descriptive name</FormHelperText>
                </FormControl>
                <FormControl isRequired >
                    <FormLabel>Task description:</FormLabel>
                    <Textarea mb='13px' placeholder="Enter a detailed description for the task..." name="description" />
                </FormControl>
                <FormControl is display='flex' alignItems='center' mb='40px'>
                    <Checkbox name="isPriority" size='lg' colorScheme="purple" />
                    <FormLabel mb='0' ml='10px'>Make this a priority task</FormLabel>
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
     );
}
 
export default Create;

export const createAction = async ({request}) => {
    const data = await request.formData()

    const task = {
        title: data.get('title'),
        description: data.get('description'),
        isPriority: data.get('isPriority') === ''
    }

    console.log(task)

    return redirect('/')
}