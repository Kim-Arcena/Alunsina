import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Alert} from "react-native";
import { firebase } from "./config";

import Registration from "./src/Registration";
import Login from "./src/Login";
import Dashboard from "./src/Dashboard";

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
    return subscriber; // unsubscribe on unmount
  }, []);
  
  if (initializing) return null;

  if (!user) {
    return (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Registration" component={Registration} />
        </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

