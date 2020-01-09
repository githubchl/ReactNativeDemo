import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import {AppStackNavigator} from "./src/navigator/AppNavigator"

AppRegistry.registerComponent('application', () => AppStackNavigator);