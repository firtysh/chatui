import { Flex, Grid, Image, Box,Text, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton, MenuDivider } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlinePeople } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { RiChatDeleteLine } from 'react-icons/ri'

function ChatHeader() {
    return (
        <Flex alignItems={'center'} px={4} borderBottom={"1px"} borderColor={'#E5E5E0'} pb={4}>
            <Grid
                h={'52px'}
                w={'52px'}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={.3}
                rounded={'full'}
                overflow={'hidden'}
            >
                <Image src={'https://i.pravatar.cc/50'} alt={'Avatar'} />
                <Image src={'https://i.pravatar.cc/51'} alt={'Avatar'} />
                <Image src={'https://i.pravatar.cc/52'} alt={'Avatar'} />
                <Image src={'https://i.pravatar.cc/53'} alt={'Avatar'} />
            </Grid>
            <Flex ml={2} direction={'column'}>
                <Box color={"GrayText"}>From <Text color={"black"} fontWeight={"bold"} display={"inline"}>IGI Airport, T3</Text></Box>
                <Box color={"GrayText"}>To  <Text color={"black"} fontWeight={"bold"} display={"inline"}>Sector 28</Text></Box>
            </Flex>
            <Spacer />
            <Menu>
                <MenuButton
                    isRound={true}
                    fontSize={'xl'}
                    colorScheme={"#FAF9F4"}
                    as={IconButton}
                    icon={<BsThreeDotsVertical />}
                    variant={'ghost'}
                />
                <MenuList fontSize={'2xl'}>
                    <MenuItem icon={<MdOutlinePeople />}><Text fontSize={'lg'}>Members</Text></MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<IoCallOutline />}><Text fontSize={'lg'}>Share Number</Text></MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<RiChatDeleteLine />}><Text fontSize={'lg'}>Report</Text></MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default ChatHeader