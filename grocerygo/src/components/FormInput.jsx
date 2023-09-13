import {Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const FormInput = ({Title,Input,setInput}) => {
    let secure = false;
    const [error] = useState("");
    if (Title == "Password") {
        secure = true;
    }
    return (
        <View>
            <Text className="text-rose-500">{Title}</Text>
            <TextInput className="h-10 border-b-2 text-lg mb-2 mt-1" autoCorrect={true} placeholder={'Enter your ' + Title} secureTextEntry={secure} onChange={(Input)=>{setInput(Input)}}/>
            {
                error && (<Text>{error}</Text>)
            }
        </View>
    )
}

export default FormInput