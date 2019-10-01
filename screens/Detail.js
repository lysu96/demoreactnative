import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Thông tin',
    headerStyle: {
      backgroundColor: '#0000ff',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const {navigation} = this.props;
    const Tenmonhoc = navigation.getParam('Tenmonhoc', 'NO-ID');
    const nganhhoc = navigation.getParam('nganhhoc', 'some default value');
    const stc = navigation.getParam('stc', 'some default value');
    const stclt = navigation.getParam('stclt', 'some default value');
    const stcth = navigation.getParam('stcth', 'some default value');
    return (
      <View style={styles.bodys}>
        <Text style={styles.tieude}>Thông tin</Text>
        <Text style={styles.tt}>Tên lớp: {JSON.stringify(Tenmonhoc)}</Text>
        <Text style={styles.tt}>Ngành học: {JSON.stringify(nganhhoc)}</Text>
        <Text style={styles.tt}>Số tín chỉ: {JSON.stringify(stc)}</Text>
        <Text style={styles.tt}>Số tín chỉ LT: {JSON.stringify(stclt)}</Text>
        <Text style={styles.tt}>Số tín chỉ TH: {JSON.stringify(stcth)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bodys: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tieude: {
    fontSize: 25,
  },
  tt: {
    fontSize: 16,
  },
});
