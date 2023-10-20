import { Text, Image, TextInput, View } from "react-native";
import React from "react";

const FormInput = ({ name, input, setInput, secure, image, validate }) => {
  return (
    <View className="flex-row justify-center align-center flex">
      <Image className="w-8 h-8 my-2 mr-1" source={image}/>
      <TextInput
        className="h-10 border-b-2 w-72 border-[#9F9F9F] text-lg mb-6"
        secureTextEntry = { secure }
        onChange={text=>{
          setInput(text.nativeEvent.text)
          validate(text.nativeEvent.text)
        }}
        value={input}
        placeholder={name}
      />
    </View>
  );
};


export default FormInput;
