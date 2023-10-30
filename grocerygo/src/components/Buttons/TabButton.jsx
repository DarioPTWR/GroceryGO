import React from "react";
import { View, Text, Pressable } from "react-native";

const TabButton = ({ onPress, buttonText }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex flex-col items-end active:scale-95 transition"
    >
      <View style={{width:115, height:45}} className="border-solid border-2 py-2 w-3/4 mt-4 rounded-xl mx-1.5 border-black">
        <Text className="text-black text-lg text-center">{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default TabButton;