import React from "react";
import { Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/carousel";
import data from "../constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
};

const styles = {

  topStories: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 20,
    paddingTop: 10,
  },
};

export default Home;
