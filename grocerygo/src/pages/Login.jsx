import React from 'react'
import {View, Text, Pressable, Image} from 'react-native'
import Button from '../components/Button'

const Login = ({ navigation }) => {
    return (
        <View className="h-screen justify-center bg-main-background"> 
            <Image className="object-fill w-32 h-32 mx-auto mb-2" source={require("../../assets/grocerygo.jpg")}/>
            <Text className="text-5xl font-extrabold text-[#1d805b] mx-auto">GROCERYGO</Text>
            <Text className="text-center mb-20 font-bold text-lg bg-[#B43737] text-white p-2 mx-3 mt-5">YOUR ULTIMATE GROCERY COMPANION</Text>
            <Button onPress={()=>{navigation.navigate("SignIn")}} buttonText={"Sign In"}/>
            <Pressable onPress={()=>{navigation.navigate("CreateAccount")}}><Text className='text-center text-lg text-[#355D4E] left-7'>→ Or create an account</Text></Pressable>
        </View>
    )
}

export default Login