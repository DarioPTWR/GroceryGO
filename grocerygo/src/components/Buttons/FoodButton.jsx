import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FoodButton = ({Item, Value,setValue}) => {
    return (
        <TouchableOpacity 
            className={`border-solid border-2 p-2 rounded-lg w-36 mr-4 h-fit mt-4 ${Value ? "bg-main-green" : "bg-main-background"}`}
            // onPress is a function that takes in a preference and toggles it 
            onPress={() => {
                if (Value) {
                    setValue(false);
                } else {
                    setValue(true);
                }
            }}
        >
        <Text className={`text-lg text-center ${Value ? "text-main-background" : "text-black"}`}>{Item}</Text>
        </TouchableOpacity>
    )
}

export default FoodButton;