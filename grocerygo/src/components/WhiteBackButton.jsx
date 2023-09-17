import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const WhiteBackButton = ({ navigation }) => {
  return (
    <Pressable
      className="self-start ml-4"
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign
        name="arrowleft"
        style={{ marginTop: -240, marginLeft: 5 }}
        size={20}
        color="white"
      ></AntDesign>
    </Pressable>
  );
};

export default WhiteBackButton;
