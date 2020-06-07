import 'react-native-gesture-handler'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local 
 */

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import EMOMScreen from './src/screens/EMOMScreen'
import {StyleSheet} from 'react-native'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { headerShown: false }
  },
  EMOM: {
    screen: EMOMScreen,
    navigationOptions: { headerShown: false }
  },
}, {initialRouteName: 'Home'})



export default createAppContainer(AppNavigator)


