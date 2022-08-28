import { View, Text } from 'react-native'
import React,{useState,useEffect, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const StackMainPage = createNativeStackNavigator();

import AfterLoginDrawer from './AfterLoginDrawer';
import AfterLoginTabbar from './AfterLoginTabbar';




export default function MainPage({route,navigation}) {
  const [session,getSession]=useState();
  // ************************************
  const value = route.params.EmailAddress;
  getData= async () => {    
    try {
      const SessionID = await AsyncStorage.getItem('SessionId');
      alert(SessionID);
     } catch (error) {
      alert("You got this error from Plates.js: " + error);
    }
  }

  // ***********************************
      useEffect(() => {
        getData();
      }, []);
    return (
    //   <NavigationContainer independent={true}>
    //     <StackMainPage.Navigator initialRouteName='AfterLoginDrawer'>
    //         <StackMainPage.Screen name="AfterLoginTabbar" component={AfterLoginTabbar} />
    //         <StackMainPage.Screen name="TabBar" component={TabBar} options={{headerShown: false}}/>
    //     </StackMainPage.Navigator>
    // </NavigationContainer>
    <>
      <AfterLoginDrawer/>
      {/* <AfterLoginTabbar/>  */}
    </>
  )
}