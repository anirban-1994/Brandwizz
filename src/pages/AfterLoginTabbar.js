import {Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Logout from './Logout';
import Login from './Login';
const Tab = createBottomTabNavigator();
function AfterLoginTabbar({navigation}) {
  const [session,getSession]=useState();
    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
    // **********************************
    getData= async () => {    
      try {
        const SessionID = await AsyncStorage.getItem('SessionId');
        getSession(SessionID);
      } catch (error) {
        alert("You got this error from Plates.js: " + error);
      }
    }
    
    useEffect(() => {
      getData();
    }, []);
  
    // function sessionGetData(){
    //   AsyncStorage.getItem('SessionId').then(
    //     (value) =>
    //       getSession(value),
    //         alert('AfterLoginTabbar--'+session)
    //       );
    // }
    // **********************************
  return (
    /*
    <>
    {session == null ? (
             <Tab.Navigator initialRouteName='Login'>
          
             <Tab.Screen name="Login" component={Login}/>
             <Tab.Screen name="About" component={About}/>
             <Tab.Screen name="Contact" component={Contact} />
             <Tab.Screen name="Blog" component={Blog} />
         </Tab.Navigator>
        ):(
          <>
              <Tab.Navigator>
                  <Tab.Screen name="About" component={About}/>
                  <Tab.Screen name="Contact" component={Contact}/>
                  <Tab.Screen name="Blog" component={Blog} />
                  <Tab.Screen name="Logout" component={Logout} />
              </Tab.Navigator>
          </>
        )}
    </>
    */
      <>
          <Tab.Navigator>
              <Tab.Screen name="About" component={About}/>
              <Tab.Screen name="Contact" component={Contact}/>
              <Tab.Screen name="Blog" component={Blog} />
              <Tab.Screen name="Logout" component={Logout} />
          </Tab.Navigator>
      </>
  )
}
export default AfterLoginTabbar;