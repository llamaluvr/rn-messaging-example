import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import Chat from '../../components/chat';
import { LoadingWrapper } from '../../components/common';
import { messageRepository } from '../../stores/instances';

/**
 * A child screen to be pushed onto the stack when an inbox
 * item is tapped.
 * Shows the chat window.
 * This screen component loads just the messages for the current chat
 * based on the navigation params and passes them along to the
 * Chat UI component.
 */
function ChatScreen({ navigation }) {
  // setup state - list of inbox items and
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // refresh - called on first load and whenever you pull down on the list
  const onRefresh = useCallback(() => {
    async function onRefreshAsync() {
      setIsLoading(true);
      const messages = await messageRepository.getMessages(navigation.state.params.messageId);
      setMessages(messages);
      setIsLoading(false);
    }
    onRefreshAsync();
  }, []);

  useEffect(onRefresh, []);

  return (
    <View style={{ flex: 1 }}>
      <LoadingWrapper isLoading={isLoading}>
        <Chat
          messages={messages}
          onSendMessage={message => {
            const newMessages = messages.slice();
            newMessages.push({
              id: messages.length,
              userType: 'you',
              text: message,
              date: new Date(),
              user: 'Your Name',
            });
            setMessages(newMessages);
          }}
        />
      </LoadingWrapper>
    </View>
  );
}

ChatScreen.navigationOptions = () => ({
  title: 'Chat',
});

export default ChatScreen;
