import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Logout from './Logout';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function AfterLoginDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation={false}>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Blog" component={Blog}/>
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
