import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Title from '../../components/Title/'
import Form from '../../components/Form/'

export default function Login({navigation}) {
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <Title />
          <Form navigation={navigation}/>
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





// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------




// import React from 'react'
// import { View, Text } from 'react-native'

// export default function Login({navigation}){
//     return(
//         <View>
//             <View>
//                 <Text>Login Admin</Text>
//                 <Text 
//                 onPress={()=> navigation.navigate('PainelDiario', {typeUser: 'gerente'})}
//                 >Entar no Painel Diário...</Text>
//             </View>

//             <View style={{marginTop: 20}}> 
//                 <Text>Login Motorista</Text>
//                 <Text 
//                 onPress={()=> navigation.navigate('PainelDiario', {typeUser: 'motorista'})}
//                 >Entar no Painel Diário...</Text>
//             </View>
//         </View>
//     )
// }