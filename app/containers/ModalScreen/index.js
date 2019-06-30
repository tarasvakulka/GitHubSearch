import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import MainWrapper from '../../components/MainWrapper';

import { Metrics } from '../../themes/index';

const { screenWidth: width, screenHeight: height } = Metrics;

class ModalScreen extends Component {

    handleModalClose = () => {
        Navigation.dismissOverlay('ModalScreen');
    };

    render() {
        return (
            <MainWrapper>
                <View style={styles.container}>
                    <Button style={styles.closeButton} transparent onPress={this.handleModalClose}>
                        <Icon name='close' style={styles.closeIcon} />
                    </Button>
                    <View style={styles.webViewWrapper}>
                        <WebView
                            source={{ uri: this.props.url }}
                            style={styles.webViewStyle}
                        />
                    </View>
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

export default connect(mapStateToProps)(ModalScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    closeIcon: {
        fontSize: 35,
        color: 'white'
    },
    webViewStyle: {
        width: width * 0.75,
        height: height * 0.75
    },
    webViewWrapper: {
        width: width * 0.75,
        height: height * 0.75
    }
});