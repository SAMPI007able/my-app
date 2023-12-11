import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import TaskCreationScreen from "./screens/spoc/TaskCreationScreen";
import ProjectCreationScreen from "./screens/admin/ProjectCreationScreen";
import UnitCreationScreen from "./screens/admin/UnitCreationScreen";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import AdminDashboardScreen from "./screens/admin/DashboardScreen";
import SpocDashboardScreen from "./screens/spoc/DashboardScreen";

const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SpocDashboard"
            component={SpocDashboardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProjectCreation"
            component={ProjectCreationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UnitCreation"
            component={UnitCreationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TaskCreation"
            component={TaskCreationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
