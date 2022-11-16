import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import ROUTES from "../component/Routes";
import About from "../screens/About";
import Contact from "../screens/Contact";
import BottomTab from "./BottomTab";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={Home} />
      <Drawer.Screen name={ROUTES.CONTACT} component={Contact} />
      {/* <Drawer.Screen name={ROUTES.ABOUT} component={About} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
