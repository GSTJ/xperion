import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, Bidding, Complaint} from './routes';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Bidding: {screen: Bidding},
    Complaint: {screen: Complaint},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
