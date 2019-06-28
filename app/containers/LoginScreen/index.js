import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { goToSearch } from '../../navigation';

class LoginScreen extends Component {

    handleNavigate = () => {
        goToSearch();
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    {'Login Screen Hi! ' + this.props.auth.access_token}
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

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(LoginScreen);