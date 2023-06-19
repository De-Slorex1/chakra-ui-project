import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, SimpleGrid,  Heading, Card, CardHeader, CardBody, CardFooter, Text, Flex, Button, HStack, Divider, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";

const data = [
    {
        id: 1,
        title: "Fix the number",
        description: "There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices",
        author: "Mario",
        img: "https://unsplash.com/photos/pR56itEjhyI"
    },
    {
        id: 2,
        title: "Add links to the footer",
        description: "The footer is currently empty, we need to add some links to important pages on the site",
        author: "Yoshi",
        img: "https://unsplash.com/photos/xioKwVlp5jE"
    },
    {
        id: 3,
        title: "Update the contact form",
        description: "The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.",
        author: "Peach",
        img: "https://unsplash.com/photos/xioKwVlp5jE"
    },
    {
        id: 4,
        title: "Improve the site's performance",
        description: "The site is currently running slow. We need to optimize images and minify css and javascript to improve the site's loading speed.",
        author: "Mario",
        img: "https://unsplash.com/photos/f7WFVDoQ0h4"
    },
    {
        id: 5,
        title: "Add social media links",
        description: "There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.",
        author: "Mario",
        img: "/img/mario.png"
    },
    {
        id: 6,
        title: "Implenent a search feature",
        description: "The site does not have a search feature, We need to add a  the homepage. It is not displaying correctly on mobile devices",
        author: "Mario",
        img: "/img/mario.png"
    },
    {
        id: 7,
        title: "Fix the number",
        description: "There is an issue with the navbar on the homepage. It is not displaying correctly on mobile devices",
        author: "Mario",
        img: "https://unsplash.com/photos/pR56itEjhyI"
    },
    {
        id: 8,
        title: "Add links to the footer",
        description: "The footer is currently empty, we need to add some links to important pages on the site",
        author: "Yoshi",
        img: "https://unsplash.com/photos/xioKwVlp5jE"
    },
    {
        id: 9,
        title: "Update the contact form",
        description: "The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.",
        author: "Peach",
        img: "https://unsplash.com/photos/xioKwVlp5jE"
    },
    {
        id: 10,
        title: "Improve the site's performance",
        description: "The site is currently running slow. We need to optimize images and minify css and javascript to improve the site's loading speed.",
        author: "Mario",
        img: "https://unsplash.com/photos/f7WFVDoQ0h4"
    },
    {
        id: 11,
        title: "Add social media links",
        description: "There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.",
        author: "Mario",
        img: "/img/mario.png"
    },
    {
        id: 12,
        title: "Implenent a search feature",
        description: "The site does not have a search feature, We need to add a  the homepage. It is not displaying correctly on mobile devices",
        author: "Mario",
        img: "/img/mario.png"
    }
]


const Dashboard = () => {
    return (
        <SimpleGrid p='15px' columns={4} spacing={10} minChildWidth='250px'>
            {data.map(task => (
                <Card 
                as={motion.div}
                initial={{
                    y: 600,
                    x: 0,
                    opacity: 0
                }} 
                animate={{
                    y: 0,
                    x: 0,
                    transition: {
                        duration: 4,
                        type: 'tween'
                    },
                    opacity: 1
                }}
                borderTop='8px' 
                borderColor='purple' 
                key={task.id}>
                    <CardHeader>
                        <Flex gap='2'>
                            <HStack spacing={5}>
                            <Avatar src={task.img} size='sm' />
                            <Box>
                                <Heading as='h3' fontSize='16px' size='sm'>{task.title}</Heading>
                                <Text fontSize='14px'>By {task.author}</Text>
                            </Box>
                            </HStack>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize='14px'>{task.description}</Text>
                    </CardBody>
                    <CardFooter>
                        <HStack spacing={3}>
                            <Button variant='ghost' leftIcon={<ViewIcon />}>watch</Button>
                            <Button variant='ghost' leftIcon={<EditIcon />}>comment</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
   )
}
export default Dashboard;
