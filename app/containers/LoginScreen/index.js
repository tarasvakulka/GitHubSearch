import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { loginUser } from '../../redux/auth/actions';

class LoginScreen extends Component {

    handleNavigate = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'LoginWebViewScreen',
            }
        });
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    {'Login Screen Hi! '}
                </Text>

                <TouchableOpacity onPress={this.handleNavigate}>
                    <Text>
                        Sign in
                    </Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);