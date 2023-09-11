import { Pressable } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";

export default function backButton(){
  return (
    <Pressable
      className="self-start mx-6"
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
      <Icon
        name="long-arrow-left"
        color="black"
        type="font-awesome"
        className="text-4xl"
      />
    </Pressable>
  )
}