import * as React from 'react';
import {  Card, Title, Paragraph,Appbar } from 'react-native-paper';
import { View,Text,StyleSheet,Image,ScrollView } from 'react-native'

export default function About() {
  return (
    <View>
        <View>
            {/* <Appbar style={{ backgroundColor: 'hsl(210,11.11%,96.47%)' }}>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title="About" />
                
            </Appbar> */}
        </View>
        <ScrollView>
        <Card style={styles.container}>
            <Card.Cover source={require('../../assets/Images/banner.webp')} />
            <Card.Content>
                <Title style={styles.container}>We add magic in the way brands tell their story,
and that makes all the difference!</Title>
<Paragraph style={styles.container}>Magic is a confluence of science and art. Magicians use their wizardry to stimulate the senses that make the audience perceive things differently.
                {'\n'}
                    At Brandwizz, we blend technology & creativity to manoeuvre brand experiences that help clients achieve their marketing goals.
                    {'\n'}
                    For over a decade, we have been helping businesses with website design, digital marketing, branding and advertising services.
                    {'\n'}
                    Guided by our core values of knowledge and excellence, we bring together a talented team of young, energetic professionals.
                    {'\n'}
                    Guided by our core values of knowledge and excellence, we bring together a talented team of young, energetic professionals.
                    {'\n'}
                    Guided by our core values of knowledge and excellence, we bring together a talented team of young, energetic professionals.
                    {'\n'}
                    Guided by our core values of knowledge and excellence, we bring together a talented team of young, energetic professionals.
                    {'\n'}
                    Guided by our core values of knowledge and excellence, we bring together a talented team of young, energetic professionals.
                    </Paragraph>
            </Card.Content>
        </Card>
        </ScrollView>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    }
});