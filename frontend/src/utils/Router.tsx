import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import intro_1 from "../pages/intro/intro_1";
import intro_2 from "../pages/intro/intro_2";
import intro_3 from "../pages/intro/intro_3";


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="intro_1">
        <Stack.Screen
          name="intro_1"
          component={intro_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="intro_2"
          component={intro_2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="intro_3"
          component={intro_3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Router;
