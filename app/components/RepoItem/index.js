import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Card, CardItem, Text, Thumbnail, Button, Icon, Left, Body } from 'native-base';

export default RepoItem = (props) => {
    const {
        name,
        description,
        avatarUrl,
        forksCount,
        starsCount,
        handleShowWebViewModal,
        repoUrl
    } = props;

    const handlePress = () => {
        handleShowWebViewModal(repoUrl);
    };

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
            <Card style={styles.container}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: avatarUrl }} />
                        <Body>
                        <Text>{name}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Body>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.repoDescription}>
                        {description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Left>
                        <Button transparent textStyle={styles.buttonText}>
                            <Icon name="star" />
                            <Text>{`${starsCount} stars`}</Text>
                        </Button>
                    </Left>
                    <Left>
                        <Button transparent textStyle={styles.buttonText}>
                            <Icon name="logo-github" />
                            <Text>{`${forksCount} forks`}</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0
    },
    cardItem: {
        paddingBottom: 2,
        paddingTop: 2
    },
    repoDescription: {
        height: 50,
        flex: 1
    },
    buttonText: {
        color: '#87838B'
    }
});