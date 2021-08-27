import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen({ route }) {
  const { id } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default DetailsScreen;
