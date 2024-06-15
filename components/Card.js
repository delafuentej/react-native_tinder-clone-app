import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Tile } from '@rneui/themed';
import Layout from '../constants/Layout';

//Tio solve the problem with the height of the bar on various device (iOS especially)=> way to calculate the height of the tab bar as it is displayed on a device
const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 

export const Card = ({pic, title, caption})=>(
    <Tile
        title={title}
        imageSrc={pic}
        caption={caption}
        imageContainerStyle={styles.imageContainer}
        titleStyle={styles.title}
        captionStyle={styles.caption}
        containerStyle={styles.container}
        activeOpacity={0.8}
        featured
    
    />


    
);

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    imageContainer: {
        width: Layout.window.width -30,
        height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
        borderRadius: 20,
        overflow:'hidden',
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 30,
    },
    caption: {
        position: 'absolute',
        left:10,
        bottom:10,
    },
});