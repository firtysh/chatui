import { Flex, Spacer, Box, IconButton } from '@chakra-ui/react'
import {FiArrowLeft} from 'react-icons/fi'
import {FaRegPenToSquare} from 'react-icons/fa6'
function NavigationHeader() {
    return (
        <Flex alignItems={'center'} p={4}>
            <Box fontWeight={'bold'} fontSize={'xl'} mr={2}>
                <FiArrowLeft />
            </Box>
            <Box fontWeight={'bold'} fontSize={'xl'} >
                <h1>Trip 1</h1>
            </Box>
            <Spacer />
            <IconButton  colorScheme={'#FAF9F4'} icon={<FaRegPenToSquare/>} isRound={true} fontSize={'xl'} aria-label='' variant={'ghost'}/>
        </Flex>
    )
}

export default NavigationHeader