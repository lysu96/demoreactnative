import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Datalist: [
        {
          itemId: 1,
          uri: require('../images/b.png'),
          Tenmonhoc: 'Lap trinh web',
          nganhhoc: 'CNTT',
          stc: '12',
          stclt: '5',
          stcth: '7',
        },
        {
          itemId: 2,
          uri: require('../images/a.png'),
          Tenmonhoc: 'Lap trinh android',
          nganhhoc: 'CNPM',
          stc: '13',
          stclt: '6',
          stcth: '7',
        },
        {
          itemId: 3,
          uri: require('../images/d.png'),
          Tenmonhoc: 'Lap trinh android',
          nganhhoc: 'CNPM',
          stc: '13',
          stclt: '6',
          stcth: '7',
        },
      ],
    };
  }
  static navigationOptions = {
    headerTitle: 'Thêm',
    headerStyle: {
      backgroundColor: '#0000ff',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    // headerRight: (
    //   <Button
    //     onPress={() => this.props.navigation.push('Details')}
    //     title="Thêm"
    //     color="#000000"
    //   />
    // ),
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={this.state.Datalist}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={styles.duongvien}
                onPress={() =>
                  this.props.navigation.push('Details', {
                    Tenmonhoc: item.Tenmonhoc,
                    nganhhoc: item.nganhhoc,
                    stc: item.stc,
                    stclt: item.stclt,
                    stcth: item.stcth,
                  })
                }>
                <Image style={styles.imgs} source={item.uri} />
                <View style={styles.info}>
                  <Text style={styles.items}>{item.Tenmonhoc}</Text>
                  <Text style={styles.items}>{item.nganhhoc}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        <Button
          onPress={() => this.props.navigation.push('Creat')}
          title="Thêm"
          color="#000000"
        />
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatlist: {
    flex: 8,
    width: '100%',
    height: '100%',
    backgroundColor: '#00ff00',
  },
  imgs: {
    width: 100,
    height: 100,
    alignItems: 'flex-start',
  },
  items: {
    flex: 5,
    padding: 5,
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
