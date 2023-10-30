import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductCategoryBox = ({ image, categoryname }) => {
  return (
    <TouchableOpacity className="w-36 h-50 border-2 border-black rounded-lg p-4 mt-3 mr-2">
      <Image className="h-20 w-full" source={image} />
      <Text style={{color:'black'}} className="text-lg text-center">{categoryname}</Text>
    </TouchableOpacity>
    
  );
};

export default ProductCategoryBox;