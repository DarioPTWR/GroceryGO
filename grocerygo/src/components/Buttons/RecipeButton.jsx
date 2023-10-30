import React from "react";
import { View, Text, Pressable } from "react-native";

const RecipeButton = ({ onPress, buttonText }) => {
  return (
    <Pressable
      onPress={onPress}
      className="mx-auto -ml-3 items-center active:scale-95 transition w-96"
    >
      <View className="bg-[#355D4E] py-2 w-10/12 max-w-lg h-12 rounded-full mb-2">
        <Text className="text-white font-semibold text-lg text-center">{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default RecipeButton;
