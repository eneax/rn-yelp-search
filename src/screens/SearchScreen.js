import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

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

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("€")}
        />
        <ResultsList title="Bit Pricer" results={filterResultsByPrice("€€")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("€€€")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
