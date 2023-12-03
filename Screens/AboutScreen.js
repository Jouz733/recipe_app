import React from "react";
import { View, Text, ScrollView, Image, StatusBar, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AboutScreen = () => {
  return (
    /* Background style */
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        blurRadius={40}
        source={{
          uri:
            "https://cdn3.vectorstock.com/i/1000x1000/53/97/fluid-shape-background-with-liquid-dynamic-vector-25855397.jpg",
        }}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <StatusBar style="dark" />
      <ScrollView

        
showsVerticalScrollIndicator={false}

        
contentContainerStyle={{

          
justifyContent: "center",
          alignItems: "center",
          paddingBottom: 50,
        }}
        style={{ paddingTop: 14, paddingHorizontal: 20 }}
      >
        <View style={{ flex: 1 }}>
  <View
    className="bg-white shadow-nd rounded-2xl p-50"
    style={{ flex: 1, width: "80%", padding: 20, justifyContent: "center", alignItems: "center", marginTop:180 }}
  >
     <View style={{ alignItems: 'center' }}>    
        <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f14d7270-81d1-4d82-8bdf-410bcd808f52/dgfsm1k-a6db2c04-1392-4797-917a-784de4bc09f3.png/v1/fit/w_828,h_466/sdas_by_histoire_chan_dgfsm1k-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjE0ZDcyNzAtODFkMS00ZDgyLThiZGYtNDEwYmNkODA4ZjUyXC9kZ2ZzbTFrLWE2ZGIyYzA0LTEzOTItNDc5Ny05MTdhLTc4NGRlNGJjMDlmMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YJjFpC16pOc2DRbawD6nRpDfgkuyVV6M5w40KzHa6vk' }}
         style={{ height: hp(10), width: hp(25) }} />
    </View>
    <Text
      style={{
        fontSize: 12,
        fontWeight: "bold",
        color: "#363636",
        textAlign: "center",
        marginBottom: 10,
        
      }}
    >
      Hello! We are computer science students from CS1C at the
      University of the East, currently in our second year. We developed
      this recipe app, "Castronomique," for educational and
      project-related purposes only, specifically for our
      Object-Oriented Programming subject. All rights are reserved for
      the APIs and images used in this application. Thank you.
    </Text>
    <Text  style={{
        fontSize: 13,
        fontWeight: "bold",
        color: "#363636",
        textAlign: "justify",
        marginBottom: 10,
      }}>Group 2 Members</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", }}>AZUPARDO, CRYSZEL</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", }}>RIVERA, JOUIELYN</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", }}>JIMENEZ, ALEXANDRA</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", }}>SALAZAR, PAUL</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", }}>SANTIAGO, BUEN</Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#363636", textAlign: "center", marginBottom: 10 }}>RUIZ, ADRIAN</Text>
      
   
    <View style={{ alignItems: 'center' }}>    
        <Image source={{ uri: 'https://media4.giphy.com/media/WRXNJYnmTfaCUsU4Sw/giphy.gif?cid=82a1493b622fsm3351uq3828pm4ih0k7aiw2vkhakixstykp&ep=v1_gifs_search&rid=giphy.gif&ct=s' }}
         style={{ height: hp(20), width: hp(20) }} />
    </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;