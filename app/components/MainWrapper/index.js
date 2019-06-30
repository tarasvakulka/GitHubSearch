import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';

import getTheme from '../../themes/native-base-theme/components';
import material from '../../themes/native-base-theme/variables/material';

class MainWrapper extends Component {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                {this.props.children}
            </StyleProvider>
        );
    }

}

export default MainWrapper;