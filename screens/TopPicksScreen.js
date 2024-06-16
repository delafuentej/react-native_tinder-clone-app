import React from 'react';
import {SafeAreaView, ScrollView,  View, StyleSheet} from 'react-native';
import { Tile, Text } from '@rneui/base';
import { TopPicksScreenPics } from '../constants/TopPicksScreenPics';

export const TopPicksScreen=()=>{
    return(
        <SafeAreaView style={styles.container}>
           <ScrollView >
            <Text h2 h2Style={styles.h2Style}>
                Top Picks
            </Text>
            <Text h4 h4Style={styles.h4Style}>
                Featured profiles of the day, picked just for you
            </Text>
            <View style={styles.grid}>
                {TopPicksScreenPics.map(({pic, title, caption}, i)=>(
                    <Tile
                    key={title}
                    title={title}
                     imageSrc={pic}
                     caption={caption}
                     titleStyle={styles.title}
                     captionStyle={styles.caption}
                     activeOpacity={0.9}
                     featured
                    />
                ))}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    display:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black'
    
  },
    h2Style: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#20C563',
    },
    h4Style: {
      textAlign: 'center',
      color: 'white',
    },
    grid: {
      marginTop: 20,
      marginBottom: 20,
    },
    title: {
      position: 'absolute',
      left: 10,
      bottom: 50,
      backgroundColor: '#FFFFFF80',
      marginBottom: -2,
      padding: 10,
      color: 'black',
      fontWeight: 'bold',
      borderRadius:10,
      marginBottom:10,
    },
    caption: {
      position: 'absolute',
      left: 10,
      bottom: 0,
      backgroundColor: '#FFFFFF80',
      color: 'black',
      marginTop: 10,
      padding: 10,
      fontWeight:'bold',
      borderRadius:10,
    },
  })