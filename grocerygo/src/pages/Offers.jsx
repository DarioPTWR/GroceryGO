import { React, useState } from "react";
import { View, Image, Text, Pressable, ScrollView } from "react-native";
import SideButton from "../components/Buttons/SideButton";
import TabButton from "../components/Buttons/TabButton";
import PersonalBackButton from "../components/Buttons/PersonalBackButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import OfferButton from "../components/Buttons/OfferButton";

// Import Images
import Mayo from "../../assets/mayo.png"
import Pizza from "../../assets/pizza.png"
import Yoghurt from "../../assets/yoghurt.png"
import Blueberry from "../../assets/blueberry.png"
import Strawberry from "../../assets/strawberry.png"


const Offers = () => {
   const navigation = useNavigation();
   return (
    <View className='bg-main-background h-screen'>
        <ScrollView>
            <Pressable
            style={{marginTop:60}}
            className="absolute left-9"
            // onPress={() => {
            // setThankYouToggle(true);
            // }}
            >
            <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{ alignItems: 'center', marginTop: 90, marginBottom: 4 }}>
        <Text className="text-center text-lg font-semibold">Your Offers</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TabButton buttonText={"For You"} onPress={() => { navigation.navigate("Offers"); }} />
            <TabButton buttonText={"All"} onPress={() => { navigation.navigate("Offers"); }} />
            <TabButton buttonText={"Saved (1)"} onPress={() => { navigation.navigate("Offers"); }} />
        </View>
        <View className='mt-2'>
            <OfferButton
                discountText = "$1 Off"
                itemText="Hellman's Mayonaise"
                storeText="NTUC single-use coupon"
                image={Mayo}
            ></OfferButton>
        </View>
        <View className='mt-3'>
            <OfferButton
                discountText = "$2 Off"
                itemText="Perfect Italiano Pizza"
                storeText="NTUC single-use coupon"
                image={Pizza}
            ></OfferButton>
        </View>
        <View className='mt-3'>
            <OfferButton
                discountText = "$3 Off"
                itemText="Greek Yoghurt"
                storeText="NTUC single-use coupon"
                image={Yoghurt}
            ></OfferButton>
        </View>
        <View className='mt-3'>
            <OfferButton
                discountText = "$5 Off"
                itemText="Farm-based blueberries"
                storeText="NTUC single-use coupon"
                image={Blueberry}
            ></OfferButton>
        </View>
        <View className='mt-3 mb-10'>
            <OfferButton
                discountText = "$3 Off"
                itemText="Farmer's Strawberry"
                storeText="NTUC single-use coupon"
                image={Strawberry}
            ></OfferButton>
        </View>
        </View>
        <SideButton
            buttonText={"NEXT"}
            onPress={() => {
            navigation.navigate("HomePage");
            }}
        />
        </ScrollView>  
    </View>
  );
};

export default Offers;