import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
 import { Avatar, ListItem } from '@rneui/themed';
// import { ListItem } from 'react-native-elements';
import { Messages } from '../constants/Messages';

export const MessagesScreen=()=>{
    return(
        <SafeAreaView>
            <ScrollView>
                {/* {Messages.map((user, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: user.pic, size: 'large' }}
                        title={user.title}
                        titleStyle={styles.title}
                        subtitle={user.message}
                        subtitleStyle={styles.subtitle}
                        chevron
                        
            />
           ))} */}


                {Messages.map((user, i)=> (
                    <ListItem 
                    
                    key={i}
                    bottomDivider
                    containerStyle={styles.items}
                    >
                 
                        <Avatar
                      
                        rounded
                        size={70}
                        source={user.pic}
                        containerStyle={styles.imgAvatar}
                       
                    
                        />
                        <ListItem.Content >
                            <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
                        </ListItem.Content>


                        <ListItem.Chevron containerStyle={styles.chevron} color="#20C563" />

                    </ListItem>
                     
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    items: {
        backgroundColor:'black',
    },
    title: {
        fontSize: 24,
        color: '#20C563',
        fontWeight:'bold',
      },
      subtitle: {
        color: 'white',
      },
      imgAvatar:{
        
        backgroundColor: 'black',

      },
      chevron: {
        fontWeight:'800',
      }

})