/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import MyText from '../component/MyText'
import {
    View,
    Text,
    Button
} from 'react-native';


export default class TextPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
               <Text>
                   <Text>这是Text包住</Text>
                   <Text>的文字</Text>
               </Text>
                <View>
                    <Text>这是View包住</Text>
                    <Text>的文字</Text>
                </View>
                <MyText>这是组件的文字</MyText>
            </View>
        );
    }
}
