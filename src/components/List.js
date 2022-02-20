import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const List = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 15,
        backgroundColor: 'white',
        elevation: 3
    },
    nameText: {
        color: colors.primary,
        fontFamily: 'MontserratMedium'
    }
})