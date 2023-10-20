import React from "react";
import { View, Text, Pressable } from "react-native";

const RedButton = ({ onPress, buttonText }) => {
  return (
    <Pressable onPress={onPress} className="items-center">
      <View
        style={{ width: 310 }}
        className="bg-[#AC3333] py-2 mt-2 rounded-md"
      >
        <Text
          style={{ fontSize: 16 }}
          className="text-white text-md text-center"
        >
          {buttonText}
        </Text>
      </View>
    </Pressable>
  );
};

export default RedButton;
