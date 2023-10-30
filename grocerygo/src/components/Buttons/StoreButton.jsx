import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

const StoreButton = ({ onPress, buttonText, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{width:160, height:100}}
      className="flex flex-row border-solid border-2 rounded-lg items-center">
      <View>
        <Image style={{resizeMode: 'contain', height: 80, width: 150, marginLeft: 3,}} source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default StoreButton;