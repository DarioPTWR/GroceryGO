import React from 'react'
import {View, Text, Pressable, Image} from 'react-native'
import Button from '../components/Button'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="h-screen bg-[#fff4ec]">
            <Text className="font-bold text-6xl mt-9 mx-9">Sign In</Text>
        </SafeAreaView>
    )
}

export default SignIn