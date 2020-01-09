import React, {Component} from 'react';
import {
    View,
    Text, AppRegistry,
} from 'react-native';
import HomePage from "./home";



export default class Test extends Component {
    render(){
        return (
            <View>
                <Text>注册的页面</Text>
            </View>
        )
    }

}

AppRegistry.registerComponent('test', () => Test);