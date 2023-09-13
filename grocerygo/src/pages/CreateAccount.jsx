import React, { useState } from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

// Import components
import BackButton from '../components/BackButton';
import FormInput from '../components/FormInput';
import AddImage from '../components/AddImage';
import Button from '../components/Button';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView className="h-screen bg-[#fff4ec]">
            <KeyboardAvoidingView behavior="position">
                <BackButton navigation={navigation}/>
                <Text className="font-bold text-6xl mt-4 mx-9">Create Account</Text>
                <Text className="mx-10 text-xl">Start Grocery Shopping with us.</Text>
                <AddImage/>
                <View className="w-80 mx-auto mt-4 mb-8">
                    <FormInput Title={"Username"} Input={username} setInput={setUsername}/>
                    <FormInput Title={"Email"} Input={email} setInput={setEmail}/>
                    <FormInput Title={"Password"} Input={password} setInput={setPassword}/>
                </View>
            </KeyboardAvoidingView>
            <Button buttonText="Sign Up" onPress={()=>{console.log(email)}}/>
        </SafeAreaView>
    )
}

export default CreateAccount