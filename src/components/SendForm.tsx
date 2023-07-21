import { GrAttachment } from 'react-icons/gr'
import { PiPaperPlaneRightBold } from 'react-icons/pi'
import { BiCamera } from 'react-icons/bi'
import { HiOutlineVideoCamera, HiOutlineDocumentText } from 'react-icons/hi'
import { Flex, IconButton, Input, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spacer } from '@chakra-ui/react'

function SendForm() {
    return (
        <Flex alignItems={'center'} m={4} borderRadius={8} px={4} py={2} bg={'white'}>
            <Input placeholder="Type a message" size="lg" variant="unstyled" />
            <Spacer />
            <Popover>
                <PopoverTrigger>
                    <IconButton fontSize={'xl'} icon={<GrAttachment />} aria-label='attachment' isRound={true} variant={'ghost'} />
                </PopoverTrigger>
                <PopoverContent bg={'#008000'} rounded={'full'} w={'-moz-fit-content'}>
                    <PopoverArrow bg={'#008000'} />
                    <PopoverBody >
                        <IconButton color={'white'} fontSize={'xl'} colorScheme={'#008000'} icon={<BiCamera />} aria-label='camera' isRound={true} variant={'ghost'} />
                        <IconButton color={'white'} fontSize={'xl'} colorScheme={'#008000'} icon={<HiOutlineVideoCamera />} aria-label='video' isRound={true} variant={'ghost'} />
                        <IconButton color={'white'} fontSize={'xl'} colorScheme={'#008000'} icon={<HiOutlineDocumentText />} aria-label='document' isRound={true} variant={'ghost'} />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <IconButton fontSize={'xl'} icon={<PiPaperPlaneRightBold />} aria-label='send' isRound={true} variant={'ghost'} />
        </Flex>
    )
}

export default SendForm