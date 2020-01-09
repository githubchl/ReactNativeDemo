/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    DrawerLayoutAndroid,
    NativeModules,//引入的模块

} from 'react-native';



export default class Home extends Component {


    jumpNative(){
        //调用原生方法
        NativeModules.IntentMoudle.startActivityFromJS("MainActivity", null);
    }

    render() {
        const {navigation} = this.props;

        return (
            <View>
                <View style={styles.container}>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('TestPage');
                                      }}>
                        <Text style={styles.bt_text}>
                            注册的子页面
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          this.jumpNative();
                                      }}>
                        <Text style={styles.bt_text}>
                            跳转到原生页面
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('Page1', {name: '动态的title'});
                                      }}>
                        <Text style={styles.bt_text}>
                            页面跳转
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('FlatListPage');
                                      }}>
                        <Text style={styles.bt_text}>
                            列表页面
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('KeyboardAvoidingViewPage');
                                      }}>
                        <Text style={styles.bt_text}>
                            键盘弹起自动伸缩
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('SomeComponent');
                                      }}>
                        <Text style={styles.bt_text}>
                            一些组件
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('TextPage');
                                      }}>
                        <Text style={styles.bt_text}>
                            文本标签
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('TouchablePage');
                                      }}>
                        <Text style={styles.bt_text}>
                            Touchable
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('HookPage');
                                      }}>
                        <Text style={styles.bt_text}>
                            生命周期
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('PlaceAnOrder');
                                      }}>
                        <Text style={styles.bt_text}>
                            包车物流
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt} activeOpacity={0.5}
                                      onPress={() => {
                                          navigation.navigate('Component11');
                                      }}>
                        <Text style={styles.bt_text}>
                            时间选择器
                        </Text>
                    </TouchableOpacity>

                    <ActivityIndicator size="large" color="#0000ff"/>

                    <View style={styles.container}>
                        <Image
                            style={{width: 180, height: 180}}
                            source={{uri: 'http://wx4.sinaimg.cn/bmiddle/78b88159gy1g8ryut3tdrg208l08lkgn.gif'}}
                        />
                        <Image
                            style={{width: 180, height: 180}}
                            source={{uri: 'http://wx3.sinaimg.cn/bmiddle/006GJQvhly1g7qk0w0kyrg307e07e1hs.gif'}}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bt: {
        width: 180,
        height: 50,
        backgroundColor: '#0af',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        marginTop: 5,
    },
    bt_text: {
        color: '#fff',
    }
});

