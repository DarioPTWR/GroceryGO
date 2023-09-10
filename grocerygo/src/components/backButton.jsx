import { Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import React from "react";

export default function BackButton({ navigation }){
  return (
    <Pressable
      className="mt-12 self-start ml-4"
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesign name="arrowleft" size={34} color="black" />
    </Pressable>
  )
}