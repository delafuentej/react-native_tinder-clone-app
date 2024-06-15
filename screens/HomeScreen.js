import React from 'react';
//SafeAreaView => renders content within the safe area boundaries of a device; should always be set up on screen components or any content in them, and not wrap entire navigators
import {SafeAreaView, Text, View} from 'react-native';


export const HomeScreen=()=>{
    return(
        <SafeAreaView>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}