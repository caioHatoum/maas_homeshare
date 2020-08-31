/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeController from './src/Home/Controller/HomeController';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeController);
