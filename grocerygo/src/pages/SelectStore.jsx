import { React, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import SideButton from "../components/Buttons/SideButton";
import PersonalBackButton from "../components/Buttons/PersonalBackButton";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
          <View className="bg-[#355D4E] py-2 w-2/5 max-w-lg h-12 rounded-2xl mt-6">
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
          className="absolute left-3 -top-80"
          onPress={() => {
            setThankYouToggle(true);
          }}
        >
          <AntDesign name="arrowleft" size={34} color="black" />
        </Pressable>
        <Text className="text-center text-lg font-bold">Choose a store</Text>
        <SideButton
          buttonText={"NEXT"}
          onPress={() => {
            navigation.navigate("Profile");
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