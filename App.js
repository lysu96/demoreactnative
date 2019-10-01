import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
// import Flist from './screens/Flist';
import Creat from './screens/Creat';

const HomeStack = createStackNavigator({
  // Creat: Creat,
  HomeScreen: HomeScreen,
  // Flist: Flist,
  Details: DetailScreen,
  Creat: Creat,
});

export default createAppContainer(HomeStack);
