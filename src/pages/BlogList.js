import { View, Text,ScrollView,StyleSheet,Button,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import {  Card, Paragraph,Appbar } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


import BlogDetails from './BlogDetails';


export default function BlogList() {
    const navigateBlog = useNavigation()
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await fetch('https://brandwizz.in/jobs/brandwizz_admin_api/admin/knowledgefetch.php');
      //let response = await fetch('http://localhost/Brandwizz_admin/admin/knowledgefetch.php');
      let json = await response.json();
      var res = json.data;     
      if (json.status) {
        setBlogList(res)
      }
    })();
  }, []);
  
  return (
    <>
    {/* <View>
        <Appbar style={{ backgroundColor: 'hsl(210,11.11%,96.47%)' }}>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Blog" />
        </Appbar>
      </View> */}
      <ScrollView>
      {
            blogList.map((res)=>
              <Card style={styles.container}>
                    <View key={res.ID}>
                    <Text style={styles.container}>{res.BlogTitle}</Text>
                      <Card.Cover source={{ uri: res.BlogFeatureImage}} key={res.ID}/>
                      
                        <Card.Content>
                            <Paragraph style={styles.container}>
                            {res.BlogSmallContent}
                          </Paragraph>
                          <View style={{marginBottom:10,marginTop:10}}>
                          <Button
                            title="Read More"
                            onPress={() => {
                                navigateBlog.navigate('BlogDetails', {
                                itemId:res.ID,
                                otherParam: 'anything you want here',
                              });
                            }}
                          >Read More</Button>
                          </View>
                        </Card.Content>
                    </View>
              </Card>
        )}
        </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
      marginTop: 15,
      paddingLeft:5,
  }
});