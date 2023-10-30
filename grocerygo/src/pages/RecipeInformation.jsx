import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RecipeIngredient from "../components/RecipeIngredient";
import RecipeSteps from "../components/RecipeSteps";

import ChickenImage from "../../assets/chicken.png";
import RiceImage from "../../assets/rice.png";
import CucumberImage from "../../assets/cucumber.png";
import SoySauceImage from "../../assets/soysauce.png";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/Buttons/Button";
import RecipeButton from "../components/Buttons/RecipeButton";


const RecipeInformation = () => {
    return(
        <SafeAreaView className='bg-main-background'>
            <ScrollView>
                <View className='w-11/12 mx-auto'>
                    <Image source={require("../../assets/recipe.png")} className='w-80 h-80 mx-auto rounded-lg mt-4'/>
                    <Text className='text-xl mt-2 font-bold'>STEAMED HAINANESE BONELESS CHICKEN RICE</Text>
                    <Text className='text-md mt-2 mb-3'>FOR 1 PAX | 20 MINUTES PREP TIME | 1 HOUR COOK TIME</Text>
                    <View className='border-b'/>
                    <Text className='font-bold text-lg mt-3 mr-1 mb-1'>INGREDIENTS</Text>
                    <View className='flex flex-row mb-3'>
                        <View className='border-2 rounded-md'>
                            <Text className='p-0.5 text-xs font-bold rounded-lg text-[#9a9a9a]'>DAIRY-FREE</Text>
                        </View>
                        <View className='border-2 rounded-md ml-2'>
                            <Text className='p-0.5 text-xs font-bold rounded-lg text-[#9a9a9a]'>PROTEIN-BASED</Text>
                        </View>
                        <View className='border-2 rounded-md ml-2'>
                            <Text className='p-0.5 text-xs font-bold rounded-lg text-[#9a9a9a]'>&lt;500 CALORIES</Text>
                        </View>
                    </View>
                    <RecipeIngredient image={ChickenImage} category="protein" storeName="NTUC FAIRPRICE" ingredientName="Sierra Boneless Chicken Thigh"/>
                    <RecipeIngredient image={RiceImage} category={"GRAIN"} storeName={"NTUC FAIRPRICE"} ingredientName={"Royal Umbrella Rice 2kg"}/>
                    <RecipeIngredient image={CucumberImage} category={"VEGETABLE"} storeName={"NTUC FAIRPRICE"} ingredientName={"Green Malaysian Cucumber"}/>
                    <RecipeIngredient image={SoySauceImage} category={"SAUCES"} storeName={"NTUC FAIRPRICE"} ingredientName={"Amoy Supreme Dark Soy Sauce"}/>
                    <Text className='uppercase font-bold text-lg mb-2'>Preparation Steps</Text>
                    <RecipeSteps title='POACH THE CHICKEN' steps={["Season and stuff the chicken with ginger and green onions.","Boil the chicken until it reaches an internal temperature of 165°F.","Cool the chicken in an ice water bath."]}/>
                    <RecipeSteps title='PREPARE THE RICE' steps={["Rinse jasmine rice and sauté it with ginger and garlic.","Cook the rice with chicken broth until done."]}/>
                    <RecipeSteps title='MAKE DIPPING SAUCE' steps={["Mix soy sauce, chili sauce, ginger paste, and a bit of sesame oil in small bowls."]}/>  
                    <RecipeSteps title='SERVE HOT' steps={["Slice the chicken and serve it with rice, cucumber, and cilantro.","Provide dipping sauce on the side."]}/>  
                    <RecipeButton buttonText={'ADD INGREDIENTS TO CART'}/>
                    <RecipeButton buttonText={'VIEW MEAL DASHBOARD'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecipeInformation;