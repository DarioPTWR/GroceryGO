import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const NotificationButton = ({ notification, isSelected, onPress, image }) => {
  return (
    <TouchableOpacity
      className="rounded-lg items-center h-15 bg-transparent"
      // onPress is a function that takes in a preference and toggles it
      onPress={() => onPress(notification)}
    >
      <View className="flex items-center">
        {/* This View contains the image icon*/}
        <Image className=" w-20 h-20 " source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationButton;