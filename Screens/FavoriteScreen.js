import React, { useEffect, useState} from 'react';
import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {useFavoriteContext} from './Components/FavoriteContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';


const FavoriteScreen = () => {
  const { favorites } = useFavoriteContext();
  const [favoriteDetails, setFavoriteDetails] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchFavoriteDetails = async () => {
      try {
        const details = await Promise.all(
          favorites.map(async (recipe) => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
            return response.data.meals[0];
          })
        );
        console.log('Details:', details); // Add this line to debug
        // Use functional update to ensure correct state update
        setFavoriteDetails((prevDetails) => [...prevDetails, ...details]);
      } catch (error) {
        console.error('Error fetching favorite details:', error);
      }
    };

    fetchFavoriteDetails();
  }, [favorites]);

  return (
    <ImageBackground
    source={{
      uri: 'https://cdn3.vectorstock.com/i/1000x1000/53/97/fluid-shape-background-with-liquid-dynamic-vector-25855397.jpg',
    }}
    blurRadius={40}
    style={{ flex: 1, position: 'relative' }}
  >
    <StatusBar style="dark" />
      <ScrollView>
      {favoriteDetails && favoriteDetails.length > 0 ? (
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#363636",
            textAlign: "left",
            marginTop: 70,
            marginLeft: 10,
            marginBottom: 15,
          }}>
            Favorite Recipes
          </Text>
        ) : (
          <Text style={{
            fontSize: 15,
            color: "#363636",
            textAlign: "center",
            marginTop: 400,
          }}>
            Sorry, you don't have saved recipes
          </Text>
        )}
        {favoriteDetails.map((recipe) => (
          <TouchableOpacity
            key={recipe.idMeal}
            onPress={() => navigation.navigate('RecipeDetail', { idMeal: recipe.idMeal, strMealThumb: recipe.strMealThumb })}
          >
            <View style={{ padding: 10, backgroundColor: '#fff', margin: 10, borderRadius: 10 }}>
            <Image
              source={{ uri: recipe.strMealThumb }}
              style={{ width: wp(90), height: hp(20), borderRadius: 10, marginBottom: 10 }}
            />
            <Text style={{ fontSize: hp(2), color: '#363636' }}>{recipe.strMeal}</Text>
              
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default FavoriteScreen;