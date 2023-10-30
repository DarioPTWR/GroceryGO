import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

const OfferButton = ({ onPress, discountText, itemText, storeText, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row w-11/12 rounded-lg items-center h-14 mt-9" >
      <View>
        <Image style={{resizeMode: 'contain', height: 90, width: 100,}} source={image} />
      </View>
      <View>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'red' }}>{discountText}</Text>
        <Text style={{ fontSize: 17 }}>{itemText}</Text>
        <Text style={{ fontSize: 17, color: 'darkgrey' }}>{storeText}</Text>
        <View style={{ height: 1, backgroundColor: 'grey', marginTop: 8, marginBottom: 8 }}></View>
      </View>
      <View className="item-end ml-auto mr-2">
        <Text className="text-4xl text-center">{'+'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OfferButton;