import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Alert} from "react-native";
import { firebase } from "./config";
import { LinearGradient } from 'expo-linear-gradient';

import Registration from "./src/Registration";
import Login from "./src/Login";
import Dashboard from "./src/Dashboard";
import SplashScreen from "./src/SplashScreen";
import AddFundraiser from "./src/AddFundraiser";
import CheckoutScreen from "./src/CheckoutScreen";
import SpecificArticle from "./src/SpecificArticle";

const Stack = createStackNavigator();



const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;  
  }, []);
  
  if (initializing) return null;

  if (!user) {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Registration" component={Registration} />
        </Stack.Navigator>
    );
  }
  else {
    return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
      <Stack.Screen options={{headerShown: false}} name="AddFundraiser" component={AddFundraiser} />
      <Stack.Screen options={{headerShown: true}} name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen options={{headerShown: false}} name="SpecificArticle" component={SpecificArticle} />
    </Stack.Navigator>
  )};
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

