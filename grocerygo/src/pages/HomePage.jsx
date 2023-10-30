import { React, useState } from "react";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import SideButton from "../components/Buttons/SideButton";
import TabButton from "../components/Buttons/TabButton";
import PersonalBackButton from "../components/Buttons/PersonalBackButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from 'react-native-elements';
import AddToCartButton from "../components/Buttons/AddToCartButton";
import NotificationButton from "../components/Buttons/NotificationButton";
import ProductCategoryBox from "../components/ProductCategoryBox.jsx";
import FoodProductBox from "../components/FoodProductBox.jsx"

import Poultry from "../../assets/meat.png"
import Fruits from "../../assets/fruits.png"
import Vegetables from "../../assets/vegetables.png"
import Drinks from "../../assets/drinks.png"
import Nuts from "../../assets/nuts.png"
import AddToCart from "../../assets/addtocart.png"
import Notification from "../../assets/notification.png"
import Apple from "../../assets/apple.png"
import Orange from "../../assets/orange.png"
import Broccoli from "../../assets/broccoli.png"
import Strawberry from "../../assets/strawberry.png"
import Salmon from "../../assets/salmon.png"
import Prawn from "../../assets/prawn.png"
import Oyster from "../../assets/oyster.png"

const HomePage =() => {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
            <View style={{ marginTop: 40, marginLeft: 30, marginRight:30, marginBottom: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'grey' }} className="text-lg mt-12">Delivery Address | Now</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop:5 }}>
                    <AddToCartButton onPress={() => {}} image={AddToCart} />
                    <NotificationButton onPress={() => {}} image={Notification} />
                </View>
                </View>
                <Text className="text-lg mb-3">65 Telok Blangah, 430291</Text>
                 {/* Add the SearchBar component below */}
                <SearchBar
                    placeholder='Try "Onion"'
                    onChangeText={(text) => {
                    // Handle search input here
                    }}
                    platform="ios" // You can customize the SearchBar's appearance
                    round
                    inputContainerStyle={{ borderRadius: 50 }} 
                />
                <Text className="text-lg mt-3 font-semibold">Featured Products</Text>
                <Image className='mt-3' source={require('../../assets/featuredbanner.png')} // Replace 'path-to-your-image.jpg' with the actual path to your image
                style={{ width: 330, height: 160, borderRadius: 10, borderWidth:1 }} // Adjust the width and height as needed 
                />

                <Text className="text-lg mt-3 font-semibold">Explore Our Popular Categories</Text>
                <ScrollView horizontal="True" contentContainerStyle={{ width: 760 }}>
                <View className=" flex flex-row overflow-x-scroll ">
                    <ProductCategoryBox image={Fruits} categoryname='Fruits' />
                    <ProductCategoryBox image={Vegetables} categoryname='Vegetables' />
                    <ProductCategoryBox image={Drinks} categoryname='Drinks' />
                    <ProductCategoryBox image={Nuts} categoryname='Nuts' />
                    <ProductCategoryBox image={Poultry} categoryname='Poultry' />
                </View>
                </ScrollView>

                <Text className="text-lg mt-3 font-semibold">Fruits & Vegetables</Text>
                <ScrollView horizontal="True" contentContainerStyle={{ width: 600 }}>
                <View className=" flex flex-row overflow-x-scroll ">
                    <FoodProductBox image={Apple} brand='Fruit' name='Marigold Apple 200g' price='2.50' />
                    <FoodProductBox image={Orange} brand='Fruit' name='Marigold Orange 200g' price='2.50' />
                    <FoodProductBox image={Broccoli} brand='Vegetable' name='Leafy Malaysian Broccoli' price='2.50' />
                    <FoodProductBox image={Strawberry} brand='Fruit' name='Korean Strawberries' price='4.00' />
                </View>
                </ScrollView>

                <Text className="text-lg mt-3 font-semibold">Meat & Seafood</Text>
                <ScrollView horizontal="True" contentContainerStyle={{ width: 450 }}>
                <View className=" flex flex-row overflow-x-scroll ">
                    <FoodProductBox image={Salmon} brand='Fish' name='Norwegian Salmon' price='10.00' />
                    <FoodProductBox image={Prawn} brand='Seafood' name='Beach Tender Prawns' price='2.50' />
                    <FoodProductBox image={Oyster} brand='Seafood' name='Alaska Baked Oyster' price='4.00' />
                </View>
                </ScrollView>
                
            </View>
            </ScrollView>
        </View>
    )
}

export default HomePage;