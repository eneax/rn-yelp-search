import React from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "berlin",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
