import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Button} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

export default class Flist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Datalist: [
        {
          key: '1',
          uri: require('./images/d.png'),
          hoten: 'Nguyễn Văn A',
          diachi: 'Điện Biên',
        },
        {
          key: '2',
          uri: require('./images/b.png'),
          hoten: 'Mguyễn thị Kim Oanh',
          diachi: 'Thái Nguyên',
        },
        {
          key: '3',
          uri: require('./images/a.png'),
          hoten: 'Nguyễn Thị Phương',
          diachi: 'Hà Nội',
        },
        {
          key: '4',
          uri: require('./images/s.jpg'),
          hoten: 'Ly A Sú',
          diachi: 'Bắc Cặn',
        },
      ],
    };
  }

  static navigationOptions = {
    headerTitle: 'Danh Sách',
    headerStyle: {
      backgroundColor: '#0000ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => this.props.navigation.push('Creat')}
        title="Thêm"
        color="#000000"
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Demo Flatlist</Text>
        <FlatList
          style={styles.flatlist}
          data={this.state.Datalist}
          renderItem={({item}) => (
            <View style={styles.duongvien}>
              <Image style={styles.imgs} source={item.uri} />
              <View style={styles.info}>
                <Text style={styles.item}>{item.hoten}</Text>
                <Text style={styles.item}>{item.diachi}</Text>
              </View>
            </View>
          )}
        />
        <Button
          title="Go to Creat"
          onPress={() => this.props.navigation.push('Creat')}
        />
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: 1,
              Tenmonhoc: 'Lap trinh web',
              nganhhoc: 'CNTT',
              stc: '12',
              stclt: '5',
              stcth: '7',
            })
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 40,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#ff6600',
    shadowColor: '#000000',
  },
  flatlist: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00ff00',
  },
  imgs: {
    width: 100,
    height: 100,
    alignItems: 'flex-start',
  },
  item: {
    flex: 5,
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#ffffff',
    alignItems: 'flex-end',
  },
  duongvien: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  info: {
    flexDirection: 'column',
    paddingLeft: 50,
  },
});
