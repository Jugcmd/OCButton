import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/tabIcon";
import Home from "../screens/home";
import News from "../screens/news";
import Search from "../screens/search";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: "10%",
          width: "100%",
          borderRadius: 50,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="home" focused={focused} label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="newspaper-variant-multiple" focused={focused} label="News" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="magnify" focused={focused} label="Search" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon iconName="account-circle" focused={focused} label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
