import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const AddToCartButton = ({ addtocart, isSelected, onPress, image }) => {
  return (
    <TouchableOpacity
      className="rounded-lg items-center bg-transparent"
      // onPress is a function that takes in a preference and toggles it
      onPress={() => onPress(addtocart)}
    >
      <View className="flex items-center">
        {/* This View contains the image icon*/}
        <Image className=" w-8 h-20 " source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default AddToCartButton;