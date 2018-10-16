import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import styles from "./styles";

const rows = [
  {
    id: 1,
    author: "Emmie Thiel",
    title: "Ring of Bright Water",
    genre: "Short story",
    publisher: "Butterworth-Heinemann",
    year: "1968",
    image_url: null
  },
  {
    id: 2,
    author: "Christopher Pike",
    title: "Scavenger Hunt",
    genre: "other",
    publisher: "Pocket Books",
    year: "1989",
    image_url: null
  },
  {
    id: 3,
    author: "Lois Duncan",
    title: "Locked in time",
    genre: "suspense",
    publisher: "Little, Brown",
    year: "1985",
    image_url: "http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg"
  },
  {
    id: 4,
    author: "Christopher Pike",
    title: "Scavenger Hunt",
    genre: "suspense",
    publisher: "Pocket Books",
    year: "1989",
    image_url: "http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
  },
  {
    id: 5,
    author: "Christopher Pike",
    title: "Scavenger Hunt",
    genre: "suspense",
    publisher: "Pocket Books",
    year: "1989",
    image_url: "http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
  },
  {
    id: 6,
    author: "Paula Hawkins",
    title: "The Girl on the Train\n",
    genre: "suspense",
    publisher: "Riverhead Books",
    year: "2015",
    image_url: "http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
  },
  {
    id: 7,
    author: "Anthony Doerr",
    title: "All the Light We Cannot See",
    genre: "suspense",
    publisher: "Scribner",
    year: "2014",
    image_url: "http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
  },
  {
    id: 8,
    author: "John Katzenbach",
    title: "The analyst",
    genre: "thriller",
    publisher: "Ballantine Books",
    year: "2003",
    image_url:
      "http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg"
  },
  {
    id: 9,
    author: "Andy Weir",
    title: "The Martian",
    genre: "fiction",
    publisher: "Crown Publishing Group",
    year: "2011",
    image_url:
      "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg"
  }
];

const extractKey = ({ id }) => id;

class ScreenOne extends Component {
  renderItem = ({ item }) => {
    const img = item.image_url;

    if (img === null) {
      return (
        <View style={styles.container}>
          <View style={styles.circle} />
          <View>
            <Text style={styles.row}>{item.title}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.author}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={{
              uri: img
            }}
            style={{ width: 40, height: 40 }}
          />
          <View>
            <Text>{item.title}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.author}</Text>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.screen}>Screen One</Text>
        <FlatList
          styles={styles.container}
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </ScrollView>
    );
  }
}

export default ScreenOne;