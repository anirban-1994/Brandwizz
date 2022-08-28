import React,{useState,useEffect} from 'react';
import { View,Text,Image,StyleSheet,Dimensions } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const win = Dimensions.get('window');


export default function LoginFields() {
    const navigateVerification = useNavigation()
// ********************************
    const[email,setEmail] = useState("");
   
    const handleSubmit = () =>{
        if(email){
            // *******************************
            var url = 'https://brandwizz.in/jobs/brandwizz_admin_api/admin/EmailVerification.php?Email='+email;
            axios.get(url)
            .then(function (response) {
                if(response.data.status == 1){
                    navigateVerification.navigate("EmailVerification",{
                        EmailAddress:email,
                    })
                }else{
                    alert("Email id not Register with us");
                }
            })
            // *********************************
        }else{
            alert("feilds not fillup")
        }
    }

// ************************************
    return (
    <View style={{ height: '100%',marginTop:20 }}>
        <View>
        <Image
            style={{
                width: win.width/2,
                resizeMode: "contain",
                alignSelf: "center",
            }}
            source={require("../../assets/Images/logo.png")}
            resizeMode="contain"
            />
        </View>
        <View style={{height: '10%',marginTop:20,marginLeft:20}}>
            <Text style={{fontWeight:'bold',fontSize:30,color:'#000000'}}>Welcome to</Text>
            <Text style={{fontWeight:'bold',fontSize:25,color:'#dc3343'}}>Brandwizz</Text>
        </View>
        <View><Text style={{marginTop:50,marginLeft:20,marginBottom:20}}>Please enter the register email id to login</Text></View>
        <View style={{marginLeft:20}}>
            <TextInput 
            mode="outlined"
            name='email'
            label="Enter Register Email id"
            style={styles.input}
            value={email}
            onChangeText={text=>setEmail(text)}
            />
           <Button mode='elevated' style={styles.submitButton} onPress={()=>handleSubmit()}>
                Next
            </Button>
        </View>
    </View>
  )
}
const {width} = Dimensions.get("screen");
const styles = StyleSheet.create({
    imageStyle: {
        height: '100%',
        width: null,
        resizeMode: 'contain',
       
      },
      Title: {
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
      },
      input:{
        width: width - 60,
        height: 50,
      },
      submitButton:{
        marginTop:10,
        paddingLeft:width - 180,
      }
  });