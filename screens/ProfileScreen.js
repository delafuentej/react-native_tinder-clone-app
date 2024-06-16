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
            <Text style={styles.desc}>{hobbys}</Text>
            <Divider style={styles.divider}/>
            <Text style={styles.desc}>Find me on Social here</Text>
            <View style={styles.socialLinks}>
                <FontAwesome name='facebook-square' size={24} color="black" />
                <FontAwesome name='instagram' size={24} color="black" />
                <FontAwesome name='snapchat-square' size={24} color="black" />
            </View>


           
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
      color: '#5E5E5E',
      alignSelf: 'flex-start',
      marginLeft: 30,
    },
    desc: {
      color: '#5E5E5E',
      alignSelf: 'flex-start',
      marginTop: 5,
      marginHorizontal: 30,
      fontSize: 14,
    },
    divider: {
      backgroundColor: '#C0C0C0',
      width: Layout.window.width - 60,
      margin: 20,
    },
    socialLinks: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row',
      width: Layout.window.width,
      marginLeft: 40,
    },
    iconContainer: {
      paddingHorizontal: 8,
      paddingVertical: 15,
    },
  })