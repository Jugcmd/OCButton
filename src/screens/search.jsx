import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import topStories from "../constants/articles";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredArticles = topStories.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredArticles);
  };

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search..."
        onSubmitEditing={handleSearch}
      />
      {results.map((result) => (
        <Pressable key={result.id} onPress={() => console.log(result)}>
          <Text>{result.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Search;
