import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import routes from "../../constants/routes";

import ScreenOne from "../../screens/ListOfBooks";
import Main from "../../screens/Main";
import DetailsBooks from "../../screens/DetailsBooks";

const TabNavigator = createMaterialTopTabNavigator({
  [routes.Home]: Main,
  [routes.NextScreen]: ScreenOne
});

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: "Aplicacion en RN"
    }
  },
  Details: DetailsBooks
});
export default StackNavigator;
