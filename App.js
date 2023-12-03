import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import WelcomeScreen from './Screens/WelcomeScreen';
import CustomDrawer from './Screens/Components/CustomDrawer';
import { FaceSmileIcon,HeartIcon, HomeIcon } from 'react-native-heroicons/outline';
import HomeScreen from './Screens/HomeScreen';
import FavoriteScreen from './Screens/FavoriteScreen';;
import AboutScreen from './Screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecipeDetailScreen from './Screens/RecipeDetailScreen';
import { FavoriteProvider } from './Screens/Components/FavoriteContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function AuthDrawer() {
  return ( 
  <Drawer.Navigator  drawerContent= {props => <CustomDrawer {...props}/>}screenOptions={{
    headerShown: false,
    drawerActiveBackgroundColor:'#FEC603',
    drawerActiveTintColor: '#fff',
    drawerInactiveTintColor: '#333',
    drawerLabelStyle: {
      marginLeft: -25,
      fontSize:15,
    },
  
  }}>
    <Drawer.Screen name="Home" component={HomeScreen} options={{
      drawerIcon: ({color}) => (
        <HomeIcon name="home-outline" size={22} color={color}/>
      )
    }} />
    <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
      drawerIcon: ({color}) => (
        <HeartIcon name="heart-outline" size={22} color={color}/>
      )
    }} />
    <Drawer.Screen name="About Us" component={AboutScreen} options={{
      drawerIcon: ({color}) => (
        <FaceSmileIcon name="About-outline" size={22} color={color}/>
      )
    }} />
  </Drawer.Navigator> 
);
}
  
  function App() {
    return (
      <FavoriteProvider>
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
       <Stack.Screen name="AuthDrawer" component={AuthDrawer} options={{ headerShown: false }} />
       <Stack.Screen name="RecipeDetail" options={{presentation: 'fullScreenModal', headerShown: false }} component={RecipeDetailScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      </FavoriteProvider>
    );
  }                                     
export default App;