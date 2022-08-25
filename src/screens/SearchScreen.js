import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(); //Instantiate from useResults hook to SearchScreen

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      {/* ScrollView daca nu incape pe ecran sa putem da scroll in jos */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Mancare Low Budget"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Mancare Buget Mediu"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Mancare Buget Mare"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
