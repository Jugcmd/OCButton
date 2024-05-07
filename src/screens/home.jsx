import React from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/carousel";
import data from "../constants/carousel-data";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import topStories from "../constants/articles"; // Import the top-stories data
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [index, setIndex] = React.useState(0); // Index of the carousel

  const isCarousel = React.useRef(null); // Reference to the carousel

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    // Load the Roboto font
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    // If the fonts are not loaded, return an empty view
    return <View />;
  } else {
    // If the fonts are loaded, return the carousel and top stories
    return (
      <ScrollView>
        <Carousel
          layout="default"
          layoutCardOffset={0}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
          autoplay={true}
          autoplayInterval={1000}
          enableMomentum={false}
          loop={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "#083144",
          }}
          containerStyle={{
            bottom: 30,
            backgroundColor: "rgba(999, 999, 999, 0.8)",
            paddingVertical: 5,
            borderRadius: 30,
            width: "30%",
            alignSelf: "center",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />

        <View>
          <Text style={styles.topStories}>Top Stories</Text>
        </View>
        <View>
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
                <Text style={styles.title}>{story.title}</Text>
                <Text style={styles.description}>{story.description}</Text>
              </Pressable>
            )
          )}
        </View>
      </ScrollView>
    );
  }
};

const styles = {
  topStories: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 20,
    paddingTop: 20,
  },

  image: {
    alignSelf: "center",
    width: ITEM_WIDTH / 1.1,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: ITEM_WIDTH / 2.75,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  title: {
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  description: {
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
    padding: 10,
    paddingTop: 5,
    paddingBottom: 20,
  },

  card: {
    alignSelf: "center",
    width: ITEM_WIDTH / 1.1,
    backgroundColor: "white",
    borderRadius: 50,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "flex-start",
    height: ITEM_WIDTH / 1.45,
    overflow: "hidden",
  },
};

export default Home;
