import React from 'react';
//SafeAreaView => renders content within the safe area boundaries of a device; should always be set up on screen components or any content in them, and not wrap entire navigators
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Card} from '../components/Card';
import { hsPics } from '../constants/hsPics';
import Swiper from 'react-native-deck-swiper';

export const HomeScreen=()=>{
    return(
        <SafeAreaView style={styles.container}>
           <Swiper
            cards={hsPics}
            renderCard={Card}
            backgroundColor='black'
            cardHorizontalMargin={0}
            stackSize={2} // number of cards show in background
            infinite // keep looping cards infinitely 
           />
        </SafeAreaView>
    )
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    }
})