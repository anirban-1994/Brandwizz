import { View, Text } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';



export default function Logout() {
    const navigateDashboard = useNavigation();
    const [session,getSession] = useState("");
    AsyncStorage.getItem('SessionId').then(
        (value) =>
          getSession(value),
      );
      AsyncStorage.removeItem('SessionId')
      console.log('logout---'+session);
      navigateDashboard.navigate("TabBar")
  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}