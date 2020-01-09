import {createStackNavigator, createBottomTabNavigator, createTabNavigator} from 'react-navigation'
import React from 'react'
import HomePage from "../page/home"
import TestPage from "../page/test"



export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: "首页",
            // headerRight: (
            //     <Text style={{marginRight: 20}}>哈哈</Text>
            // ),
        },
    },
    TestPage:{
        screen: TestPage,
        navigationOptions: {
            title: "注册的页面",
        },
    }
}, {});