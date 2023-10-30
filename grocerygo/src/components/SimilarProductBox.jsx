import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { React, useState } from "react";

const SimilarProductBox = ({ product }) => {
  const [heartPressed, setHeartPressed] = useState(false);

  const toggleHeart = () => {
    setHeartPressed(!heartPressed);
  };

  return (
    <TouchableOpacity className="w-36 h-50 border-2 border-black rounded-lg p-4 m-4">
      <View className="flex flex-row justify-between">
        <TouchableOpacity className="ml-auto mb-1" onPress={toggleHeart}>
          <AntDesign
            name={heartPressed ? "heart" : "hearto"} // Change icon name based on state
            size={15}
            color={heartPressed ? "red" : "black"} // Change color based on state
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: `https://spoonacular.com/productImages/${product.id}-636x393.${product.imageType}`,
        }}
        className="w-full h-10 object-cover"
      />
      <Text className="text-xs font-bold mt-1">{product.productType}</Text>
      <Text className="text-xs">{product.title}</Text>
      <Text className="text-base font-bold mt-1">${product.price}</Text>
    </TouchableOpacity>
  );
};

export default SimilarProductBox;
