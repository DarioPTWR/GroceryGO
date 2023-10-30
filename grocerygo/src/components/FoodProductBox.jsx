import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const FoodProductBox = ({ image, name, brand, price }) => {
  return (
    <TouchableOpacity className="w-36 h-50 border-2 border-black rounded-lg p-4 mt-3 mr-2">
      <View className="flex flex-row justify-between">
        <TouchableOpacity className=" mb-1">
          <AntDesign name="hearto" size={15} color="red" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="rounded-lg mt-3 ">
      <Image className="w-full h-20 object-cover" source={image} />
    </TouchableOpacity>
      <Text style={{color:'grey'}} className="text-md">{brand}</Text>
      <Text className="text-md font-bold mt-1">{name}</Text>
      <Text className="text-md font-bold mt-1">${price}</Text>
    </TouchableOpacity>
  );
};

export default FoodProductBox;