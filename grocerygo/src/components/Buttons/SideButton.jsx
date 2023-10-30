import React from "react";
import { View, Text, Pressable } from "react-native";

const SideButton = ({ onPress, buttonText }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex flex-col items-end active:scale-95 transition"
    >
      <View className="bg-[#355D4E] py-2 w-1/3 max-w-lg h-12 rounded-3xl mr-8">
        <Text className="text-white text-lg text-center uppercase">{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default SideButton;
