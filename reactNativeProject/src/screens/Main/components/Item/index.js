import React, { Fragment } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import PropTypes from "prop-types";
import routes from "../../../../constants/routes";

function Item({ img, title, author, genre, navigation }) {
  const image = img ? (
    <Image source={{ uri: img }} style={styles.image} />
  ) : (
    <View style={styles.circle} />
  );

  return (
    <View style={styles.list}>
      {image}
      <TouchableHighlight
        onPress={() =>
          navigation.push(routes.Details, {
            author: author,
            title: title,
            genre: genre
          })
        }
      >
        <Fragment>
          <Text>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
}

Item.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default withNavigation(Item);
