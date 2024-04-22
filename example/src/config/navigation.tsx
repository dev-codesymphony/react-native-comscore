import React from "react";
import About from "../exampleScreens/About";
import Contact from "../exampleScreens/Contact";
import Home from "../exampleScreens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
