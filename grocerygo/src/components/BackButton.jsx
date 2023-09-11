import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const BackButton = ({ navigation }) =>  {
    return (
        <Pressable
            className="self-start ml-4"
            onPress={()=>{
                navigation.goBack();
            }}
        >
            <AntDesign name='arrowleft' size={34} color='black'/>
        </Pressable>
    )
}

export default BackButton;