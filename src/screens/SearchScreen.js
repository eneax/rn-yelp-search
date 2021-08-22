import React from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [results, setResults] = React.useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "berlin",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
