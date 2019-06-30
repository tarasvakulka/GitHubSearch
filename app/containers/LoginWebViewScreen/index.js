import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import url from 'url';

import { goToSearch } from '../../navigation';
import { loginUser } from '../../redux/auth/actions';
import ServerConfig from '../../config/serverConfig';
import { Metrics } from '../../themes/index';

const { screenWidth: width, screenHeight: height } = Metrics;

class LoginWebViewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    handleWebViewLoad = () => {
        this.setState({ isLoading: false });
    };

    onNavigationStateChange = webViewState => {
        const { url: redirectUrl } = webViewState;
        const { loginLoader } = this.props.auth;
        if (!loginLoader && redirectUrl.indexOf('https://github.com/?code') !== -1) {
            const params = url.parse(redirectUrl, true);
            this.props.onLogin({ code: params.query.code }).then(response => {
                goToSearch();
            });
        }
    };

    render() {
        const { isLoading } = this.state;
        const url = `${ServerConfig.DOMAIN}login/oauth/authorize?client_id=${ServerConfig.CLIENT_ID}`;

        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: url }}
                    onLoad={this.handleWebViewLoad}
                    onNavigationStateChange={this.onNavigationStateChange}
                    style={styles.webViewStyle}
                />
                {
                    isLoading && (
                        <ActivityIndicator style={styles.activityIndicator} />
                    )
                }
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (params) => {
            return new Promise((resolve, reject) => {
                dispatch(loginUser({params, resolve, reject}))
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWebViewScreen);

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
