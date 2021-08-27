import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

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

  if (!business) {
    return null;
  }

  return (
    <View>
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.imageStyles} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 200,
    width: 200,
  },
});

export default DetailsScreen;
