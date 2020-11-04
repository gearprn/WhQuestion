import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";

const AppNavigation = createStackNavigator(
  {
    login: Login,
    home: Home,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigation);
