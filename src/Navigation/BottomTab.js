import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Routes from "../component/Routes";
import Icon from "react-native-vector-icons/Ionicons";
import Course from "../screens/Course";
import Events from "../screens/Events";
import Tools from "../screens/Tools";
import Mentors from "../screens/Mentors";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === Routes.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === Routes.EVENTS) {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === Routes.COURSE) {
            iconName = focused ? "library-sharp" : "library-outline";
          } else if (route.name === Routes.TOOLS) {
            iconName = focused ? "hammer-sharp" : "hammer-outline";
          } else if (route.name === Routes.MENTOR) {
            iconName = focused ? "people-sharp" : "people-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name={Routes.HOME_TAB} component={Home} />
      <Tab.Screen name={Routes.EVENTS} component={Events} />
      <Tab.Screen name={Routes.COURSE} component={Course} />
      <Tab.Screen name={Routes.TOOLS} component={Tools} />
      <Tab.Screen name={Routes.MENTOR} component={Mentors} />
      {/* <Tab.Screen
        name={Routes.SETTINGS}
        component={Settings}
        options={{ title: "Settings" }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
