import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessagesScreen } from '../../screens/MessagesScreen';

const MessagesStack= createStackNavigator();

export const MessagesStackNavigator=()=>{
    return(
        <MessagesStack.Navigator
            screenOptions={{
                headerShown: false
        }}
        >
            <MessagesStack.Screen name='Home' component={MessagesScreen}/>
        </MessagesStack.Navigator>

    )
}