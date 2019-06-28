import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { goToAuth } from '../../navigation';


class SearchScreen extends Component {

    handleNavigate = () => {
        goToAuth();
    };

    render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text>
                  {'Search Screen Hi!'}
              </Text>

              <TouchableOpacity onPress={this.handleNavigate}>
                  <Text>
                      Logout
                  </Text>
              </TouchableOpacity>
          </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

export default connect(mapStateToProps)(SearchScreen);
