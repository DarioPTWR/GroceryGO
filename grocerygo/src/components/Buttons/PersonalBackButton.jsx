import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const PersonalBackButton = ({ setFalse, setTrue }) =>  {
  return (
    <Pressable
      className="absolute -top-80 -left-5 -mt-3"
      onPress={()=>{
        setFalse(false);
        setTrue(true);
      }}
    >
      <AntDesign name='arrowleft' size={34} color='black'/>
    </Pressable>
  )
}

export default PersonalBackButton;