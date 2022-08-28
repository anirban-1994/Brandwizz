import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from './TabBar';
import Login from './Login';


const Stack = createNativeStackNavigator();



export default function Dashboard() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="TabBar" component={TabBar} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}