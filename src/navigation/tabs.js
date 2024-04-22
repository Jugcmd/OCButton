import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Login from "../screens/login";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
