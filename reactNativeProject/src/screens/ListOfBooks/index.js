import React from "react";
import { Text, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import Item from "../Main/components/Item";
import books from "../../constants/books";

const extractKey = ({ id }) => id;

function ListOfBooks() {
  return (
    <ScrollView>
      <Text style={styles.container}>Screen One</Text>
      <FlatList
        styles={styles.list}
        data={books}
        renderItem={({ item }) => (
          <Item img={item.image_url} title={item.title} author={item.author} />
        )}
        keyExtractor={extractKey}
      />
    </ScrollView>
  );
}

export default ListOfBooks;
