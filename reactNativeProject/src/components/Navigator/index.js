import AppContainer from "../../screens/Main";
import ScreenOne from "../../screens/ScreenOne";
import { createBottomTabNavigator } from "react-navigation";

const Tn = createBottomTabNavigator({
  Home: AppContainer,
  NextScreen: ScreenOne
});

export default Tn;
