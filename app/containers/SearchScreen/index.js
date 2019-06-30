import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';

import { goToAuth } from '../../navigation';
import {searchRepositories} from '../../redux/search/actions';


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryText: ''
        };
    }

    handleNavigate = () => {
        goToAuth();
    };

    handleSearch = () => {
        this.props.onSearch({ query: this.state.queryText });
    };

    renderRepo = ({ item }) => {
        return (
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
        );
    };

    render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
              <Text>
                  {'Search Screen Hi!'}
              </Text>

              <View style={{ flexDirection: 'row'}}>
                  <TextInput
                      style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
                      onChangeText={(text) => this.setState({ queryText: text })}
                      value={this.state.queryText}
                  />
                  <TouchableOpacity onPress={this.handleSearch}>
                      <Text>
                          Search
                      </Text>
                  </TouchableOpacity>
              </View>

              <FlatList
                data={this.props.search.repositories}
                renderItem={this.renderRepo}
              />

              <TouchableOpacity onPress={this.handleNavigate}>
                  <Text>
                      Logout
                  </Text>
              </TouchableOpacity>
          </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        search: state.search
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (params) => {
            return new Promise((resolve, reject) => {
                dispatch(searchRepositories({params, resolve, reject}))
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
