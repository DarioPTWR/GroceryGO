import React from "react";
import { Image, View, Text } from "react-native";

const RecipeIngredient = ({image, category, storeName , ingredientName}) => {
    return (
        <View className='flex flex-row mb-4'>
            <View className='w-20 h-20'>
                <Image source={image} className='w-fit h-fit mx-auto'/>
            </View>
            <View className='justify-center ml-7'>
                <Text className='text-[#9a9a9a] uppercase mb-2 font-semibold'>{category} | {storeName}</Text>
                <Text className='uppercase'>{ingredientName}</Text>
            </View>
        </View>
    )
}

export default RecipeIngredient;