import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '50%',
        borderRadius: 15,
        elevation: 3
    },
    title: {
        textAlign: 'center',
        fontFamily: 'montserratMedium',
        paddingVertical: 15,
        fontSize: 15,
        color: 'white'
    }
})