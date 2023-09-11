import React from 'react'
import {View, Text, Pressable} from 'react-native'

const Button = ({onPress,buttonText}) => {
    return (
        <Pressable onPress={onPress} className='flex flex-col items-center'>
            <View className="bg-[#355D4E] py-2 w-3/5 max-w-lg rounded-md">
                <Text className="text-white text-lg text-center">{buttonText}</Text>
            </View>
        </Pressable>
    )
}

export default Button