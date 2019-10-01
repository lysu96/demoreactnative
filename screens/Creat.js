import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Creat extends React.Component {
  constructor(props) {
    super(props);
    // this.props= state;
    this.state = {
      uri: '',
      Tenmonhoc: '',
      nganhhoc: '',
      stclt: '',
      stcth: '',
      Luu: '',
    };
  }
  _geturi(text) {
    this.setState({uri: text});
  }
  _getTenmonhoc(text) {
    this.setState({Tenmonhoc: text});
  }
  _getnganhhoc(text) {
    this.setState({nganhhoc: text});
  }
  _getstclt(text) {
    this.setState({stclt: text});
  }
  _getstcth(text) {
    this.setState({stcth: text});
  }
  _onPress() {
    let uris = this.state.uri;
    let Tenmonhocs = this.state.Tenmonhocs;
    let nganhhocs = this.state.nganhhoc;
    let stclts = this.state.stclt;
    let stcths = this.state.stcth;
    this.setState({Luu: uris + Tenmonhocs + nganhhocs + stclts + stcths});
    // // eslint-disable-next-line no-alert
    // alert(
    //   this.state.uri +
    //     '-' +
    //     this.state.Tenmonhoc +
    //     '-' +
    //     this.state.nganhhoc +
    //     '-' +
    //     this.state.stclt +
    //     '-' +
    //     this.state.stcth,
    // );
  }
  static navigationOptions = {
    title: 'Thêm',
    headerStyle: {
      backgroundColor: '#0000ff',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.login}>
            <Text style={styles.tt}>Thêm</Text>
          </View>
          <View>
            <TextInput
              style={styles.INput}
              // onChangeText={this._geturi.bind(this)}
              placeholder="Ảnh"
            />
          </View>
          <View>
            <TextInput
              style={styles.INput}
              // onChangeText={this._getTenmonhoc.bind(this)}
              placeholder="Tên môn học"
            />
          </View>
          <View>
            <TextInput
              style={styles.INput}
              // onChangeText={this._getnganhhoc.bind(this)}
              placeholder="Ngành"
            />
          </View>
          <View>
            <TextInput
              style={styles.INput}
              // onChangeText={this._getstclt.bind(this)}
              placeholder="Số tín chỉ LT"
            />
          </View>
          <View>
            <TextInput
              style={styles.INput}
              // onChangeText={this._getstcth.bind(this)}
              placeholder="Số tín chỉ TH"
            />
          </View>
          <TouchableOpacity
            onPress={
              () =>
                this.props.navigation.push('Details', {
                  itemId: null,
                  Tenmonhoc: 'tenmh',
                  nganhhoc: 'nghhc',
                  stc: 'stc',
                  stclt: 'stclt',
                  stcth: 'stcth',
                })
              // onPress={this._onPress.bind(this)
            }>
            <View style={styles.bnt}>
              <Text>Thêm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    backgroundColor: '#e0d',
    width: 300,
    height: 320,
    marginTop: 50,
    alignItems: 'center',
  },
  login: {
    width: 250,
    alignItems: 'flex-end',
  },
  tt: {
    fontSize: 25,
  },
  INput: {
    width: 250,
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 4,
  },
  bnt: {
    width: 250,
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    paddingTop: 4,
    margin: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
});
