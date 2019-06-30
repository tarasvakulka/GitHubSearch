import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
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
                        <Left style={styles.headerLeft}>
                            <Button transparent onPress={this.handleSideMenu}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={styles.headerBody}>
                        <Title>
                            RepoFinder
                        </Title>
                        </Body>
                        <Right style={styles.rightHeader} />
                    </Header>
                    <Content contentContainerStyle={styles.contentContainer}>
                        <Button onPress={this.handleLogout} style={styles.buttonLogout}>
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

export default SettingsScreen;

const styles = StyleSheet.create({
    headerLeft: {
        flex: 1
    },
    headerBody: {
        flex: 1,
        alignItems: 'center'
    },
    rightHeader: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogout: {
        alignSelf: 'center'
    }
});
