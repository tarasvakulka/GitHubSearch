import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import url from 'url';

import MainWrapper from '../../components/MainWrapper';

import { goToSearch, goToAuth } from '../../navigation';
import { loginUser } from '../../redux/auth/actions';
import ServerConfig from '../../config/serverConfig';
import { Metrics } from '../../themes/index';

const { screenWidth: width, screenHeight: height } = Metrics;

class LoginWebViewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            loginRequest: false
        };
    }

    handleWebViewLoad = () => {
        this.setState({ isLoading: false });
    };

    onNavigationStateChange = webViewState => {
        const { url: redirectUrl } = webViewState;
        if (!this.state.loginRequest && redirectUrl.indexOf('https://github.com/?code') !== -1) {
            this.setState({ loginRequest: true }, () => {
                const params = url.parse(redirectUrl, true);
                this.props.onLogin({ code: params.query.code }).then(response => {
                    this.setState({ loginRequest: false });
                    goToSearch();
                }).catch(() => {
                    this.setState({ loginRequest: false });
                    goToAuth();
                });
            });
        }
    };

    render() {
        const { isLoading } = this.state;
        const url = `${ServerConfig.DOMAIN}login/oauth/authorize?client_id=${ServerConfig.CLIENT_ID}`;

        return (
            <MainWrapper>
                <View style={styles.container}>
                    <WebView
                        source={{ uri: url }}
                        onLoad={this.handleWebViewLoad}
                        onNavigationStateChange={this.onNavigationStateChange}
                        style={styles.webViewStyle}
                    />
                    {
                        isLoading && (
                            <Spinner color='black' style={styles.activityIndicator} />
                        )
                    }
                </View>
            </MainWrapper>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (params) => {
            return new Promise((resolve, reject) => {
                dispatch(loginUser({params, resolve, reject}))
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginWebViewScreen);

LoginWebViewScreen.propTypes = {
    onLogin: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    webViewStyle: {
        width,
        height
    },
    activityIndicator: {
        position: 'absolute',
        zIndex: 2
    }
});
