import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AnimatedLogo() {
  const pulseValue = useRef(new Animated.Value(1)).current;
  const loadingBarWidth = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.1,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    // Delay before filling the loading bar (20 seconds)
    Animated.sequence([
      Animated.delay(3000),
      Animated.timing(loadingBarWidth, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => {
      
      navigation.navigate('AuthDrawer');
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={{ uri: 'https://images.squarespace-cdn.com/content/v1/547f9563e4b0809df854c099/1623948613836-N2FYLNPMPS0YSTVLU8YY/Mod-Kitchen-dirty.gif?format=2500w' }}
      style={styles.container}
      blurRadius={2}
    >
      <Animated.View style={{ transform: [{ scale: pulseValue }] }}>
        <Image
          source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f14d7270-81d1-4d82-8bdf-410bcd808f52/dgc9osx-c3d6e0f5-f7d2-460a-9a49-41e849616fd9.png/v1/fill/w_1017,h_786/recipe_logo_2_by_histoire_chan_dgc9osx-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTkwIiwicGF0aCI6IlwvZlwvZjE0ZDcyNzAtODFkMS00ZDgyLThiZGYtNDEwYmNkODA4ZjUyXC9kZ2M5b3N4LWMzZDZlMGY1LWY3ZDItNDYwYS05YTQ5LTQxZTg0OTYxNmZkOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.f2LqW3-XeynupqHugs9exSzjrVaT6T19tmzSdFDxhlA',
          }}
          style={styles.logo}
        />
      </Animated.View>
      <View style={styles.loadingBar}>
        <Animated.View
          style={[
            styles.loadingBarFill,
            { width: loadingBarWidth.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) },
          ]}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBar: {
    backgroundColor: '#EA1A7F',
    width: '35%',
    height: 13,
    borderRadius: 13 / 2,
    overflow: 'hidden',
    marginTop: 0,
  },
  loadingBarFill: {
    height: '100%',
    backgroundColor: '#FEC603',
  },
  logo: {
    width: 195,
    height: 170,
    justifyContent: 'center',
  },
  ImageBackground: {
    justifyContent: 'center',
    
  }
});


