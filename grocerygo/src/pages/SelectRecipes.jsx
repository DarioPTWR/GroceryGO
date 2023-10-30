import React from "react";
import BackButton from "../components/Buttons/BackButton";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Recipe from "../../assets/recipe.png";
import TabButton from "../components/Buttons/TabButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import RecipeIngredient from "../components/RecipeIngredient";
import ChickenImage from "../../assets/chicken.png";
import RiceImage from "../../assets/rice.png";

const SelectRecipes = ({navigation}) => {
    return (
        <SafeAreaView className='bg-main-background h-screen'>
            <BackButton navigation={navigation}/>
            <Text className="text-center text-lg font-semibold">Your Recipes</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TabButton buttonText={"Main + Sides"} onPress={() => { navigation.navigate("Offers"); }} />
                <TabButton buttonText={"Pastas"} onPress={() => { navigation.navigate("Offers"); }} />
                <TabButton buttonText={"Grains"} onPress={() => { navigation.navigate("Offers"); }} />
            </View>
            <Text className='text-lg text-[#9a9a9a] ml-8 mt-3 mb-3'>500 Results</Text>
            <View className='w-11/12 ml-3'>
                <TouchableOpacity className='w-1/2 border-2 p-2 rounded-lg' onPress={()=>{navigation.navigate("RecipeInformation")}}>
                    <Image source={Recipe} className='w-40 h-40'/>
                    <Text className='text-md'>Steamed Hainanese Boneless Chicken Rice</Text>
                    <Text className='text-md'>&#9733; 4.6 <Text className='text-[#9a9a9a]'>(80)</Text></Text>
                    <View className='border-b'/>
                    <View className='flex flex-row ml-6 mt-1 mb-1'>
                    <Image source={ChickenImage} className='w-16 h-16 ml-6 mx-auto'/>
                    <View className='justify-center ml-7'>
                        <Text className='text-[#9a9a9a] uppercase font-semibold text-xs'>PROTEIN</Text>
                        <Text className='text-xs'>Sierra Boneless Chicken Thigh</Text>
                    </View>
                    </View>
                    <View className='flex flex-row ml-6 mt-1 mb-1'>
                    <Image source={RiceImage} className='w-16 h-16 ml-6 mx-auto'/>
                    <View className='justify-center ml-7'>
                        <Text className='text-[#9a9a9a] uppercase font-semibold text-xs'>GRAIN</Text>
                        <Text className='text-xs'>Royal Umbrella Rice 2kg</Text>
                    </View>
                    </View>
                    <Text className='text-center'>and more...</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SelectRecipes;