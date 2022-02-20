import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const ContinentList = ({ continentName, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.nameText}>{continentName}</Text>
        </TouchableOpacity>
    )
}

export default ContinentList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'white',
        elevation: 3
    },
    nameText: {
        color: colors.primary
    }
})