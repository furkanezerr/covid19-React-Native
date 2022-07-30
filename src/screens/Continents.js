import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
//Redux
import { useDispatch } from "react-redux";
import * as covidActions from "../../store/actions/covidStatistics";
//Components
import Header from "../components/Header";
import ContinentData from "../../data/Continents";
import List from "../components/List";
import gradients from "../../constants/gradients";

const Continents = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(covidActions.fetchAllData());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={gradients.gradientGray} style={{ flex: 1 }}>
        <Header title="Continents" />
        <FlatList
          data={ContinentData}
          renderItem={({ item }) => {
            return (
              <List
                item={item}
                onPress={() =>
                  navigation.navigate("CountryList", {
                    continent: item.name,
                  })
                }
              />
            );
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default Continents;
