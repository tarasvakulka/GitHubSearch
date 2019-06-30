import React, { Component } from 'react';
import {
    View,
    FlatList,
    Keyboard,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import { Container, Header, Title, Item, Input, Button, Left, Right, Body, Icon, CheckBox, Text } from 'native-base';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import MainWrapper from '../../components/MainWrapper';
import RepoItem from '../../components/RepoItem';

import { clearSearchRepositories, searchRepositories } from '../../redux/search/actions';

class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryText: '',
            page: 1,
            searchScrollLoading: false,
            sort: '',
            canLoadMoreRepo: true
        };
    }

    handleShowWebViewModal = repoUrl => {
        Navigation.showOverlay({
            component: {
                id: 'ModalScreen',
                name: 'ModalScreen',
                passProps: {
                    url: repoUrl
                }
            }
        });
    };

    handleTextTyping = text => {
        this.setState({ queryText: text });
    };

    handleSideMenu = () => {
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
    };

    handleSearch = () => {
        Keyboard.dismiss();
        if (this.state.queryText) {
            const params = {
                q: this.state.queryText + 'in:name',
                page: 1,
                per_page: 15,
                sort: this.state.sort
            };
            this.props.onSearch(params).then(() => {
                this.flatList.scrollToOffset({ y: 0, animated: false });
            });
        } else {
            this.props.clearSearchRepositories();
            this.flatList.scrollToOffset({ y: 0, animated: false });
        }
    };

    handleLoadMore = () => {
        if (!this.state.searchScrollLoading && this.state.canLoadMoreRepo && this.props.search.repositories.length >= 15) {
            this.setState(prevState => ({
                searchScrollLoading: true,
                page: prevState.page + 1
            }), () => {
                const params = {
                    q: this.state.queryText + 'in:name',
                    page: this.state.page,
                    per_page: 15,
                    sort: this.state.sort
                };
                this.props.onSearch(params, true)
                    .then(response => {
                        if (response.data.items.length < 15) {
                            this.setState({ canLoadMoreRepo: false, searchScrollLoading: false });
                        } else {
                            this.setState({ searchScrollLoading: false });
                        }
                    });
            });
        }
    };

    handleSortByStars = () => {
        this.setState(prevState => ({
            sort: prevState.sort === 'stars' ? '' : 'stars'
        }));
    };

    handleSortByForks = () => {
        this.setState(prevState => ({
            sort: prevState.sort === 'forks' ? '' : 'forks'
        }));
    };

    keyExtractor = (item, index) => item.id.toString();

    renderRepo = ({ item }) => {
        return (
            <RepoItem
                name={item.name}
                description={item.description}
                avatarUrl={item.owner.avatar_url}
                repoUrl={item.html_url}
                starsCount={item.watchers_count}
                forksCount={item.forks_count}
                handleShowWebViewModal={this.handleShowWebViewModal}
            />
        );
    };

    renderScrollActivityIndicator = () => {
        if (this.state.searchScrollLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }
        return null;
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
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 10 }}>
                        <Item rounded style={{ marginTop: 15, marginBottom: 10 }}>
                            <Input
                                placeholder="Repo name..."
                                onChangeText={this.handleTextTyping}
                                value={this.state.queryText}
                            />
                            <Button
                                disabled={this.props.search.searchLoader}
                                transparent
                                onPress={this.handleSearch}
                            >
                                {
                                    this.props.search.searchLoader
                                        ? <ActivityIndicator style={{ marginRight: 10 }} />
                                        : <Icon name='search' />
                                }
                            </Button>
                        </Item>
                        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    style={{paddingBottom: 3, marginRight: 20}}
                                    checked={this.state.sort === 'stars'}
                                    color={'black'}
                                    onPress={this.handleSortByStars}
                                />
                                <Text>Sort by Stars</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox
                                    style={{paddingBottom: 3, marginRight: 20}}
                                    checked={this.state.sort === 'forks'}
                                    color={'black'}
                                    onPress={this.handleSortByForks}
                                />
                                <Text>Sort by Forks</Text>
                            </View>
                        </View>
                        <FlatList
                            ref={flatList => this.flatList = flatList}
                            style={{ flex: 1, width: '100%' }}
                            data={this.props.search.repositories}
                            extraData={this.state}
                            onEndReached={this.handleLoadMore}
                            onEndThreshold={0.1}
                            keyExtractor={this.keyExtractor}
                            ListFooterComponent={this.renderScrollActivityIndicator}
                            renderItem={this.renderRepo}
                        />
                    </View>
                </Container>
            </MainWrapper>
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
        onSearch: (params, loadMore) => {
            return new Promise((resolve, reject) => {
                dispatch(searchRepositories({params, resolve, reject, loadMore}))
            })
        },
        clearSearchRepositories: () => dispatch(clearSearchRepositories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
