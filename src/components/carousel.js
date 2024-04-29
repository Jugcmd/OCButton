import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Dimensions.get("window").width;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.img }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 50,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 25,
    justifyContent: "flex-start", // Align header to the top
    height: 300,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    alignSelf: "center",
    borderRadius: 50,
  },
});

export default CarouselCardItem;
