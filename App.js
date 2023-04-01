import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';


import { HomeScreen as HomeScreen001 } from "./screens/day001/HomeScreen";
import { SignUpScreen as SignUpScreen001 } from "./screens/day001/SignUpScreen";


const day001Stack = createNativeStackNavigator();
const Day001StackScreen = () => (
  <day001Stack.Navigator>
    <day001Stack.Screen name="Home" component={HomeScreen001} options={{ headerShown: false }} />
    <day001Stack.Screen name="SignUp" component={SignUpScreen001} options={{ headerShown: false }} />
  </day001Stack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={'Index'}>
    <RootStack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
    <RootStack.Screen name="Day001" component={Day001StackScreen} options={{ headerShown: false }} />
  </RootStack.Navigator>
);

const IndexButton = ({ text, onPress = undefined }) => { 
  return (
    <TouchableOpacity
      style={{backgroundColor: '#3498db', padding: 12, borderRadius: 8, marginBottom: 5}}
      onPress={onPress}>
      <Text style={{color: '#fff'}}>{text}</Text>
  </TouchableOpacity>
  )
}


const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>React Native Space</Text>
    </View>
  );
};

const IndexScreen = ({ navigation }) => { 
  const navigateToStack = (stack, screen) => {
    navigation.navigate(stack, { screen });
  }
  return (
    // header
    <View style={{ flex: 1 }}>
      <View
        style={{ paddingVertical: 20, paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold',  padding: 60}}>
          Daily UI Design Challenge
        </Text>
      </View>

      {/* body */}

      <ScrollView style={{ padding: 12 }}>
        <IndexButton
          text={"DAY 001: Sign Up"}
          onPress={() => navigateToStack("Day001", "Home")}
        />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  if (isLoading) return <LoadingScreen />;
  return (
        <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

