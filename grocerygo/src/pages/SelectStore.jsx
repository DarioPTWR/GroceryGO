import { React, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import SideButton from "../components/Buttons/SideButton";
import PersonalBackButton from "../components/Buttons/PersonalBackButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StoreButton from "../components/Buttons/StoreButton";

// Importing Images
import FairPrice from "../../assets/fairprice.png";
import Giant from "../../assets/giant.png";
import ColdStorage from "../../assets/coldstorage.png";
import JMart from "../../assets/jmart.png";
import LittleFarms from "../../assets/littlefarms.png";
import Prime from "../../assets/prime.png";
import ShengSiong from "../../assets/shengsiong.png";
import UMart from "../../assets/umart.png";

const SelectStore = () => {
const navigation = useNavigation();
  const [ThankYouToggle, setThankYouToggle] = useState(true);
  const ThankYou = () => {
    return (
      <View>
        <Image
          className="object-fill w-52 h-52 mx-auto mb-2"
          source={require("../../assets/grocerygo.jpg")}
        />
        <Text className="text-2xl font-semibold text-center">
          Thank you for indicating your preferences!
        </Text>
        <Pressable
          onPress={() => {
            setThankYouToggle(false);
          }}
          className="flex flex-col items-center active:scale-95 transition"
        >
          <View className="bg-[#355D4E] py-2 w-2/5 max-w-lg h-12 rounded-3xl mt-6">
            <Text className="text-white text-lg text-center uppercase">
              LET'S BEGIN
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };
  const Selection = () => {
    return (
      <View>
        <Pressable
        style={{marginTop:-40}}
          className="absolute left-9"
          onPress={() => {
            setThankYouToggle(true);
          }}
        >
          <AntDesign name="arrowleft" size={34} color="black" />
        </Pressable>
        <Text className="text-center text-lg font-semibold">Choose a Store</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 4 }}>
          <View style={{ marginRight: 4 }}> 
            <StoreButton image={FairPrice} />
          </View>
          <View style={{ marginLeft: 4 }}>
            <StoreButton image={Giant} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 4, marginBottom: 4 }}>
          <View style={{ marginRight: 4 }}> 
            <StoreButton image={ColdStorage} />
          </View>
          <View style={{ marginLeft: 4 }}>
            <StoreButton image={ShengSiong} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 4, marginBottom: 4 }}>
          <View style={{ marginRight: 4 }}> 
            <StoreButton image={Prime} />
          </View>
          <View style={{ marginLeft: 4 }}>
            <StoreButton image={LittleFarms} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 4, marginBottom: 60 }}>
          <View style={{ marginRight: 4 }}> 
            <StoreButton image={UMart} />
          </View>
          <View style={{ marginLeft: 4 }}>
            <StoreButton image={JMart} />
          </View>
        </View>
        
        <SideButton
          buttonText={"NEXT"}
          onPress={() => {
            navigation.navigate("Offers");
          }}
        />
      </View>
    );
  };
  return (
    <View className="h-screen justify-center bg-main-background flex-1">
      {ThankYouToggle ? <ThankYou /> : <Selection />}
    </View>
  );
};

export default SelectStore;