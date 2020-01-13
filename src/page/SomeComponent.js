import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    ProgressBarAndroid
} from 'react-native';

export default class SomeComponent extends Component{
    state = {
        behavior: 'padding',
    };
    render() {
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <ProgressBarAndroid />
                <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3"  />
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10
    }
});