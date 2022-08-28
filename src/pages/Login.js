import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginFields from './LoginFields';
import EmailVerification from './EmailVerification';
import MainPage from './MainPage';

const Stack = createNativeStackNavigator();



export default function Login() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="LoginFields" component={LoginFields} options={{headerShown: false}}/>
            <Stack.Screen name="EmailVerification" component={EmailVerification} options={{headerShown: false}}/>
            <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}