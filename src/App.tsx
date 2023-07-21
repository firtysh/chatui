import { Flex } from "@chakra-ui/react"
import ChatHeader from "./components/ChatHeader"
import NavigationHeader from "./components/NavigationHeader"
import SendForm from "./components/SendForm"
import Messages from "./components/Messages"

function App() {
  return (
    <>
      <Flex direction={'column'} height={'100vh'} >
        <NavigationHeader />
        <ChatHeader />
        <Messages/>
        <SendForm />
      </Flex>
    </>
  )
}

export default App
