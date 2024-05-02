import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import topStories from "../constants/articles";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

const ArticleView = ({ route }) => {
  const { id } = route.params;
  const article = topStories.find((story) => story.id === id);
  console.log(id);
  console.log(article);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ScrollView
        contentContainerStyle={{ justifyContent: "center" }}
        style={styles.container}
      >
        <Text style={styles.title}>
          {article ? article.title : "Article not found"}
        </Text>
        <Text style={styles.publishedAt}>
          {article ? article.publishedAt : "Article not found"}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: article ? article.image : "" }}
        />
        <Text style={styles.content}>
          {article ? article.content : "Article not found"}
        </Text>
      </ScrollView>
    );
  }
};

const styles = {
  container: {
    padding: 20,
    paddingTop: 50,
    flexDirection: "column",
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto_700Bold",
    marginBottom: 10,
  },
  publishedAt: {
    alignSelf: "flex-start",
    fontFamily: "Roboto_500Medium",
    marginBottom: 10,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  content: {
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
  },
};
export default ArticleView;
