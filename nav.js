import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from "./Screens/startScreen"
import SignScreen from "./Screens/SignIn"
import HomeScreen from "./Screens/home"
import LogintScreen from "./Screens/login"


const AuthNavigator = createStackNavigator({
    LoginScreen: {
        screen: LogintScreen,
        navigationOptions: {
          headerMode: 'none',
        },
      },
    SignScreen: SignScreen

}, {
    //mode: 'modal',
    //headerMode: 'none',
});

export default createAppContainer(createSwitchNavigator({StartScreen,AuthNavigator,HomeScreen}))