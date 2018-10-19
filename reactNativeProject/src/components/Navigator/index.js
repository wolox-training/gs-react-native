import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import routes from "../../constants/routes";

import ListOfBooks from "../../screens/ListOfBooks";
import Main from "../../screens/Main";
import DetailsBooks from "../../screens/DetailsBooks";

const TabNavigator = createMaterialTopTabNavigator({
  [routes.Home]: Main,
  [routes.ListOfBooks]: ListOfBooks
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
