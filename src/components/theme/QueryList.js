import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import ListItem from "./ListItem";

export default function QueryList(props) {
  const { quakes } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>QueryList</Text>
      <ScrollView>
        {quakes.map((quake, index) => {
          return (
            <View style={styles.quakeContainer} key={index}>
              <ListItem quake={quake} index={index} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15
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
