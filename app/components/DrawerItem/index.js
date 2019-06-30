import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default DrawerItem = (props) => {
    const { label } = props;
    const containerStyles = styles.container;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={containerStyles}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

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