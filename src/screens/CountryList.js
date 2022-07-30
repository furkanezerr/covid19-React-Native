import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// Components
import Header from "../components/Header";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
// Modal
import DetailModal from "../components/modals/DetailModal";
// Redux
import { useSelector, useDispatch } from "react-redux";
import * as covidActions from "../../store/actions/covidStatistics";
// colors
import colors from "../../constants/colors";
import gradients from "../../constants/gradients";

const CountryList = ({ route }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  const continent = route.params.continent;

  const data = useSelector((state) => state.covidData.filteredBySearch);

  useEffect(() => {
    dispatch(covidActions.setContinentData(continent));
    setLoading(false);
  }, [dispatch, continent]);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={gradients.gradientGray} style={{ flex: 1 }}>
        <Header title={continent} />
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <SearchBar
              onChangeText={(text) =>
                dispatch(covidActions.searchHandler(text))
              }
            />
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <View>
                    <List
                      item={item}
                      onPress={() => {
                        setShowDetail(true);
                        setDetailData(item);
                      }}
                    />
                  </View>
                );
              }}
            />
            <DetailModal
              visible={showDetail}
              data={detailData}
              onCancel={() => {
                setShowDetail(false);
                setDetailData();
              }}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default CountryList;
