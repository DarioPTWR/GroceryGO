import {Text, TextInput, View } from 'react-native';
import React from 'react';

const FormInput = ({Title,Input,setInput}) => {
    return (
        <View>
            <Text className="text-rose-500">{Title}</Text>
            <TextInput className="h-10 border-b-2 text-lg mb-2 mt-1" onChange={(Input)=>{setInput(Input)}}/>
        </View>
    )
}

export default FormInput