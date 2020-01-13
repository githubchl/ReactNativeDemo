/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import cityInfo from '../utils/cityInfo'


export default class FlatListPage extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
    })

    constructor(props) {
        super(props)
        this.state = {
            opacity: 0,
            refreshing: false,
            isFooterLoading: false,
            dataArray: cityInfo.normalList,
        }
    }


    _renderItemSeparatorComponent = () => (
        <View style={{height: 0.5, backgroundColor: '#e2e3e4'}}></View>
    );

    _renderFooter = () => (
        <View>
            <Text style={styles.footer}>
                没有更多了
            </Text>
        </View>
    )

    loadData() {
        this.setState({
            refreshing: true
        });
        setTimeout(() => {
            let dataNewArray = [{name: '新数据1', pinYin: 'enshi', py: 'es'},
                {name: '新数据2', pinYin: 'fuzhou', py: 'fz'},
                {name: '新数据3', pinYin: 'foshan', py: 'fs'}]

            this.setState({
                dataArray: dataNewArray.concat(this.state.dataArray),
                refreshing: false,
            })
        }, 1500);
    }

    _onEndReached() {
        this.setState({
            isFooterLoading: true
        });
        setTimeout(() => {
            let dataNewArray = [{name: '新数据1', pinYin: 'enshi', py: 'es'},
                {name: '新数据2', pinYin: 'fuzhou', py: 'fz'},
                {name: '新数据3', pinYin: 'foshan', py: 'fs'}]
            this.setState({
                dataArray: this.state.dataArray.concat(dataNewArray),
                isFooterLoading: true
            })
        }, 2000);
    }

    genIndicator() {
        return (
            <View>
                <ActivityIndicator
                    animating={this.state.isFooterLoading}
                />
                <Text style={styles.footer}>加载更多...</Text>
            </View>
        )
    }

    render() {

        return (

            <View>
                <FlatList
                    data={this.state.dataArray}
                    keyExtractor={(item: object, index: number) => index + ""}
                    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                    ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.loadData()
                    }}
                    ListFooterComponent={
                        this.genIndicator()
                    }
                    onEndReached={() => {
                        this._onEndReached()
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        lineHeight: 50,
        backgroundColor: "#fff",
        textAlign: 'center'
    },
    footer: {
        height: 40,
        lineHeight: 40,
        textAlign: 'center'
    }
});
