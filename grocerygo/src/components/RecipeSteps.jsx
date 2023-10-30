import React from "react";
import { Text, View } from "react-native";

const RecipeSteps = ({title, steps}) => {
    return (
        <View className='p-4 border-2 rounded-lg mb-3'>
            <Text className='font-bold text-md'>{title}:</Text>
            {steps.map((step=>{
                return(
                    <Text className='text-sm'>{`\u2022 ${step}`}</Text>
                )
            }))}
        </View>
    )
}

export default RecipeSteps;