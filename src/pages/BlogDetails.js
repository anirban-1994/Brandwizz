import { View, Text,Button,ScrollView,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import {  Card, Title, Paragraph,Appbar } from 'react-native-paper';
function BlogDetails({ route, navigation }) {
    const { itemId } = route.params;
    const [Blog, setBlog] = useState([]);
    const [BlogView, setBlogView] = useState(false);
    const fd = new FormData();
    fd.append('BlogID', JSON.stringify(itemId));

    // *****************************************
    
    var url = 'https://brandwizz.in/jobs/brandwizz_admin_api/admin/BlogView.php?BlogID='+itemId;
    useEffect(() => {
        (async () => {
            setBlogView(false);
          let response = await fetch(url);
          let json = await response.json();
          var res = json.data;     
          if (json.status) {
                setBlog(res)
              setBlogView(true);
          }
        })();
      }, []);
      console.log(Blog);
    // *********************************************

    return (
        <ScrollView>
            <Card style={styles.container} key={Blog.ID}>
              <Card.Cover source={{ uri: Blog.BlogFeatureImage}} key={Blog.ID}/>
                <Card.Content>
                    <Title style={styles.container}>{Blog.BlogTitle}</Title>
                    <Paragraph style={styles.container}>{Blog.BlogContent}</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    }
});

  export default BlogDetails;