import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MainTabBottomNavigator } from './navigation/MainTabBottomNavigator';
import { enableScreens } from 'react-native-screens';
import Layout from './constants/Layout';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 

//to improve performance
enableScreens();

// to prevent the splash-screen from auto-hiding
SplashScreen. preventAutoHideAsync();

//google-fonts
const getFonts=()=> Font.loadAsync({
  'libre-baskerville-bold': require('./assets/fonts/LibreBaskerville-Bold.ttf'),
  'libre-baskerville-regular-italic': require('./assets/fonts/LibreBaskerville-Italic.ttf'),
  'libre-baskerville-regular': require('./assets/fonts/LibreBaskerville-Regular.ttf')
});

export default function App() {
  const[fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    const loadResourcesAndDataAsync = async()=>{
      try{
        //to loading fonts
        await getFonts();
      }catch(error){
        console.warn(error);
      }finally{
        setFontsLoaded(true);
        //to hide splashScreen
        SplashScreen.hideAsync();
      };
    };
    loadResourcesAndDataAsync();
  },[]);

  if(!fontsLoaded){
    return null;
  }else{
    return (
      
         <MainTabBottomNavigator style={styles.container}/>
      
       
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'libre-baskerville-bold',
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT*6,
 
  
  },
});
