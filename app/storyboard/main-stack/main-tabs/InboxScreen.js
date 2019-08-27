import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Inbox from '../../../components/inbox';
import { messageRepository } from '../../../stores/instances';

function InboxScreen({ navigation }) {
  // setup state - list of inbox items and
  const [isLoading, setIsLoading] = useState(false);
  const [inboxItems, setInboxItems] = useState([]);

  // refresh - called on first load and whenever you pull down on the list
  const onRefresh = useCallback(() => {
    async function onRefreshAsync() {
      setIsLoading(true);
      const newInboxItems = await messageRepository.getInboxItems();
      setInboxItems(newInboxItems);
      setIsLoading(false);
    }
    onRefreshAsync();
  }, []);

  useEffect(onRefresh, []);

  return (
    <View style={{ flex: 1 }}>
      <Inbox
        messages={inboxItems}
        isLoading={isLoading}
        onRefresh={onRefresh}
        onPressMessage={id => navigation.navigate('chat', { messageId: id })}
      />
    </View>
  );
}

InboxScreen.navigationOptions = () => ({
  title: 'Blah',
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ tintColor }) => <Feather name="inbox" size={32} color={tintColor} />,
});

export default InboxScreen;
