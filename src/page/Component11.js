import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Component11 extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00'
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
      onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
      onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
      onPanResponderMove: (e) => console.log('onPanResponderMove'),
      onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
      onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎使用react-native-datepicker示例!
        </Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="placeholder"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="确定"
          cancelBtnText="取消"
          iconSource={require('../assets/close.png')}
          onDateChange={(date) => {this.setState({date: date});}}
        />
        <Text style={styles.instructions}>date: {this.state.date}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="确定"
          cancelBtnText="取消"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}
        />
        <Text style={styles.instructions}>time: {this.state.time}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.datetime}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          confirmBtnText="确定"
          cancelBtnText="取消"
          showIcon={false}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
        <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.datetime1}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          confirmBtnText="确定"
          cancelBtnText="取消"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
        />
        <Text style={styles.instructions}>datetime: {this.state.datetime1}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});