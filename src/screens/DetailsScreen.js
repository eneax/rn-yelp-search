import React from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";

const DetailsScreen = ({ route }) => {
  const [business, setBusiness] = React.useState(null);
  const { id } = route.params;

  // fetch single business
  const getBusinessDetail = async (id) => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  React.useEffect(() => {
    getBusinessDetail(id);
  }, []);

  console.log(business);

  return (
    <View>
      <Text>business</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
