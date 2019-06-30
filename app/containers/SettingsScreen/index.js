import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import MainWrapper from '../../components/MainWrapper';

import { goToAuth } from '../../navigation';

class SettingsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSideMenu = () => {
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
    };

    handleLogout = () => {
         goToAuth();
     };


    render() {
        return (
            <MainWrapper>
                <Container>
                    <Header>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={this.handleSideMenu}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>
                            RepoFinder
                        </Title>
                        </Body>
                        <Right style={{ flex: 1 }} />
                    </Header>
                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onPress={this.handleLogout} style={{ alignSelf: 'center' }}>
                            <Text>
                                Logout
                            </Text>
                        </Button>
                    </Content>
                </Container>
            </MainWrapper>
        );
    }

}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
