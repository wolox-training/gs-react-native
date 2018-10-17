import { TabNavigator, StackNavigator } from "react-navigation";

import * as routes from "../../constants/routes";
import Main from "../../screens/Main";
import ScreenOne from "../../screens/ScreenOne";

const stackNavigator = StackNavigator({
  Home: {
    screen: TabNavigator({
      [routes.Home]: Main,
      [routes.ScreenOne]: ScreenOne
    }),

    navigationOptions: ({ navigation }) => ({
      title: "Aplicacion en RN"
    })
  }
});
export default stackNavigator;
