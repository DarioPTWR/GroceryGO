import React from 'react'
import {View, Text, Pressable} from 'react-native'

const LeftButton = ({onPress,buttonText,buttonNumber}) => {
    return (
      <Pressable onPress={onPress} className ='flex flex-row' >
        <View className="bg-main-green py-2 w-3/5 max-w-lg rounded-md flex flex-row p-2 flex-grow">
          <Text className="text-white text-lg text-left flex-grow">{buttonText}</Text>
          <Text className="text-white text-lg text-right">{buttonNumber}</Text>
        </View>
      </Pressable>
    );
}

export default LeftButton