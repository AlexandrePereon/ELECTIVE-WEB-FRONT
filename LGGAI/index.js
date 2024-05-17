import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

/* On déclare ici à React Native Web d'attacher l'application à l'élément #main */
if (Platform.OS === 'web') {
	AppRegistry.runApplication(appName, {
		rootTag: document.getElementById('main'),
	});
}