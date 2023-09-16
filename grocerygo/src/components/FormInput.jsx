import { Text, TextInput, View } from "react-native";
import React from "react";

const FormInput = ({ name, input, setInput, secure, validate }) => {
  return (
    <View>
      <Text className="text-rose-500">{name}</Text>
      <TextInput
        className="h-10 border-b-2 text-lg mb-2"
        secureTextEntry = { secure }
        onChange={text => {
          setInput(text.nativeEvent.text)
          validate(text.nativeEvent.text)
        }}
        value={input}
      />
    </View>
  );
};

export default FormInput;
