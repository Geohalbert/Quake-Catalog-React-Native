import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function QueryList(props) {
  const { quakes } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QueryList</Text>
      <View style={styles.listContainer}>
        {quakes.map(quake => {
          return (
            <View style={styles.quakeContainer}>
              <Text style={styles.text}>{quake.properties.mag}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 300, marginBottom: 5 },
  title: {
    fontSize: 16
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  quakeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20
  },
  text: {
    paddingHorizontal: 5
  }
});
