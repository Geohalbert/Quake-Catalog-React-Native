import React from "react";
import { Text, View } from "react-native";

export default function ListItem(props) {
  const { index } = props;

  const { mag, place, time, ids } = props.quake.properties;
  const coor = props.quake.geometry.coordinates;

  return (
    <View>
      <Text index={index}>
        {index + 1}. Mag: {mag}
      </Text>
      <Text>Place: {place}</Text>
      <Text>Time: {time}</Text>
      <Text>Ids: {ids}</Text>
      <Text>Coordinates:</Text>
      <Text>Lng: {coor[0]}</Text>
      <Text>Lat: {coor[1]}</Text>
      <Text>Depth: {coor[2]}</Text>
    </View>
  );
}
