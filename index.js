/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FunctionalComponent from './src/components/FunctionalComponent';
import StackDemo from './src/navigation/stack/StackDemo';

AppRegistry.registerComponent(appName, () => StackDemo);
