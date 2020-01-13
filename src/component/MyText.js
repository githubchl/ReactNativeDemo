/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';


export default class MyText extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20,color:'red' }}>{this.props.children}</Text>
            </View>
        );
    }
}
