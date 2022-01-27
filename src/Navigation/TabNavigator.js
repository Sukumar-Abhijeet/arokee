import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../Screens/@Tabs/Home/HomeScreen';
import ProfileScreen from '../Screens/@Tabs/Profile/ProfileScreen';
import SettingsScreen from '../Screens/@Tabs/Settings/SettingsScreen';
import App_Theme from "../Configs/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
       screenOptions={{
        tabBarIconStyle: { display: "none" },
        tabBarActiveTintColor: App_Theme.colors.primary,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;