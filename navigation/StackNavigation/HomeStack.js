import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/HomeScreen';

const HomeStack= createStackNavigator();

export const HomeStackNavigator=()=>{
    return(
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name='Home' component={HomeScreen}/>
        </HomeStack.Navigator>

    )
}