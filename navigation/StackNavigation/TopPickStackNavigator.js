import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TopPicksScreen } from '../../screens/TopPicksScreen';

const TopPicksStack= createStackNavigator();

export const TopPicksStackNavigator=()=>{
    return(
        <TopPicksStack.Navigator
            screenOptions={{
                headerShown: false
        }}
        >
            <TopPicksStack.Screen name='Home' component={TopPicksScreen}/>
        </TopPicksStack.Navigator>

    )
}