import React from "react";
import { ScrollView, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import topStories from "../constants/articles";

const News = () => {
  let [fontsLoaded] = useFonts({
    // Load the Roboto font
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
        <Text style={styles.heading}>News</Text>

        <View style={styles.cardContainer}>
          {topStories.map(
            (
              story // Map over the top stories and display them
            ) => (
              <Pressable
                key={story.id}
                style={styles.card}
                onPress={
                  () => navigation.navigate(" ", { id: story.id }) //Navigate to the article view screen with the id of the story
                }
              >
                <Image source={{ uri: story.image }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{story.title}</Text>
                  <Text style={styles.description}>{story.description}</Text>
                </View>
                <Icon
                  name="chevron-right"
                  size={40}
                  style={styles.icon}
                />
              </Pressable>
            )
          )}
        </View>
      </ScrollView>
    );
  }
};

const styles = {
  heading: {
    fontSize: 40,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 20,
    paddingTop: 50,
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
  icon: {
    marginLeft: 10,
    color: "#d9d9d9",
  },
};

export default News;
