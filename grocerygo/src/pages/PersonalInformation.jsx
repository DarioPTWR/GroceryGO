import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../components/Buttons/Button";
import BackButton from "../components/Buttons/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import SideButton from "../components/Buttons/SideButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Personal = ({ navigation }) => {
    const [toggleFirst, setFirst] = useState(true);
    const [toggleSecond, setSecond] = useState(false);
    const [toggleThird, setThird] = useState(false);
    const First = () => {
        const navigation = useNavigation();
        const [AgeOpen, setAgeOpen] = useState(false);
        const [WeightOpen, setWeightOpen] = useState(false);
        const [HeightOpen, setHeightOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [heightItems, setHeightItems] = useState([]);
        const heights = [];
        for (let x = 120; x <= 220; x++) {
            heights.push({
                label: x + " cm",
                value: x
            })
        }
        return (
            <View className='h-80 mt-20 ml-9'>
                <Text className='text-md'>
                    Setting Up Your GroceryGO Profile:
                </Text>
                <Text className='text-2xl font-bold'>
                    Personal Information
                </Text>
                <Text className='text-md mb-10'>
                    We want to understand you better
                </Text>
                <View className='flex flex-row'>
                     {/* CHANGE VALUES? OR DONT USE DROPDOWN CAUSE OVERLAPPING */}
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your age?</Text>
                    <DropDownPicker
                        className='ml-4 w-32 h-1/5'
                        zIndex={6000}
                        open={AgeOpen}
                        value={value}
                        items={heights}
                        setOpen={setAgeOpen}
                        setValue={setValue}
                        setItems={setHeightItems}
                    />
                </View>
                <View className='flex flex-row'>
                     {/* CHANGE VALUES? OR DONT USE DROPDOWN CAUSE OVERLAPPING */}
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your height?</Text>
                    <DropDownPicker
                        className='ml-4 w-32 h-1/5'
                        zIndex={6000}
                        open={HeightOpen}
                        value={value}
                        items={heights}
                        setOpen={setHeightOpen}
                        setValue={setValue}
                        setItems={setHeightItems}
                    />
                </View>
                <View className='flex flex-row mb-4'>
                     {/* CHANGE VALUES? OR DONT USE DROPDOWN CAUSE OVERLAPPING */}
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your weight?</Text>
                    <DropDownPicker
                        className='ml-4 w-32 h-1/5'
                        zIndex={6000}
                        open={WeightOpen}
                        value={value}
                        items={heights}
                        setOpen={setWeightOpen}
                        setValue={setValue}
                        setItems={setHeightItems}
                    />
                </View>
                <SideButton
                    onPress={()=>{
                        setFirst(false);
                        setSecond(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Second = () => {
        const navigation = useNavigation();
        const [male, setMale] = useState(false);
        const [female, setFemale] = useState(false);
        const [prefer, setPrefer] = useState(false);
        return (
            <View className='h-80 mt-20 ml-9'>
                <Text className="text-2xl font-semibold mb-4">What is your gender?</Text>
                <Text className="text-md mb-8">This helps us better recommend you products.</Text>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setMale(true);
                        setFemale(false);
                        setPrefer(false);
                    }}
                >
                <View
                    className={`w-6 h-6 rounded-full  border-2 ${male ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-16 text-xl">Male</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setMale(false);
                        setFemale(true);
                        setPrefer(false);
                    }}
                >
                <View
                    className={`w-6 h-6 rounded-full  border-2 ${female ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-16 text-xl">Female</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4 mb-8"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setMale(false);
                        setFemale(false);
                        setPrefer(true);
                    }}
                >
                <View
                    className={`w-6 h-6 rounded-full  border-2 ${prefer ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-16 text-xl">Prefer not to say</Text>
                </TouchableOpacity>
                <SideButton
                    onPress={()=>
                        {
                            setSecond(false);
                            setThird(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Third = () => {
        const navigation = useNavigation();
        const [onePerson, setOnePerson] = useState(false);
        const [TwoPeople, setTwoPeople] = useState(false);
        const [ManyPeople, setManyPeople] = useState(false);
        return (
            <View className='h-80 mt-14 ml-9'>
                <Text className="text-2xl font-semibold mb-4">Who are you shopping for?</Text>
                <Text className="text-md w-80 mb-2">This helps us better tailor our results just for you.</Text>
                <View className='flex flex-row'>
                    <TouchableOpacity
                        className={`h-36 w-36 border-solid border-2 p-4 rounded-lg mt-4 ${onePerson ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(true)
                            setTwoPeople(false)
                            setManyPeople(false)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/oneperson.png")}/>
                    <Text className="text-lg mx-auto">Just Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`h-36 w-36 border-solid border-2 p-4 rounded-lg mt-4 ml-10 ${TwoPeople ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(false)
                            setTwoPeople(true)
                            setManyPeople(false)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/twopeople.png")}/>
                    <Text className="text-lg mx-auto">Me + 1 Other</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                        className={`h-36 w-36 border-solid border-2 p-4 rounded-lg mt-4 ${ManyPeople ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(false)
                            setTwoPeople(false)
                            setManyPeople(true)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/manypeople.png")}/>
                    <Text className="text-lg mx-auto">Me + More</Text>
                    </TouchableOpacity>
                <SideButton
                    onPress={()=>
                        {
                            setThird(false);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    return (
        <SafeAreaView className="h-80 bg-[#dae2e6] rounded-br-3xl rounded-bl-3xl">
            <BackButton navigation={navigation}/>
            {/* change to navigate backwards setting true and false to each*/}
            <Image
                className="object-fill w-52 h-52 mx-auto mb-2"
                source={require("../../assets/personal.png")}
            />
            {toggleFirst ? <First/> : ""}
            {toggleSecond ? <Second/> : ""}
            {toggleThird ? <Third/> : ""}
        </SafeAreaView>
    );
};

export default Personal;
