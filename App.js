import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";

import Home from "./src/Home";
import React from "react";
import StartPage from "./src/StartPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage" screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "900"
        }
      }}>
        <Stack.Screen name="StartPage" component={StartPage} options={{title: "Welcome"}}/>
        <Stack.Screen name="Home" component={Home} options={{title: "Inicio"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}