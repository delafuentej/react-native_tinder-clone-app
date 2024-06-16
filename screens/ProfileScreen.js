import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import { Divider } from '@rneui/themed';
import Layout from '../constants/Layout';
import {HomeScreenPics} from '../constants/HomeScreenPics';
import { randomNumber } from '../utils/randomNumber';

//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';//<FontAwesome name={name} size={24} color="black" /> name='facebook-square' / 'snapchat-square' / 'instagram'


const randomIndex = randomNumber(0, HomeScreenPics.length -1);
// console.log('randomIndex', randomIndex);
 const {pic, title, profession, hobbys} = HomeScreenPics[randomIndex] || {};
 console.log('pic', pic)
 console.log('title', title)



export const ProfileScreen=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image
                    source={pic}
                    style={styles.image}
                />
             </View>

            <Text h4 style={styles.name}>{title}</Text>
            <Text style={styles.desc}>{profession}</Text>
            <Divider style={styles.divider}/>
            <Text style={styles.text}>{hobbys}</Text>
            <Divider style={styles.divider}/>
            <Text style={styles.textSocial}>Find me on Social here</Text>
            <View style={styles.socialLinks}>
                <FontAwesome style={styles.icon} name='facebook-square' size={60} color="gray" />
                <FontAwesome style={styles.icon} name='instagram' size={60} color="gray" />
                <FontAwesome style={styles.icon} name='snapchat-square' size={60} color="gray" />
            </View>


           
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
    },
    imageContainer: {
      margin: 20,
    },
    image: {
      width: Layout.window.width - 60, // device width - some margin
      height: Layout.window.height / 2 - 60, // device height / 2 - some margin
      borderRadius: 20,
    },
    name: {
      color: '#20C563',
      alignSelf: 'flex-start',
      marginLeft: 30,
      fontSize:30,
      fontWeight:'bold',
     
    },
    text: {
      fontSize:14,
      textAlign: 'center',
      color: 'white',
    
    },
    textSocial: {
      textAlign: 'center',
      color: 'white',
      fontSize:30,
    },
      desc: {
      color: '#20C563',
      alignSelf: 'flex-start',
      marginTop: 5,
      marginHorizontal: 30,
      fontSize: 20,
    
      
    },
    divider: {
      backgroundColor: '#C0C0C0',
      width: Layout.window.width - 60,
      margin: 20,
    },
    socialLinks: {
      marginTop:0,
      flex: 1,
      justifyContent:"space-between",
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: 20,
      width:Layout.window.window,
      
    },
    icon:{
      marginRight:20,
    }
  })