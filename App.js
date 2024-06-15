import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainTabBottomNavigator } from './navigation/MainTabBottomNavigator';
import { enableScreens } from 'react-native-screens';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

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
      <View style={styles.container}>
        <MainTabBottomNavigator />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'libre-baskerville-bold',
  },
});
