import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BlogList from './BlogList';
import BlogDetails  from './BlogDetails';

const Stack = createNativeStackNavigator();

function Blog() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="BlogList" component={BlogList} options={{headerShown: false}}/>
        <Stack.Screen name="BlogDetails" component={BlogDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Blog;