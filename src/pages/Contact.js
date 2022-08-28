import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Appbar, Paragraph } from 'react-native-paper';
export default function Contact() {


  const [contactList, setContactList] = useState([]);
  
  // ********Contact us details fetch************************
  useEffect(() => {
    (async () => {
      let response = await fetch('https://brandwizz.in/jobs/brandwizz_admin_api/admin/ContactFetch.php');
      //let response = await fetch('http://localhost/Brandwizz_admin/admin/knowledgefetch.php');
      let json = await response.json();
      var res = json.data;     
      if (json.status) {
        setContactList(res)
      }
    })();
  }, []);
  
  // ********************************
  return (
    <>
        {/* <View>
            <Appbar style={{ backgroundColor: 'hsl(210,11.11%,96.47%)' }}>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title="Contact" />
            </Appbar>
        </View> */}
        <View style={styles.container}>
            {/* <Text style={styles.Title}>Brandwizz Communications Private limited</Text> */}
            <Text style={styles.Title}>{contactList.ShortTitle}</Text>
            <Text style={styles.Description}>{contactList.Description}</Text>
            <View style={styles.LocationCon}>
              <Paragraph style={styles.Location}>{contactList.Location}</Paragraph>
            </View>
            <Text style={{marginBottom:10,marginTop:10,textAlign:'center'}}>For any query please contact</Text>
              <View style={{marginBottom:10,textAlign:'center'}}>
                <Text style={{textAlign:'center'}}>Email: {contactList.EmailAddress}</Text>
                <Text style={{textAlign:'center'}}>Phone Number: {contactList.PhoneNo}</Text>
              </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
      marginTop: 15,
  },
  Title:{
    textAlign:'center',
    fontWeight: 'bold',
    color:'#dc3343',
    fontSize: 20 ,
  },
  Description:{
    textAlign:'center',
    marginTop:20,
  },
  LocationCon:{
    width:'100%',
    height : 150,
    backgroundColor:'#707070',
  },
  Location:{
    textAlign:'center',
    marginTop:20,
  }
});
