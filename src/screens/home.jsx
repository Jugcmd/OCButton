import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleListScreen from "../components/ArticleListScreen";
import ArticleViewScreen from "../components/ArticleViewScreen";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
import articles from "../../App"; // Import the top-stories data
import { shadow } from "react-native-paper";

const Stack = createStackNavigator();

const Home = ({ articles }) => {
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
      <SafeAreaView>
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
            autoplayInterval={10000}
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
              backgroundColor: "rgba(119,116,116,0.2)",
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
          {articles.map((article) => (
            <TouchableOpacity
              key={article.id}
              onPress={() => navigation.navigate("ArticleView", { article })}
            >
              <Text>{article.title}</Text>
            </TouchableOpacity>
          ))}
          <Stack.Navigator>
            <Stack.Screen name="ArticleList">
              {(props) => <ArticleListScreen {...props} articles={articles} />}
            </Stack.Screen>
            <Stack.Screen name="ArticleView" component={ArticleViewScreen} />
          </Stack.Navigator>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = {
  topStories: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 30,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
};

export default Home;
