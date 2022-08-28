import { View, Text,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'

export default function Intro2({navigation}) {
    
    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
  return (
    <ImageBackground source={require("../../assets/Images/Intro02.jpg")} style={{width: '100%', height: '100%'}}>
            <Text style={styles.nextButton} onPress={()=>handleNavigation("Intro3")}>Next</Text>
            <Text style={styles.skipButton} onPress={()=>handleNavigation("Dashboard")}>Skip</Text>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    imageStyle: {
        height: '100%',
        width: '100%',
      },
      skipButton: {
        position: 'absolute',
        bottom:20,
        left:15,
        fontWeight: 'bold',
        color:'#000000',
      },
      nextButton:{
        position: 'absolute',
        bottom:20,
        right:15,
        fontWeight: 'bold',
        color:'#000000',
      }
  });