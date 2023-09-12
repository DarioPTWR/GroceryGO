import { Text, TextInput, View } from "react-native";
import React from "react";

const FormInput = ({ name, setInput }) => {
  return (
    <View>
      <Text className="text-rose-500">{name}</Text>
      <TextInput
        className="h-10 border-b-2 text-lg mb-2"
        onChange={(input) => {
          setInput(input);
        }}
      />
    </View>
  );
};

export default FormInput;
