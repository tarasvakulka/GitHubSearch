import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import asyncStorageConfig from '../../config/asyncStorageConfig';
import { goToAuth, goToSearch } from '../../navigation';

class RootScreen extends Component {

    componentDidMount() {
        AsyncStorage.getItem(asyncStorageConfig.ACCESS_TOKEN).then(response => {
            if (response) {
                goToSearch();
            } else {
                goToAuth();
            }
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    {'Root Screen Hi!'}
                </Text>
                <ActivityIndicator />
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(RootScreen);