import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    screen: {
        marginTop: '15%',
        marginBottom: '5%'
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: colors.primary,
        fontFamily: 'MontserratBold'
    }
})