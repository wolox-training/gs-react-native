import AppContainer from "../../screens/Main";

import { TabNavigator, StackNavigator } from "react-navigation";
import layout from "../../screens/ScreenOne/layout";

const CreateTabNavigator = TabNavigator({
  Home: AppContainer,
  NextScreen: layout
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
