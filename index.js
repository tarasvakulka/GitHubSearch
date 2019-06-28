/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app/navigation/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'RootScreen'
            }
        }
    });
});

