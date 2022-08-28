
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Intro1 from '../pages/Intro1';
import Intro2 from '../pages/Intro2';
import Intro3 from '../pages/Intro3';
import Intro4 from '../pages/Intro4';
import Intro5 from '../pages/Intro5';
import Dashboard from '../pages/Dashboard';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator  mode="modal">
            <Stack.Screen name="Intro1" component={Intro1} options={{headerShown: false}}/>
            <Stack.Screen name="Intro2" component={Intro2} options={{headerShown: false}}/>
            <Stack.Screen name="Intro3" component={Intro3} options={{headerShown: false}}/>
            <Stack.Screen name="Intro4" component={Intro4} options={{headerShown: false}}/>
            <Stack.Screen name="Intro5" component={Intro5} options={{headerShown: false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}