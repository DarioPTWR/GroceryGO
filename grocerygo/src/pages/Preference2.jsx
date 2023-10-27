import { collection, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect} from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



// Import components
import GlutenFree from "../../assets/Gluten-Free.png"
import DairyFree from "../../assets/Dairy-Free.png"
import HealthierChoice from "../../assets/Healthier-Choice.png"
import Vegan from "../../assets/Vegan.png"
import HalalCertified from "../../assets/Halal.png"
import NutsFree from "../../assets/Nuts-Free.png"
import LowSodium from "../../assets/Low-Sodium.png"
import NoSeafood from "../../assets/No-Seafood.png"
import Vegetarian from "../../assets/Vegetarian.png"
import SoyFree from "../../assets/Soy-Free.png"
import PreferenceButton from "../components/Buttons/PreferenceButton";

import Button from "../components/Buttons/Button";
import BackButton from "../components/Buttons/BackButton";
import SideButton from "../components/Buttons/SideButton";


const preferences = [
    "Gluten-Free",
    "Dairy-Free",
    "Healthier Choice",
    "Vegan",
    "Halal Certified",
    "Nuts-Free",
    "Low Sodium",
    "No Seafood",
    "Vegetarian",
    "Soy-Free",
];



const Preference2 = ({ navigation }) => {
    return (
      <SafeAreaView className="h-screen  flex-1 ">
        <ScrollView>
          <BackButton navigation={navigation} />
          <Text className="font-semibold text-4xl mx-10 mt-10">
            Your Preferences
          </Text>
          <Text className="mx-10 text-xl mb-10 mt-5">
            We Recommend products just for you
          </Text>
          <View className="mx-5 flex flex-wrap justify-between flex-row ">
            <PreferenceButton
              preference={preferences[0]}
              isSelected={true}
              onPress={() => {}}
              image={GlutenFree}
            />
            <PreferenceButton
              preference={preferences[1]}
              isSelected={true}
              onPress={() => {}}
              image={DairyFree}
            />
            <PreferenceButton
              preference={preferences[2]}
              isSelected={true}
              onPress={() => {}}
              image={HealthierChoice}
            />
            <PreferenceButton
              preference={preferences[3]}
              isSelected={true}
              onPress={() => {}}
              image={Vegan}
            />
            <PreferenceButton
              preference={preferences[4]}
              isSelected={true}
              onPress={() => {}}
              image={HalalCertified}
            />
            <PreferenceButton
              preference={preferences[5]}
              isSelected={true}
              onPress={() => {}}
              image={NutsFree}
            />
            <PreferenceButton
              preference={preferences[6]}
              isSelected={true}
              onPress={() => {}}
              image={LowSodium}
            />
            <PreferenceButton
              preference={preferences[7]}
              isSelected={true}
              onPress={() => {}}
              image={NoSeafood}
            />
            <PreferenceButton
              preference={preferences[8]}
              isSelected={true}
              onPress={() => {}}
              image={Vegetarian}
            />
            <PreferenceButton
              preference={preferences[9]}
              isSelected={true}
              onPress={() => {}}
              image={SoyFree}
            />
          </View>
          <View className="mt-4">
            <SideButton onPress={() => {navigation.navigate("Personal")}} buttonText="NEXT" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Preference2;