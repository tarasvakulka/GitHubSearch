import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import MainWrapper from '../../components/MainWrapper';

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
            <MainWrapper>
                <Container>
                    <Header>
                        <Left style={{ flex: 1 }} />
                        <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>
                            RepoFinder
                        </Title>
                        </Body>
                        <Right style={{ flex: 1 }} />
                    </Header>
                    <Content contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Please authentication via GitHub</Text>
                        <Button onPress={this.handleNavigate} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 30 }}>
                            <Text>
                               Sign in
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