import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
//Redux
import { useDispatch } from 'react-redux'
import * as covidActions from '../../store/actions/covidStatistics'
//Components
import Header from '../components/Header'
import ContinentData from '../../data/Continents'
import List from '../components/List'

const Continents = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(covidActions.fetchAllData())
    }, [dispatch])

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Continents"
            />
            <FlatList
                data={ContinentData}
                renderItem={({ item }) => {
                    return <List
                        item={item}
                        onPress={() => navigation.navigate('CountryList', {
                            continent: item.name
                        })}
                    />
                }}
            />
        </View>
    )
}

export default Continents