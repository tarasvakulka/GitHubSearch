import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';

import MainWrapper from '../../components/MainWrapper';

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
                        <Left style={styles.headerLeft} />
                        <Body style={styles.headerBody}>
                            <Title>
                                RepoFinder
                            </Title>
                        </Body>
                        <Right style={styles.headerRight} />
                    </Header>
                    <Content contentContainerStyle={styles.contentStyle}>
                        <Text>Please authentication via GitHub</Text>
                        <Button onPress={this.handleNavigate} style={styles.signInButton}>
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

export default LoginScreen;

const styles = StyleSheet.create({
    headerLeft: {
        flex: 1
    },
    headerBody: {
        flex: 1,
        alignItems: 'center'
    },
    headerRight: {
        flex: 1
    },
    contentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
    }
});