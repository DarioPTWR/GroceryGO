import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";



// add a button for each preference in the preferences array
const PreferenceButton = ({ preference, isSelected, onPress, image }) => {
  return (
    <TouchableOpacity
      className="border-solid border-2 m-3 p-3 rounded-lg items-center w-2/5 p-4 mx-4 bg-white"
      // onPress is a function that takes in a preference and toggles it
      onPress={() => onPress(preference)}
    >
      <View className="flex items-center">
        {/* This View contains the image and text */}
        <Image className=" w-10 h-10 " source={image} />
        <Text className="text-lg text-center">{preference}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PreferenceButton;