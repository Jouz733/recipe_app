import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor:'#89CFF0'}}>
              <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/01/79/14/58/360_F_179145898_Et02LTCMgFkgTJyYZLTPVGp70kZ2enVi.jpg' }} style={{padding:20}}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/780/780260.png' }} style ={{height:80,width:80,borderRadius:40,marginBottom:10}}/>
                <Text style={{color:"#fff", fontSize:18,fontWeight: 'bold'}}>Looking for something?</Text>
                <Text style={{color:"#fff", }}>You have 100% Love points</Text>
                </ImageBackground>
                <View style ={{flex:1, backgroundColor:'#fff',paddingTop:10}}>
                <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer