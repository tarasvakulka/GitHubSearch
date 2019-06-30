import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            options: {
                topBar: {
                    visible: false
                }
            },
            children: [
                {
                    component: {
                        name: 'LoginScreen'
                    }
                }
            ]
        }
    }
});

export const goToSearch = () => Navigation.setRoot({
    root: {
        sideMenu: {
            id: 'App',
            left: {
                component: {
                    name: 'DrawerNavigationScreen'
                }
            },
            center: {
                stack: {
                    id: 'AppStack',
                    options: {
                        topBar: {
                            visible: false
                        }
                    },
                    children: [
                        {
                            component: {
                                id: 'SettingsScree',
                                name: 'SettingsScreen'
                            }
                        },
                        {
                            component: {
                                id: 'SearchScreen',
                                name: 'SearchScreen'
                            }
                        }
                    ]
                }
            }
        }
    }
});