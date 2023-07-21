import { Flex, Avatar, Box, AvatarBadge, Icon } from "@chakra-ui/react"
import { VscVerifiedFilled } from 'react-icons/vsc'
import { useEffect, useState, BaseSyntheticEvent, } from "react"

function Messages() {
  const [messages, setMessages] = useState([{
    id: '',
    message: '',
    sender: {
      image: '',
      is_kyc_verified: true,
      self: false,
      user_id: ''
    }
  }])
  const [page, setPage] = useState(0)

  const fetchMoreData = () => {
    fetch('https://qa.corider.in/assignment/chat?page=' + page).then((res) => {
      return res.json()
    }).then(res => {
      res.chats.slice(0).reverse();
      setMessages((prev) => [...prev, ...res.chats])
      setPage((prev) => prev + 1)
    }).catch((err) => {
      console.log(err);
    })
  }
  const handleScroll = (e: BaseSyntheticEvent) => {
    console.log('scrolling', e.target.scrollTop, e.target.scrollHeight, e.target.clientHeight);
    if (e.target.clientHeight - e.target.scrollHeight === e.target.scrollTop) {
      console.log('fetching more data');
      fetchMoreData()
    }
  }

  useEffect(() => {
    fetch('https://qa.corider.in/assignment/chat?page=' + page).then((res) => {
      return res.json()
    }).then(res => {
      setMessages(res.chats.slice(0).reverse())
      setPage((prev) => prev + 1)
    }).catch((err) => {
      console.log(err);

    })
  }, [])


  return (
    <Box
      onScroll={handleScroll}
      flex={1}
      p={4}
      display={'flex'}
      flexDirection={'column-reverse'}
      overflowY={'scroll'}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        }
      }}
    >
      {messages.map(m => {
        return m.sender.self ? (
          <Flex key={m.id} gap={2} w={'90%'} ml={'auto'} my={4} alignSelf={"end"} justifyContent={'flex-end'}>
            <Box w={48} display={'inline'} />
            <Box bg={'#1C63D5'} color={'white'} p={2} borderRadius={12} borderTopRightRadius={0} >
              {m.message}
            </Box>
          </Flex>
        ) : (
          <Flex key={m.id} gap={2} w={'90%'} my={4}>
            <Avatar name={'John Doe'} src={m.sender.image} >
              {
                m.sender.is_kyc_verified &&
                <AvatarBadge boxSize="1em" bg="#white" border={0} >
                  <Icon as={VscVerifiedFilled} color={'#1C63D5'} />
                </AvatarBadge>
              }
            </Avatar>
            <Box bg={'white'} p={2} borderRadius={12} borderTopLeftRadius={0} >
              {m.message}
            </Box>
          </Flex>
        )
      })}
    </Box>
  )
}

export default Messages