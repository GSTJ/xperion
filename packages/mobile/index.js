import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push';
import Router from './src/router';

AppRegistry.registerComponent(appName, () => codePush(Router));
