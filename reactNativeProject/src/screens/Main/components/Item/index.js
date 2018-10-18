import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

function Item({ img, title, author, genre, navigation }) {
  const image =
    img === null ? (
      <View style={styles.circle} />
    ) : (
      <Image source={{ uri: img }} style={styles.image} />
    );

  return (
    <View style={styles.list}>
      {image}
      <TouchableHighlight
        onPress={() =>
          navigation.push("Details", {
            author: author,
            title: title,
            genre: genre
          })
        }
      >
        <View>
          <Text>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

Item.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Item;
