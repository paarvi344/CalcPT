import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import CalculatorScreen from "./screens/calculator"
import PeriodicTableScreen from "./screens/periodicTable"


export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  CalculatorScreen : {screen: CalculatorScreen},
  PeriodicTableScreen : {screen : PeriodicTableScreen}

})

const AppContainer =  createAppContainer(TabNavigator) 