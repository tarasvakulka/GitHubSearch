import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default DrawerItem = (props) => {
    const { label } = props;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

DrawerItem.propTypes = {
    label: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 0,
        width: '100%',
    },
    label: {
        fontSize: 23,
        fontWeight: '100',
        color: '#FAFAFC',
        marginHorizontal: 20
    }
});