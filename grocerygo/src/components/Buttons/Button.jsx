import React from "react";
import { View, Text, Pressable } from "react-native";

const Button = ({ onPress, buttonText }) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex flex-col items-center active:scale-95 transition"
    >
      <View className="bg-[#355D4E] py-2 w-4/5 max-w-lg h-12 rounded-full mb-6">
        <Text className="text-white text-lg text-center">{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
