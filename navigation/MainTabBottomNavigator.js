import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import from StackNavigation
import { HomeStackNavigator } from './StackNavigation/HomeStack';
import { TopPicksStackNavigator } from './StackNavigation/TopPickStack';
import { MessagesStackNavigator } from './StackNavigation/MessagesStack';
import { ProfileStackNavigator } from './StackNavigation/ProfileStack';
//icons
import Fontisto from '@expo/vector-icons/Fontisto'; // Home: <Fontisto name="tinder" size={24} color="black" />
import FontAwesome from '@expo/vector-icons/FontAwesome';// TopPicks: <FontAwesome name="diamond" size={24} color="black" />
import Ionicons from '@expo/vector-icons/Ionicons';// Messages: <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Profile: <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
//import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Profile: <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />


// to create the BottomTabNavigator
const Tab= createBottomTabNavigator();

export const MainTabBottomNavigator=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=> ({
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) =>{
                        let iconComponent;
                        color= focused ? '#20C563' : 'gray';
                        size= 20;

                        switch(route.name){
                            case 'Home':
                                iconComponent =  <Fontisto name="tinder" size={size} color={color} />;
                                break; 
                            case 'TopPicks':
                                iconComponent = <FontAwesome name="diamond" size={size} color={color} />;
                                break;
                            case 'Messages':
                                iconComponent = <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />;
                                break;
                            case 'Profile':
                                iconComponent = <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />;
                                break;
                            default:
                                break;
                            }
                        return iconComponent;
                    },
                    // to manage the colours of the icons when they are active or inactive.
                    tabBarActiveTintColor: '#20C563',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStackNavigator} />
                <Tab.Screen name="TopPicks" component={TopPicksStackNavigator} />
                <Tab.Screen name="Messages" component={MessagesStackNavigator} />
                <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}