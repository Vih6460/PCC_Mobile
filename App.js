import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/Login/'
import PainelDiario from './src/pages/PainelDiario/'

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="PainelDiario" component={PainelDiario}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}