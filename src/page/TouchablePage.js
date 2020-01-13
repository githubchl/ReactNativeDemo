import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

export default class TouchablePage extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.3}
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> TouchableOpacity </Text>
                </TouchableOpacity>

                <TouchableHighlight
                    activeOpacity={0.9}
                    underlayColor={'#f00'}
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> TouchableHighlight </Text>
                </TouchableHighlight>
                <View style={[styles.countContainer]}>
                    <Text style={[styles.countText]}>
                        { this.state.count !== 0 ? this.state.count: null}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})