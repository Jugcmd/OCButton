// ArticleListScreen.jsx
import React from 'react';
import { Button, View } from 'react-native';

const ArticleListScreen = ({ navigation, articles }) => (
  <View>
    {articles.map(article => (
      <Button
        key={article.id}
        title={article.title}
        onPress={() => navigation.navigate('ArticleView', { id: article.id })}
      />
    ))}
  </View>
);

export default ArticleListScreen;