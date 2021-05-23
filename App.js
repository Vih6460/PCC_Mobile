import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import Title from './src/components/Title/'
import Main from './src/components/Main/'

export default function App() {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Title />
        <Main />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 80
  },
});

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);