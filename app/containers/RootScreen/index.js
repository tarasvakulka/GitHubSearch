import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
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
                <View style={styles.container}>
                    <Spinner color='black' />
                </View>
            </MainWrapper>
        );
    }

}

export default connect(null, { setAccessToken })(RootScreen);

RootScreen.propTypes = {
    setAccessToken: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});