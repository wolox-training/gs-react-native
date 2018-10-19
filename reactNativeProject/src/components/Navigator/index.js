import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import routes from "../../constants/routes";

import ListOfBooks from "../../screens/ListOfBooks";
import Main from "../../screens/Main";

const TabNavigator = createMaterialTopTabNavigator({
  [routes.Home]: Main,
  [routes.NextScreen]: ListOfBooks
});

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: "Aplicacion en RN"
    }
  }
});
export default StackNavigator;
