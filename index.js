// index.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// DevSettings를 import하여 Dev Menu 항목 추가
import { DevSettings } from 'react-native';

if (__DEV__) {
  DevSettings.addMenuItem('Debug JS Remotely', () => {
    const openURL = require('react-native/Libraries/Core/Devtools/openURLInBrowser');
    openURL('http://localhost:8081/debugger-ui/');
  });
}

AppRegistry.registerComponent(appName, () => App);