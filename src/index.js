import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { AsyncStorage, NetInfo } from './components/core'
import { LOGIN_TOKEN} from './helpers/constants'

import Screens from './screens';
import SplashScreen from './screens/Splash';
import { store } from '../src/redux/store'

class MainApp extends Component {

  state = {
    showRealApp: 0,
    initialRoute: 'Login'
  };

  async componentDidMount() {
    // this.handleConnectivityChange();

    // NetInfo.addEventListener(
    //   'connectionChange',
    //   this.handleConnectivityChange
    // );

    const token = await AsyncStorage.getItem(LOGIN_TOKEN);
    let initialRoute = 'Login';

    if (token) {
      initialRoute = 'Home';
    }

    setTimeout(() => {
      this.setState({ initialRoute: initialRoute, showRealApp: 1 });
    }, 1000)
  }


  handleConnectivityChange = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log((isConnected ? 'online' : 'offline'));
    });
  }

  // componentWillUnmount() {
  //   NetInfo.removeEventListener(
  //     'connectionChange',
  //     this.handleConnectivityChange
  //   );
  // }

  render() {
    const { initialRoute, showRealApp } = this.state;

    if (showRealApp === 1) {
      return <Provider store={store}>
        <Screens initialRouteName={initialRoute} />
      </Provider>;
    } else {
      return <SplashScreen />
    }
  }
}

export default MainApp;