import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

function Item({ img, title, author }) {
  const image = img ? (
    <Image source={{ uri: img }} style={styles.image} />
  ) : (
    <View style={styles.circle} />
  );

  return (
    <View style={styles.list}>
      {image}
      <View>
        <Text>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

Item.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Item;
