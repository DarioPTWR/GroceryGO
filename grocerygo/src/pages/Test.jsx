import React from 'react';
import { Text, View } from 'react-native';
import BackButton from '../components/BackButton';

export default function Test({ navigation }) {
  return (
    <View className="mt-20">
      <BackButton navigation={navigation}/>
      <Text>Test page</Text>
    </View>
  )
}