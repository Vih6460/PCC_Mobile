import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Title from './src/components/Title/'
import Form from './src/components/Form/'

export default function App() {
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <Title />
          <Form />
        </ScrollView>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    paddingTop: 80
  },
});

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);