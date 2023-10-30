import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

const ProfileButton = ({ onPress, buttonText, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row border-solid border-2 w-80 rounded-lg   items-center h-14"
    >
      <View>
        <Image className="object-contain h-10 w-10 ml-3" source={image} />
      </View>
      <View>
        <Text className=" text-lg text-center ml-10">{buttonText}</Text>
      </View>
      <View className="item-end ml-auto mr-5">
        <Text className="text-lg text-center ">{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;