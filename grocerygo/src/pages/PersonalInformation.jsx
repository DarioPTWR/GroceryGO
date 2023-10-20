import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../components/Buttons/Button";
import BackButton from "../components/Buttons/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

const First = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [heightItems, setHeightItems] = useState([]);
    const heights = [];
    for (let height = 120; height <= 130; height++) {
        heights.push({
            label: height,
            value: height
        })
    }
    console.log(heights)
    setHeightItems(heights);
    return (
        <View className='h-80 mt-20 ml-9'>
            <Text className='text-lg'>
                Setting Up Your GroceryGO Profile:
            </Text>
            <Text className='text-3xl font-bold'>
                Personal Information
            </Text>
            <Text className='text-lg mb-10'>
                We want to understand you better
            </Text>
            <View className='grid-cols-2 grid'>
                <Text className='text-lg mb-5 col-span-1'>What is your age?</Text>
                <DropDownPicker
                    className='col-span-1 w-32'
                    open={open}
                    value={value}
                    items={heightItems}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setHeightItems}
                />
                <Text className='text-lg mb-5'>What is your height?</Text>
                <Text className='text-lg'>What is your weight?</Text>
            </View>
        </View>
    );
}

const Personal = ({ navigation }) => {
  return (
    <SafeAreaView className="h-80 bg-[#dae2e6] rounded-br-3xl rounded-bl-3xl">
        <BackButton/>
        <Image
            className="object-fill w-52 h-52 mx-auto mb-2"
            source={require("../../assets/personal.png")}
        />
        <First/>
    </SafeAreaView>
  );
};

export default Personal;
