import React from 'react'
import {View, Text, Image, ScrollView, Pressable, TouchableOpacity} from 'react-native'
import {AntDesign} from "@expo/vector-icons";

// Importing the product image
import productImg from '../../assets/product-img.jpg';

// Importing components
import BackButton from "../components/WhiteBackButton"
import Button from "../components/Button"
import { black } from 'tailwindcss/colors';

// Creating the ingredient list
const ingredients = [
    "Milk",
    "Sugar",
    "Skim Milk Powder",
    "Corn Syrup",
    "Stabilizers and Emulsifiers",
    "Artificial Flavoring",
    "Food Coloring",
    "Salt"
]

// Creating the preference list
const preferences = [
    "Lactose Intolerant",
    "Halal",
    "Healthier Choice",
    "Vegetarian",
    "Seafood-Free"
]

const Item = ({navigation}) => {
    return (
        <ScrollView className="h-screen bg-main-background">
            
            <Image className='object-fill flex-1 h-60 mb-5 ' source={productImg} />
            <WhiteBackButton navigation={navigation} />
            <View className='mx-9'>
            <Text style={{fontSize: 16}} className='text-md font-bold text-[#D44C3D] mt-2'>DESSERT : $6.50</Text>
            <View style={{justifyContent:'flex-end', flexDirection:'row'}}><AntDesign name='heart' size={18} color='brown' style={{marginTop:-18}}></AntDesign></View>
            <Text className='text-[#D44C3D]'>_______________________</Text>
            <Text className = 'text-lg font-bold mt-4'>VANILLA OREO ICE CREAM</Text>
            <Text style={{fontSize: 16}} className = 'self-start mt-3'>Experience the joy of Vanilla Oreo Ice Cream. Creamy vanilla ice cream meets vibrant chocolatey swirls for a delightful treat that's both refreshing and indulgent. Taste the chocolate flavours in every scoop.</Text>
            <Text style={{fontSize: 16}} className='font-bold text-[#D44C3D] mt-4'>INGREDIENTS</Text>
            <Text style={{fontSize: 16}} className='text-md self-start'>
                {ingredients.map((ingredient, index) => (
                <Text key={index}>{'\n'}{'\u2022  '}{ingredient}</Text>
                ))}   
            </Text>
            <Text style={{fontSize: 16}} className='font-bold text-[#D44C3D] mt-4'>PREFERENCE MATCH : NOT SUITABLE</Text>
            <Text style={{fontSize: 16}} className='mt-4 mb-6'>
                {preferences.map((preference, index) => (
                <React.Fragment key={index}>
                    <Text /*className={preferenceShouldBeRed(preference) ? 'red-text' : 'normal-text'}*/>{preference}</Text>
                    {index !== preferences.length - 1 ? ', ' : ''}  
                </React.Fragment>
                ))}
            </Text>
            <Button buttonText="Explore Similar Products" />
            <Button buttonText="Add to Cart" />
            </View>
        </ScrollView>
    )
};

export default Item