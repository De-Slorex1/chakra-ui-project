import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {motion} from 'framer-motion'

const Profile = () => {
    return ( 
        <Tabs as={motion.div} initial={{y: 400, opacity: 0}} animate={{y: 0, opacity: 1, transition: {type: 'tween', duration: 3}}}>
            <TabList>
                <Tab _selected={{color: 'white', bgColor: 'purple', borderRadius: '3px'}}>Account Info</Tab>
                <Tab _selected={{color: 'white', bgColor: 'purple', borderRadius: '3px'}}>Task History</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <List spacing={4}>
                        <ListItem color='grey.700' fontSize='14px'>
                            <ListIcon as={EmailIcon} />
                            Email: mario@gmail.com
                        </ListItem>
                        <ListItem color='grey.700' fontSize='14px'>
                            <ListIcon as={ChatIcon} />
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem color='grey.700' fontSize='14px'>
                            <ListIcon as={StarIcon} />
                            Lorem ipsum dolor sit amet consectetur adip.
                        </ListItem>
                    </List>
                </TabPanel>
                <TabPanel>
                    <List>
                        <ListItem fontSize='14px'>
                            <ListIcon color='teal.400' as={CheckCircleIcon} />
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='teal.400' as={CheckCircleIcon} />
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='teal.400' as={CheckCircleIcon} />
                             Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='red.400' as={WarningIcon} />
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='teal.400' as={CheckCircleIcon} />
                             Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='red.400' as={WarningIcon} />
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                        <ListItem fontSize='14px'>
                            <ListIcon color='teal.400' as={CheckCircleIcon} />
                             Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </ListItem>
                    </List>
                </TabPanel>
            </TabPanels>
        </Tabs>
     );
}
 
export default Profile;