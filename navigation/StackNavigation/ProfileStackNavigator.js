import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../../screens/ProfileScreen';

const ProfileStack= createStackNavigator();

export const ProfileStackNavigator=()=>{
    return(
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false
        }}
        >
            <ProfileStack.Screen name='Home' component={ProfileScreen}/>
        </ProfileStack.Navigator>

    )
}