import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useResults from "../hooks/useResults";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '€' || '€€' | '€€€'
    return results.filter((result) => result.price === price);
  };

  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>

      <ResultsList title="Cost Effective" results={filterResultsByPrice("€")} />
      <ResultsList title="Bit Pricer" results={filterResultsByPrice("€€")} />
      <ResultsList title="Big Spender" results={filterResultsByPrice("€€€")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
