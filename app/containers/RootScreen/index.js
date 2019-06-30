import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';

import MainWrapper from '../../components/MainWrapper';

import asyncStorageConfig from '../../config/asyncStorageConfig';
import { goToAuth, goToSearch } from '../../navigation';
import { setAccessToken } from '../../redux/auth/actions';

class RootScreen extends Component {

    componentDidMount() {
        AsyncStorage.getItem(asyncStorageConfig.ACCESS_TOKEN).then(response => {
            if (response) {
                this.props.setAccessToken(response);
                goToSearch();
            } else {
                goToAuth();
            }
        })
    }

    render() {
        return (
            <MainWrapper>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Spinner color='black' />
                </View>
            </MainWrapper>
        );
    }

}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { setAccessToken })(RootScreen);