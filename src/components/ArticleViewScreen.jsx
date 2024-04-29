// ArticleViewScreen.jsx
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const ArticleViewScreen = ({ route }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the article from your API
    fetch(`/api/articles/${route.params.id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [route.params.id]);

  if (!article) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{article.title}</Text>
      <Text>{article.content}</Text>
    </View>
  );
};

export default ArticleViewScreen;