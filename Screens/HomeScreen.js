import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import axios from 'axios';
import Categories from './Components/categories';
import Recipes from './Components/recipes';
import { SliderBox } from 'react-native-image-slider-box';

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState('');
  const images = [
    'https://www.bhg.com/thmb/2VGlEoW9h4Xz725BlbL440vBl18=/2606x0/filters:no_upscale():strip_icc()/BHG-sinigang-soup-6822079-1f35a38c232041b98d7415ae3c594e1b.jpg',
    'https://www.seriouseats.com/thmb/xw1krLC9Yh85qx1wl5jw0BPCWHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg',
    'https://wallpapersmug.com/download/3840x2400/ebde76/delicious-pizza-food.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/190313-braised-lamb-shanks-horizontal-1-1553026901.png?crop=1.00xw:0.847xh;0,0.106xh',
    'https://media-cdn2.greatbritishchefs.com/media/cggcxjuk/img83252.jpg',
    'https://www.eatwell101.com/wp-content/uploads/2021/07/Healthy-Chicken-with-Vegetable-Skillet-1.jpg',
];

  useEffect(()=>{
    getCategories();
    getRecipes();
  },[])

  const handleChangeCategory = category=>{
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }
  const handleSearch = async () => {
    if (searchText.trim() === '') {
      Alert.alert('Search Error', 'Please enter a search query.');
    } else {
      try {
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        );
        if (response && response.data && response.data.meals) {
          setMeals(response.data.meals);
        } else {
          Alert.alert('No results', 'No recipes found for the given search query.');
        }
      } catch (err) {
        console.log('error: ', err.message);
      }
    }
  };

  const getCategories = async ()=>{
    try{
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got categories: ',response.data);
      if(response && response.data){
        setCategories(response.data.categories);
      }
    }catch(err){
      console.log('error: ',err.message);
    }
  }
  const getRecipes = async (category="Beef")=>{
    try{
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // console.log('got recipes: ',response.data);
      if(response && response.data){
        setMeals(response.data.meals);
      }
    }catch(err){
      console.log('error: ',err.message);
    }
  }
  return (
    /*Background style*/
    <View className="flex-1 relative">
      <Image blurRadius={40} source={{ uri: 'https://cdn3.vectorstock.com/i/1000x1000/53/97/fluid-shape-background-with-liquid-dynamic-vector-25855397.jpg' }} className="absolute w-full h-full"/>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14"
      >
        
        {/* avatar and bell icon */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginBottom: -13 }}>
        <View  style={{ alignItems: 'center' }}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/780/780260.png' }} style={{ height: hp(6), width: hp(6) }} />
        </View>
        </View>

        {/* Greetings and Punchline */}
        <View style={{ margin: 10, marginBottom: -14 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#363636' }}>
            Hello, <Text style={{ color: '#EA1A7F' }}>Hooman!</Text>
          </Text>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#363636' }}>
            Savor the Moment, One Recipe at a Click!
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#363636' }}>
            Purr-fect for hoomans at <Text style={{ color: '#EA1A7F' }}>Home!</Text>
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#363636' }}>
            Trending recipes you like to try 
          </Text>
        </View>

        {/*image carousel*/}
        <View style={{ marginBottom: 12 }}>
        <SliderBox
        images={images}
        dotColor="#FEC603"
        inactiveDotColor="black"
        dotStyle={{ height: 15, width: 15, borderRadius: 50 }}
        imageLoadingColor="black"
        autoplay={true}
        autoplayInterval={10000}
        circleLoop={true}
        onCurrentImagePressed={(index) => alert(index + 1)}
        firstItem={4}
        paginationBoxVerticalPadding={20}
        imageStyle={{ 
          overflow: 'hidden',}} 
        />
        </View>

        {/* search bar */}
        <View style={{ margin: 10}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: 6,marginTop: -25, marginBottom: -25}}>
            <TextInput
              placeholder="Search any recipe"
              placeholderTextColor="gray"
              style={{ fontSize: 17, flex: 1, marginBottom: 1, paddingLeft: 10 }}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity onPress={handleSearch}>
              <View style={{ backgroundColor: 'white', borderRadius: 50, padding: 12 }}>
                <MagnifyingGlassIcon size={25} strokeWidth={3} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View>
          { categories.length>0 && <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> }
        </View>

        {/* recipes */}
        <View>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  )
}