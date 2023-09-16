import React, { useState } from 'react'
import {View, Text, Pressable, Image, Touchable } from 'react-native'
import Button from '../components/Button'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

// Import components
import BackButton from '../components/BackButton';
import FormInput from '../components/FormInput';

const onPressSignIn = () => {
    console.log("Signed In")
};

const SignIn = () => {
    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()
    return (
        <SafeAreaView className="h-screen bg-[#fff4ec]">
            <BackButton navigation={navigation}/>
            <Text className="font-bold text-6xl mt-9 mx-9">Welcome Back!</Text>
            <Text className="mx-10 text-xl mb-20">We're glad to have you back.</Text>
            <View className="w-80 mx-auto mb-10">
                    <FormInput name={"Email / Username"} Input={emailUsername} setInput={setEmailUsername}/>
                    <FormInput name={"Password"} Input={password} secureTextEntry={true} setInput={setPassword}/>
                    <GestureHandlerRootView>
                        <TouchableOpacity>
                            <Text>Forgot Password?</Text>
                        </TouchableOpacity>
                    </GestureHandlerRootView>
            </View>
            <Button buttonText="Sign In" onPress={onPressSignIn}/>
        </SafeAreaView>
    )
}

export default SignIn