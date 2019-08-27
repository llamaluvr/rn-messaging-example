import React, { Component } from 'react';
import { SafeAreaView, Platform, KeyboardAvoidingView, StatusBar } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { sortBy } from 'lodash';
import { GiftedChat } from 'react-native-gifted-chat';
import { LoadingWrapper } from '../common';

/**
 * An example of using GiftedChat, a pretty great chat UI
 * for React Native. I use this in prod code!
 */
class Chat extends Component {
  _onSendMessage = message => {
    this.props.onSendMessage(message[0].text);
  };

  render() {
    const { messages } = this.props;

    const giftedChatMessages = sortBy(messages, m => m.date)
      .reverse()
      .map(message => ({
        _id: message.id,
        text: message.text,
        createdAt: message.date,
        user: {
          _id: message.userType,
          name: message.user,
        },
      }));

    // We use the KeyboardSpacer for Android only because Gifted Chat already has good keyboard handling for
    // iOS (as long as we account for the iPhone X home bar offset).
    // In gifted chat, it assumes windowSoftInputMode="adjustResize", which doesn't work by default with Expo's
    // Android configuration. Long story, check out https://github.com/FaridSafi/react-native-gifted-chat#notes-for-android
    // for more.
    const baseView = (
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={giftedChatMessages}
          onSend={this._onSendMessage}
          user={{
            _id: 'you',
          }}
          bottomOffset={getBottomSpace()}
          renderLoading={() => <LoadingWrapper isLoading />}
        />
      </SafeAreaView>
    );

    // iOS keyboard avoidance is handled by GiftedChat, so don't need this for iOS
    if (Platform.OS === 'android') {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={
            StatusBar.currentHeight + 56 /* accounts for status plus navbar*/
          }>
          {baseView}
        </KeyboardAvoidingView>
      );
    }

    return baseView;
  }
}

export default Chat;
