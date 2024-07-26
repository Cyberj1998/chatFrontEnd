import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('52d9f358-b2d6-4a9d-bee4-46677702edcd', props.user.username, props.user.secret)

  return ( 
  <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
  </div>
  )
}

export default ChatsPage