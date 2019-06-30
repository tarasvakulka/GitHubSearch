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
        <TouchableOpacity onPress={handlePress}>
            <Card style={{ flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: avatarUrl }} />
                        <Body>
                        <Text>{name}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{paddingBottom: 2, paddingTop: 2 }}>
                    <Body>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={{height: 50, flex: 1}}>
                        {description}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem style={{paddingBottom: 2, paddingTop: 2 }}>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="star" />
                            <Text>{`${starsCount} stars`}</Text>
                        </Button>
                    </Left>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
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
        flex: 1
    }
});