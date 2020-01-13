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
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import common, {colorBlue, mainTextColor, mainTextSize} from "../style/common"

export default class InputInfoPage extends Component {
    render() {
        const {navigation} = this.props;
        alert(JSON.stringify(navigation));
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.rowBox}>
                        <TextInput style={styles.textInput}
                                   maxLength={40}
                                   placeholder="请填写姓名"/>
                    </View>
                    <View style={styles.rowBox}>
                        <TextInput style={styles.textInput}
                                   maxLength={40}
                                   placeholder="请填写手机号"/>
                    </View>
                    <TouchableOpacity style={styles.rowBox} onPressIn={()=>{}}>
                        <Text style={styles.textInput}
                        >请选择省-市（州）-区（县）-镇（乡）-村</Text>
                        <Image style={styles.enterImage} source={require('../assets/next.png')}/>
                    </TouchableOpacity>
                    <View style={styles.rowBox}>
                        <TextInput style={styles.textInput}
                                   maxLength={40}
                                   placeholder="请填写详细地址"/>
                    </View>
                </View>

                <TouchableOpacity style={styles.detailBtn} onPress={() => this.submit()}>
                    <Text style={styles.btnTitle}>确认</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F6F6",
    },
    content: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
    },
    rowBox: {
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#EEEEEE",
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'center',
        height: 50,
        lineHeight: 50,
        fontSize: mainTextSize,
        paddingHorizontal: 0,
    },
    enterImage: {
        width: 9,
        height: 15,
    },
    detailBtn: {
        height: 50,
        lineHeight: 50,
        left: 0,
        right: 0,
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        backgroundColor: colorBlue,
    },
    btnTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "500",
    },
});
