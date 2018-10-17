import AppContainer from "../../screens/Main";
import ScreenOne from "../../screens/ScreenOne";
import { TabNavigator, StackNavigator } from "react-navigation";

const CreateTabNavigator = TabNavigator({
  Home: AppContainer,
  NextScreen: ScreenOne
});

const CreateStackNavigator = StackNavigator({
  Home: {
    screen: CreateTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Aplicacion en RN"
    })
  }
});
export default CreateStackNavigator;
