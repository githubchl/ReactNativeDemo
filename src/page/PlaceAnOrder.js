import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import HttpUtils from '../utils/HttpUtils';
import api from '../utils/api';
import common, {colorBlue, mainTextColor, mainTextSize} from "../style/common"
import Modal, {ModalContent, SlideAnimation, BottomModal} from 'react-native-modals';
import Picker from 'react-native-picker';
import InputInfoPage from "./InputInfoPage";


export default class PlaceAnOrder extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,//初始化数据为空
            visible: false,
            isOpenTypePopup: false,
            menuList: [1, 2, 3],
            identity: {},
            typeData: [],
            selectTypeIndex: -1,
            lastTypeIndex: -1,//上次选择的索引
            typeName: '请选择货物类型',
        }
        //this.navigation = this.props;
    }

    componentDidMount() {
        global.storage.load({
            key: 'identity',
        }).then((identity) => {
            this.setState({
                identity: identity,
            })
            HttpUtils.post(api.queryOrderCarItemType, identity)
                .then(result => {
                    if (result.rc == 0) {
                        this.setState({
                            typeData: result.data,
                        })
                    }
                }, error => {
                    alert(error)
                })
        })
    }


    submit() {
        this.setState({
            visible: true,
        })
    }

    inputInfo(type) {
        let name = "发货信息";
        if (type != 1) {
           name = "收货信息";
        }
        this.props.navigation.navigate('InputInfoPage', {name: name,type:type});
    }

    openTypePopup() {
        this.setState({
            isOpenTypePopup: true,
        })
    }

    closeTypePopup() {
        this.setState({
            isOpenTypePopup: false,
            selectTypeIndex: this.state.lastTypeIndex
        })
    }

    submitTypePopup() {
        this.setState({
            lastTypeIndex: this.state.selectTypeIndex,
            typeName: this.state.typeData[this.state.selectTypeIndex].name
        }, () => {
            this.closeTypePopup();
        })
    }

    addWeight() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    subtractWeight() {
        if (this.state.count <= 1) {
            return;
        }
        this.setState({
            count: this.state.count - 1,
        })
    }

    setSelectType(index) {
        this.setState({
            selectTypeIndex: index
        })
    }

    openPicker() {
        let data = [];
        for (var i = 0; i < 100; i++) {
            data.push(i);
        }
        Picker.init({
            pickerTitleText: '选择用车时间',
            pickerCancelBtnText: '取消',
            pickerConfirmBtnText: '确定',
            pickerData: data,
            selectedValue: [59],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.contacts}>
                    <View style={styles.contactsBar}>
                        <View style={[styles.iconImg, {backgroundColor: "#5ACC8B"}]}>
                            <Text style={styles.iconWhite}>发</Text>
                        </View>
                        <View style={styles.lineGray}></View>
                        <View style={[styles.iconImg, {backgroundColor: "#FCB000"}]}>
                            <Text style={styles.iconWhite}>收</Text>
                        </View>
                    </View>
                    <View style={styles.contactsContainer}>
                        <View style={styles.contactsItem}>
                            <TouchableOpacity onPress={() => this.inputInfo(1)} style={styles.contactsAddress}>
                                <Text style={styles.contactsText}>请填写发货信息</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.submit()}>
                                <Image onPress={() => this.submit()} style={styles.contactsImage}
                                       source={require('../assets/contacts.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineGrayHorizontal}></View>
                        <View style={styles.contactsItem}>
                            <TouchableOpacity onPress={() => this.inputInfo(2)} style={styles.contactsAddress}>
                                <Text style={styles.contactsText}>请填写收货信息</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.submit()}>
                                <Image onPress={() => this.submit()} style={styles.contactsImage}
                                       source={require('../assets/contacts.png')}/>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={styles.rowContainer}>
                    <TouchableOpacity onPress={() => this.openPicker()} style={styles.rowBox}>
                        <Text style={[styles.areaText, common.mainFontStyle]}>请选择用车时间</Text>
                        <Image style={styles.enterImage} source={require('../assets/next.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.openTypePopup()} style={styles.rowBox}>
                        <Text style={[styles.areaText, common.mainFontStyle]}>{this.state.typeName}</Text>
                        <Image style={styles.enterImage} source={require('../assets/next.png')}/>
                    </TouchableOpacity>

                    <View style={styles.rowBox}>
                        <Text style={[styles.areaText, common.mainFontStyle]}>预估重量&nbsp;&nbsp;(kg)</Text>

                        <View style={styles.steperNumber}>

                            <TouchableOpacity onPress={() => this.subtractWeight()} style={styles.addWidth}>
                                <View style={styles.calcNumber}>
                                    <Text style={{color: "#fff"}}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.weightNumber, common.mainFontStyle]}>{this.state.count}</Text>

                            <TouchableOpacity onPress={() => this.addWeight()} style={styles.addWidth}>
                                <View style={styles.calcNumber}>
                                    <Text style={{color: "#fff"}}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>

                        <TextInput style={styles.textInput}
                                   maxLength={40}
                                   multiline={true}
                                   placeholder="请填写备注"/>
                    </View>
                </View>

                <View style={styles.agree}>
                    <Image style={styles.agreeImage} source={require('../assets/stationSuccess.png')}/>
                    <Text style={styles.agreeTitle}>我已经阅读并同意</Text>
                    <Text onPress={() => this.submit()} style={styles.textUnderline}>《服务协议》</Text>
                </View>


                <TouchableOpacity style={styles.detailBtn} onPress={() => this.submit()}>
                    <Text style={styles.btnTitle}>提交</Text>
                </TouchableOpacity>

                <BottomModal
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({visible: false});
                    }}

                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                >
                    <ModalContent>
                        <View>
                            <Text>一个弹窗</Text>
                        </View>
                    </ModalContent>
                </BottomModal>

                <BottomModal
                    style={{borderRadius: 0}}
                    visible={this.state.isOpenTypePopup}
                    onTouchOutside={() => {
                        this.closeTypePopup();
                    }}

                    modalAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                >
                    <View>
                        <View style={styles.typePopupBar}>
                            <TouchableOpacity onPress={() => this.closeTypePopup()}>
                                <Image style={styles.agreeImage} source={require('../assets/close.png')}/>
                            </TouchableOpacity>
                            <Text style={common.blueFontStyle}>选择货物类型</Text>
                            <Text style={common.blueFontStyle} onPress={() => this.submitTypePopup()}>确定</Text>
                        </View>
                        <View style={styles.typeContainer}>
                            {this.state.typeData.map((item, index) => {
                                return <TouchableOpacity
                                    style={[styles.typeItem, this.state.selectTypeIndex == index ? styles.selectItem : null]}
                                    key={index} onPressIn={() => {
                                    this.setSelectType(index)
                                }}><Text
                                    style={[common.blueFontStyle, this.state.selectTypeIndex == index ? styles.selectItemText : null]}>{item.name}</Text></TouchableOpacity>
                            })
                            }
                        </View>
                    </View>
                </BottomModal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F6F6",
    },
    contacts: {
        height: 170,
        flexDirection: "row",
        backgroundColor: "white"
    },
    contactsBar: {
        marginTop: 32,
        marginLeft: 15
    },
    iconImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    lineGray: {
        backgroundColor: "#EEEEEE",
        height: 66,
        width: 2,
        marginLeft: 9
    },
    iconWhite: {
        fontSize: 10,
        color: "#fff",
    },
    contactsContainer: {
        flex: 1,
    },
    contactsItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    contactsAddress: {
        width: 270,
        height: 85,
        justifyContent: "center",
        flexDirection: "column",
    },
    contactsImage: {
        width: 20,
        height: 20,
        marginRight: 18,
    },
    contactsText: {
        color: "#CCCCCC",
        fontSize: mainTextSize,
    },
    lineGrayHorizontal: {
        backgroundColor: "#EEEEEE",
        height: 1,
        width: 315,
    },
    rowContainer: {
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
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
    areaText: {
        flex: 1,
    },
    enterImage: {
        width: 9,
        height: 15,
    },
    steperNumber: {
        flexDirection: "row",
        alignItems: "center",
    },
    addWidth: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    calcNumber: {
        width: 18,
        height: 18,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9,
        backgroundColor: colorBlue,
    },
    weightNumber: {
        width: 70,
        height: 20,
        lineHeight: 20,
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    textInput: {
        textAlignVertical: 'top',
        height: 140,
        fontSize: mainTextSize,
        paddingHorizontal: 0,
    },
    agree: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    agreeImage: {
        width: 20,
        height: 20,
    },
    agreeTitle: {
        color: mainTextColor,
        marginLeft: 5,
    },
    textUnderline: {
        color: colorBlue,
        textDecorationLine: 'underline',
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
    typePopupBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        borderColor: "#e4e4e4",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
        paddingHorizontal: 15,
    },
    typeContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingBottom: 15,
    },
    typeItem: {
        marginTop: 15,
        width: 110,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderColor: colorBlue,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderRadius: 5,
    },
    selectItem: {
        backgroundColor: colorBlue,
    },
    selectItemText: {
        color: "white",
    }
});