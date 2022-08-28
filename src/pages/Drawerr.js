import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Login from './Login';
const Drawer = createDrawerNavigator();

export default function Drawerr() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="LoginField">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Blog" component={Blog}/>
        <Drawer.Screen name="Contact" component={Contact} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
