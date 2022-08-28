import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React,{useState,createContext,useContext,useRef} from 'react'
import { TextInput,Button } from 'react-native-paper';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmailVerification({route,navigation}) {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourInput = useRef();
    const fiveInput = useRef();
    const sixInput = useRef();
    // ****************************************
    const[firstDigit,setFirstDigit]=useState('');
    const[secondDigit,setSecondDigit]=useState('');
    const[thirdDigit,setThirdDigit]=useState('');
    const[fourDigit,setFourDigit]=useState('');
    const[fiveDigit,setFiveDigit]=useState('');
    const[sixDigit,setSixDigit]=useState('');
    const [session,setSession] = useState("");

    const newotp =  firstDigit+secondDigit+thirdDigit+fourDigit+fiveDigit+sixDigit;
    const navigateDashboard = useNavigation()
    // *****************set session in async storage**************************
    const setData = async (e) => {
        try {
          await AsyncStorage.setItem('SessionId', e);
          getData();
          alert('EmailVerification--'+session);
          console.log('EmailVerification--'+session);
        } catch (err) {
          console.log(err);
        }
      };
      const getData = async () => {
        try {
          const data = await AsyncStorage.getItem('SessionId');
          setSession(data);
        } catch (err) {
          console.log(err);
        }
      };
    // setData = async (e) => {
    //     try {
    //         await AsyncStorage.setItem('SessionId', e);
    //      } catch (error) {
    //       alert("You got this error from Plates.js: " + error);
    //     }
    //   }
    //   getData= async () => {    
    //     try {
    //       await AsyncStorage.setItem('SessionId', e);
    //     } catch (error) {
    //       alert("You got this error from Plates.js: " + error);
    //     }
    //   }
      
    function email(){
        const url = "https://brandwizz.in/jobs/brandwizz_admin_api/admin/OtpCheck.php";
        const fd = new FormData();
        const EmailId = route.params.EmailAddress;
        fd.append('Email', EmailId);
        fd.append('OTP', newotp);
        Axios.post(url, fd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((res) => {
            
            if(res.data.status == 1){
                const sess = res.data.Email;
                setData(sess);
                // setSession = async (SessionId, sess) => {
                //     try {
                //     await AsyncStorage.setItem('SessionId', sess);
                //     }
                //     catch(error) {
                //     console.log("You got this error: " + error);
                //     }
                // }
            
                // AsyncStorage.getItem('SessionId').then(
                //     (value) =>
                //     alert('value--'+value),
                //     getSession(value),
                //         alert('AfterLoginTabbar--'+session)
                //     );
                 navigateDashboard.navigate("MainPage",{
                    EmailAddress:route.params.EmailAddress,
                });
                 }else{
                     alert("OTP Mismatch");
                 }
          });
    }
    // ******************************************
  return (
    <>
        <View style={{height: '10%',marginTop:20,marginLeft:20}}>
            <Text style={{fontWeight:'bold',fontSize:30,color:'#000000'}}>Welcome to</Text>
            <Text style={{fontWeight:'bold',fontSize:25,color:'#dc3343'}}>Brandwizz</Text>
        </View>
        <Text style={{marginTop:40,marginLeft:20}}>Please enter the otp from your email.</Text>
        <TextInput 
            mode="flat"
            style={styles.DisableInput}
            value={route.params.EmailAddress}
            disabled={true}
            />
            <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold',marginTop:10,}}>Verification Code</Text>
                <Text>Please type the verification code sent to your registered Email Id.</Text>
            </View>
            {/* <TextInput mode="flat" style={styles.DisableInput}  onChangeText={text=>setOtp(text)}/> */}
            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                  <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={firstInput} name='firstDigit' value={firstDigit} onChangeText={text=>{setFirstDigit(text);text ? secondInput.current.focus() : firstInput.current.focus();}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={secondInput}  name='secondDigit' value={secondDigit}
            onChangeText={text=>{setSecondDigit(text);text ? thirdInput.current.focus() : secondInput.current.focus();}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={thirdInput} name='thirdDigit' value={thirdDigit}
            onChangeText={text=>{setThirdDigit(text);text ? fourInput.current.focus() : thirdInput.current.focus();}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={fourInput} name='fourDigit' value={fourDigit}
            onChangeText={text=>{setFourDigit(text);text ? fiveInput.current.focus() : fourInput.current.focus();}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={fiveInput} name='fiveDigit' value={fiveDigit}
            onChangeText={text=>{setFiveDigit(text);text ? sixInput.current.focus() : fiveInput.current.focus();}}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType="number-pad" maxLength={1} ref={sixInput} name='sixDigit' value={sixDigit}
            onChangeText={text=>{setSixDigit(text);text ? firstInput.current.focus() : sixInput.current.focus();}}/>
                </View>
            </View>
            <Button mode='elevated' style={styles.submitButton} onPress={email} >
                Verify
            </Button>
    </>
  )
}
const {width} = Dimensions.get("screen");
const styles = StyleSheet.create({
    DisableInput:{
        width: width - 45,
        height: 50,
        marginLeft:20,
        marginTop:20,
    },
    // otpbox:{
    //     width: width ,
    //     height: 50,
    //     marginLeft:20,
    //     marginTop:10,
    // },
    submitButton:{
        marginTop:10,
        paddingLeft:width - 100,
      },
      otpContainer: {
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop:20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        
      },
      
      otpText: {
        height:25,
        fontSize: 25,
        color: 'BLACK',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor:'white',
        borderBottomColor:'white',
    },
      
})