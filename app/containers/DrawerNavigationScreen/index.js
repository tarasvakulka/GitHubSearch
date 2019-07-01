import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import DrawerItem from '../../components/DrawerItem';
import MainWrapper from '../../components/MainWrapper';

class DrawerNavigationScreen extends Component {

    navigateTo = (routeName) => {
        Navigation.push('AppStack', {
            component: {
                name: routeName
            }
        });
        Navigation.mergeOptions('App', {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });
    };

    render() {
        return (
            <MainWrapper>
                <View style={styles.container}>
                    <View style={styles.navigationContainer}>
                        <DrawerItem
                            label={'Search Repositories'}
                            onPress={() => this.navigateTo('SearchScreen')}
                        />
                        <DrawerItem
                            label={'Settings'}
                            onPress={() => this.navigateTo('SettingsScreen')}
                        />
                    </View>
                </View>
            </MainWrapper>
        );
    }

}

export default DrawerNavigationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(26,26,29,1)',
        width: '100%',
        paddingTop: '10%',
    },
    navigationContainer: {
        marginBottom: 30
    }
});