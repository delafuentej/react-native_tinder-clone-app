import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import { HomeScreen } from '../screens/HomeScreen';
import { TopPicksScreen } from '../screens/TopPicksScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
//icons
import Fontisto from '@expo/vector-icons/Fontisto'; // Home: <Fontisto name="tinder" size={24} color="black" />
import FontAwesome from '@expo/vector-icons/FontAwesome';// TopPicks: <FontAwesome name="diamond" size={24} color="black" />
import Ionicons from '@expo/vector-icons/Ionicons';// Messages: <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Profile: <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // Profile: <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />


// to create the BottomTabNavigator
const Tab= createBottomTabNavigator();

export const MainTabBottomNavigator=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=> ({
                    tabBarIcon: ({focused, color, size}) =>{
                        let iconComponent;

                        switch(route.name){
                            case 'Home':
                                iconComponent =  <Fontisto name="tinder" size={24} color="black" />;
                                break; 
                            case 'TopPicks':
                                iconComponent = <FontAwesome name="diamond" size={24} color="black" />;
                                break;
                            case 'Messages':
                                iconComponent = <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />;
                                break;
                            case 'Profile':
                                iconComponent = <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />;
                                break;
                            default:
                                break;
                            }
                        return iconComponent;
                    },
                    // to manage the colours of the icons when they are active or inactive.
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="TopPicks" component={TopPicksScreen} />
                <Tab.Screen name="Messages" component={MessagesScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}