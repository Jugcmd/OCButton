import React from "react";
import { View, Text } from "react-native";
import topStories from "../constants/top-stories";

const ArticleView = ({ route }) => {
  const { id } = route.params;
  const article = topStories.find((story) => story.id === id);
  console.log(id);
  console.log(article);

  return (
    <View>
      <Text>{article ? article.title : 'Article not found'}</Text>
    </View>
  );
};

export default ArticleView;