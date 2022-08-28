import {Button } from 'react-native'
import React,{useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Login from './Login';
import AfterLoginTabbar from './AfterLoginTabbar';
import AfterLoginDrawer from './AfterLoginDrawer';

const Tab = createBottomTabNavigator();
function TabBar({navigation}) {
  const [session,getSession]=useState();
  AsyncStorage.getItem('SessionId').then(
    (value) =>
      getSession(value),
  );
  // alert('tabbar---'+session);
    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
  return (
    <>
        {/* <Tab.Navigator>
            <Tab.Screen name="About" component={About} options={{headerRight: () => (
              <Button onPress={()=>handleNavigation("Login")} title="Login" color="#00cc00"/>),
                }}
            />
            <Tab.Screen name="Contact" component={Contact} options={{headerRight: () => (
              <Button onPress={() => alert('This is a button!')} title="Login" color="#00cc00"/>),
                }}/>
            <Tab.Screen name="Blog" component={Blog} options={{headerRight: () => (
              <Button onPress={() => alert('This is a button!')} title="Login" color="#00cc00"/>),
                }}/>
        </Tab.Navigator> */}
        {session == null ? (
             <Tab.Navigator initialRouteName='Login'>
             <Tab.Screen name="Login" component={Login}/>
             <Tab.Screen name="About" component={About}/>
             <Tab.Screen name="Contact" component={Contact} />
             <Tab.Screen name="Blog" component={Blog} />
         </Tab.Navigator>
        ):(
          <>
          <AfterLoginDrawer/>
          {/* <AfterLoginTabbar/> */}
          </>
        )}
       
    </>
  )
}
export default TabBar;