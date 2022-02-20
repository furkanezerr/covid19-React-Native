import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = ({ onChangeText, value }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        fontFamily: 'MontserratRegular'
    }
})