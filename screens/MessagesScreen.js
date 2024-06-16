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
                    bottomDivider>
                 
                        <Avatar
                        style={styles.imgAvatar}
                        rounded
                        resizeMode='center'
                        source={user.pic}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
                        </ListItem.Content>


                        <ListItem.Chevron color="white" />

                    </ListItem>
                     
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#3F3F3F',
      },
      subtitle: {
        color: '#A5A5A5',
      },
      imgAvatar:{
        height:50,
        width:50,

      }
})