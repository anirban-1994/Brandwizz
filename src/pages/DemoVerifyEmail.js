import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function DemoVerifyEmail() {
  return (
    <View style={styles.otpContainer}>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
    <View style={styles.otpBox}>
      <TextInput
        style={styles.otpText}
        keyboardType="number-pad"
        maxLength={1}
        
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    
    otpContainer: {
      marginHorizontal: 20,
      marginBottom: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    otpBox: {
      borderRadius: 5,
      borderColor: 'GREEN',
      borderWidth: 0.5,
    },
    otpText: {
      fontSize: 25,
      color: 'BLACK',
      padding: 0,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    
    
  });