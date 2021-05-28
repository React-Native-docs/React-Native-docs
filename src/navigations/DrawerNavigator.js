import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "~/screens/Home/Home";
import Detail from "~/screens/Detail/Detail";
import DrawerMenu from "~/screens/DrawerMenu/DrawerMenu";
import ModalScreen from "~/screens/ModalScreen/ModalScreen";
import { css } from "@emotion/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      drawerStyle={css`
        width: 80%;
      `}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detail" component={Detail} />
      <Drawer.Screen name="ModalScreen" component={ModalScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
