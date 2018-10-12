import { createStackNavigator } from "react-navigation";
import ScreenOne from "../../screens/ScreenOne";
import DetailsBooks from "../../screens/DetailsBooks";
import AppContainer from "../../screens/Main";

const Tn = createStackNavigator(
  {
    Home: AppContainer,
    NextScreen: ScreenOne,
    Details: DetailsBooks
  },
  {
    initialRouteName: "Home"
  }
);

export default Tn;
