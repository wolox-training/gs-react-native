import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

function Item({ Img, title, author }) {
  let image;
  if (Img === null) {
    image = <View style={styles.circle} />;
  } else {
    image = <Image source={{ uri: Img }} style={styles.image} />;
  }
  return (
    <View style={styles.list}>
      {image}
      <View>
        <Text>{title}</Text>
        <Text style={{ fontWeight: "bold" }}>{author}</Text>
      </View>
    </View>
  );
}

Item.propTypes = {
  Img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};

export default Item;
