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
import Storage from 'react-native-storage';
import HttpUtils from "../utils/HttpUtils"
import {pxToDp} from "../utils/SizeUtils"




export default class Home extends Component {

    //获取appid和token
    componentWillMount() {
        let storage = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size: 1000,
            // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend: AsyncStorage,
            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires: 1000 * 3600 * 24,

            // 读写时在内存中缓存数据。默认启用。
            enableCache: true,

            // 如果storage中没有相应数据，或数据已过期，
            // 则会调用相应的sync方法，无缝返回最新数据。
            // sync方法的具体说明会在后文提到
            // 你可以在构造函数这里就写好sync的方法
            // 或是在任何时候，直接对storage.sync进行赋值修改
            // 或是写到另一个文件里，这里require引入
            // sync: require('你可以另外写一个文件专门处理sync')
        })
        // 最好在全局范围内创建一个（且只有一个）storage实例，方便直接调用
        // 对于react native
        global.storage = storage;

        let params = {
            appId: "2786e267-0711-4229-8f3c-95d507417587",
            userName: '17784100426', //用户名
            pwd: 'e10adc3949ba59abbe56e057f20f883e', //123456 MD5
            equipmentId: '17784100426'
        }

        HttpUtils.post("/poseidon0/cloud/login_phone", params)
            .then(result => {
                global.storage.save({
                    key: 'identity',
                    data: {
                        token: result.token,
                        appId: params.appId,
                    }
                });
            }, error => {
                alert(error)
            })
    }

    getAppIdAndToken() {
        global.storage.load({
            key: 'identity',
        }).then((identity)=>{
            alert('appId=' + identity.appId + "  token=" + identity.token)
        })
    }



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
                                          this.getAppIdAndToken()
                                      }}>
                        <Text style={styles.bt_text}>
                            从storage中获取appId与token
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
        width: pxToDp(180),
        height: 50,
        backgroundColor: '#0af',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: pxToDp(5),
        marginLeft: pxToDp(5),
        marginTop: pxToDp(5),
    },
    bt_text: {
        color: '#fff',
    }
});

