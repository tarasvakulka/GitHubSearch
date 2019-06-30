import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchScreen from '../containers/SearchScreen';
import LoginScreen from '../containers/LoginScreen';
import RootScreen from '../containers/RootScreen';
import LoginWebView from '../containers/LoginWebViewScreen';
import DrawerNavigationScreen from '../containers/DrawerNavigationScreen';
import SettingsScreen from '../containers/SettingsScreen';
import ModalScreen from '../containers/ModalScreen';

export function registerScreens() {
    Navigation.registerComponentWithRedux('LoginScreen', () => LoginScreen, Provider, store);
    Navigation.registerComponentWithRedux('SearchScreen', () => SearchScreen, Provider, store);
    Navigation.registerComponentWithRedux('RootScreen', () => RootScreen, Provider, store);
    Navigation.registerComponentWithRedux('LoginWebViewScreen', () => LoginWebView, Provider, store);
    Navigation.registerComponentWithRedux('DrawerNavigationScreen', () => DrawerNavigationScreen, Provider, store);
    Navigation.registerComponentWithRedux('SettingsScreen', () => SettingsScreen, Provider, store);
    Navigation.registerComponentWithRedux('ModalScreen', () => ModalScreen, Provider, store);
}