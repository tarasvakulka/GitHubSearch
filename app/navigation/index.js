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
                        name: 'SearchScreen'
                    }
                }
            ]
        }
    }
});