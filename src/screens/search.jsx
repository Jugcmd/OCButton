import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Pressable,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import topStories from "../constants/articles";

const Search = () => {
  let [fontsLoaded] = useFonts({
    // Load the Roboto font
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredArticles = topStories.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredArticles);
  };

  const navigation = useNavigation();
  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
        <View style={styles.search}>
          <Icon
            name="magnifying-glass"
            style={styles.searchIcon}
            size={30}
            color="#000"
          />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
            onSubmitEditing={handleSearch}
            style={styles.input}
          />
        </View>
        {results.map((result) => (
          <Pressable
            key={result.id}
            onPress={() => navigation.navigate(" ", { id: result.id })}
            style={styles.card}
          > <View style={styles.cardContainer}>
              <Image source={{ uri: result.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{result.title}</Text>
                <Text style={styles.description}>{result.description}</Text>
              </View>
            <Icon name="chevron-right" size={40} style={styles.cardIcon} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
  }
};

const styles = {
  resultCount: {
    fontFamily: "Roboto_400Regular",
    color: "#d9d9d9",
    marginLeft: 10,
    marginBottom: 10,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(193,190,190,0.4)",
    marginVertical: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  input: {
    padding: 20,
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
  },
  searchIcon: {
    color: "#FB5A17",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    height: 125,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: "100%",
    marginRight: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    fontFamily: "Roboto_400Regular",
  },
  cardIcon: {
    marginLeft: 10,
    color: "#d9d9d9",
  },
};

export default Search;
