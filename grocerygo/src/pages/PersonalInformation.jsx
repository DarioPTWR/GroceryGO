import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../components/Buttons/Button";
import BackButton from "../components/Buttons/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import SideButton from "../components/Buttons/SideButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PersonalBackButton from "../components/Buttons/PersonalBackButton";
import FoodButton from "../components/Buttons/FoodButton";
import { Dropdown } from 'react-native-element-dropdown';

const Personal = ({ navigation }) => {
    const [toggleFirst, setFirst] = useState(true);
    const [toggleSecond, setSecond] = useState(false);
    const [toggleThird, setThird] = useState(false);
    const [toggleFourth, setFourth] = useState(false);
    const [toggleFifth, setFifth] = useState(false);
    const [toggleSixth, setSixth] = useState(false);
    const [toggleSeventh, setSeventh] = useState(false);
    const [toggleLast, setLast] = useState(false);

    // Page components
    const First = () => {
        const [AgeValue, setAgeValue] = useState(null);
        const [HeightValue, setHeightValue] = useState(null);
        const [WeightValue, setWeightValue] = useState(null);
        const age = [];
        const heights = [];
        const weights = [];
        for (let x = 5; x < 100; x++) {
            age.push({
                label: x,
                value: x
            })
        }
        for (let y = 120; y <= 220; y++) {
            heights.push({
                label: y + " cm",
                value: y
            })
        }
        for (let z = 20; z <= 200; z++) {
            weights.push({
                label: z + "kg",
                value: z
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
                <Text className='text-md mb-5'>
                    We want to understand you better
                </Text>
                <View className='flex flex-row'>
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your age?</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={AgeValue}
                        data={age}
                        labelField={'label'}
                        onChange={item=>{
                            setAgeValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Age"
                    />
                </View>
                <View className='flex flex-row'>
                     {/* CHANGE VALUES? OR DONT USE DROPDOWN CAUSE OVERLAPPING */}
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your height?</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={HeightValue}
                        data={heights}
                        labelField={'label'}
                        onChange={item=>{
                            setHeightValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Height"
                    />
                </View>
                <View className='flex flex-row mb-4'>
                     {/* CHANGE VALUES? OR DONT USE DROPDOWN CAUSE OVERLAPPING */}
                    <Text className='text-lg mb-5 mt-2 w-1/2'>What is your weight?</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={WeightValue}
                        data={weights}
                        labelField={'label'}
                        onChange={item=>{
                            setWeightValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Weight"
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
        const [male, setMale] = useState(false);
        const [female, setFemale] = useState(false);
        const [prefer, setPrefer] = useState(false);
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setSecond} setTrue={setFirst}/>
                <Text className="text-2xl font-semibold mb-4">What is your gender?</Text>
                <Text className="text-md mb-4">This helps us better recommend you products.</Text>
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
                    className={`w-6 h-6 mt-0.5 ml-8 rounded-full border-2 ${male ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Male</Text>
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
                    className={`w-6 h-6 rounded-full mt-0.5 ml-8 border-2 ${female ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Female</Text>
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
                    className={`w-6 h-6 rounded-full mt-0.5 ml-8 border-2 ${prefer ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Prefer not to say</Text>
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
        const [onePerson, setOnePerson] = useState(false);
        const [TwoPeople, setTwoPeople] = useState(false);
        const [ManyPeople, setManyPeople] = useState(false);
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setThird} setTrue={setSecond}/>
                <Text className="text-2xl font-semibold mb-4 -mt-4">Who are you shopping for?</Text>
                <Text className="text-md w-80 mb-2">This helps us better tailor our results just for you.</Text>
                <View className='flex flex-row'>
                    <TouchableOpacity
                        className={`h-32 w-32 border-solid border-2 p-4 rounded-lg mt-4 ${onePerson ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(true)
                            setTwoPeople(false)
                            setManyPeople(false)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/oneperson.png")}/>
                    <Text className="text-md mx-auto">Just Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`h-32 w-32 border-solid border-2 p-4 rounded-lg mt-4 ml-10 ${TwoPeople ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(false)
                            setTwoPeople(true)
                            setManyPeople(false)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/twopeople.png")}/>
                    <Text className={`text-md mx-auto`}>Me + 1 Other</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                        className={`h-32 w-32 border-solid border-2 p-4 rounded-lg mt-4 ${ManyPeople ? 'bg-main-green' : 'bg-main-background' }`}
                        // onPress is a function that takes in a preference and toggles it
                        onPress={() => {
                            setOnePerson(false)
                            setTwoPeople(false)
                            setManyPeople(true)
                        }}
                    >
                    <Image className="w-16 h-16 mx-auto" source={require("../../assets/manypeople.png")}/>
                    <Text className="text-md mx-auto">Me + More</Text>
                    </TouchableOpacity>
                <SideButton
                    onPress={()=>
                        {
                            setThird(false);
                            setFourth(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Fourth = () => {
        const [lose, setLose] = useState(false);
        const [maintain, setMaintain] = useState(false);
        const [gain, setGain] = useState(false);
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setFourth} setTrue={setThird}/>
                <Text className="text-2xl font-semibold mb-4">What are your goals?</Text>
                <Text className="text-md mb-4">This helps us better tailor our results just for you.</Text>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setLose(true);
                        setMaintain(false);
                        setGain(false);
                    }}
                >
                <View
                    className={`w-6 h-6 mt-0.5 ml-8 rounded-full  border-2 ${lose ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Lose Weight</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setLose(false);
                        setMaintain(true);
                        setGain(false);
                    }}
                >
                <View
                    className={`w-6 h-6 mt-0.5 ml-8 rounded-full  border-2 ${maintain ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Maintain Weight</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex flex-row border-solid border-2 p-2 rounded-lg w-11/12 mt-4 mb-12"
                    // onPress is a function that takes in a preference and toggles it 
                    onPress={() => {
                        setLose(false);
                        setMaintain(false);
                        setGain(true);
                    }}
                >
                <View
                    className={`w-6 h-6 mt-0.5 ml-8 rounded-full  border-2 ${gain ? 'bg-main-green' : 'bg-main-background' }`}
                ></View>
                <Text className="ml-8 text-xl">Gain Weight</Text>
                </TouchableOpacity>
                <SideButton
                    onPress={()=>
                        {
                            setFourth(false);
                            setFifth(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Fifth = () => {
        const [Eggplants, setEggplants] = useState(false);
        const [Onions, setOnions] = useState(false);
        const [Tomatoes, setTomatoes] = useState(false);
        const [Garlic, setGarlic] = useState(false);
        const [Coriander, setCoriander] = useState(false);
        const [Cilantro, setCilantro] = useState(false);
        const [BellPeppers, setBellPeppers] = useState(false);
        const [Mushrooms, setMushrooms] = useState(false);
        const [Carrots, setCarrots] = useState(false);
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setFifth} setTrue={setFourth}/>
                <Text className="text-2xl font-semibold mb-4">What foods do you dislike?</Text>
                <Text className="text-md mb-2">This helps us guide our suggestions for you.</Text>
                <View className='flex flex-row'>
                    <FoodButton Item={"Eggplants"} Value={Eggplants} setValue={setEggplants}/>
                    <FoodButton Item={"Onions"} Value={Onions} setValue={setOnions}/>
                </View>
                <View className='flex flex-row'>
                    <FoodButton Item={"Tomatoes"} Value={Tomatoes} setValue={setTomatoes}/>
                    <FoodButton Item={"Garlic"} Value={Garlic} setValue={setGarlic}/>
                </View>
                <View className='flex flex-row'>
                    <FoodButton Item={"Coriander"} Value={Coriander} setValue={setCoriander}/>
                    <FoodButton Item={"Cilantro"} Value={Cilantro} setValue={setCilantro}/>
                </View>
                <View className='flex flex-row'>
                    <FoodButton Item={"Bell Peppers"} Value={BellPeppers} setValue={setBellPeppers}/>
                    <FoodButton Item={"Mushrooms"} Value={Mushrooms} setValue={setMushrooms}/>
                </View>
                <View className='flex flex-row'>
                    <FoodButton Item={"Carrots"} Value={Carrots} setValue={setCarrots}/>
                </View>
                <SideButton
                    onPress={()=>
                        {
                            setFifth(false);
                            setSixth(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    // INCOMPLETE
    const Sixth = () => { 
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setSixth} setTrue={setFifth}/>
                <Text className="text-md mb-4">On a scale of 1 to 10...</Text>
                <Text className="text-2xl font-semibold mb-4">How active are you?</Text>
                <Text className="text-md mb-4">Level of activity is measured on a weekly basis.</Text>
                <SideButton
                    onPress={()=>
                        {
                            setSixth(false);
                            setSeventh(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Seventh = () => {
        const [ProteinValue, setProteinValue] = useState("");
        const [FatValue, setFatValue] = useState("");
        const [CarbValue, setCarbValue] = useState("");
        const data = [
        {
            label:"High",
            value: "High"
        }, {
            label: "Medium",
            value: "Medium"
        }, {
            label: "Low",
            value: "Low"
        }
        ];
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setSeventh} setTrue={setSixth}/>
                <Text className="text-2xl font-semibold mb-4">What are your macronutrient preferences?</Text>
                <Text className="text-md mb-4">This helps us better generate recipes for you.</Text>
                <View className='flex flex-row'>
                    <Text className='text-lg mb-5 mt-2 w-1/2'>Protein Intake</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={ProteinValue}
                        data={data}
                        labelField={'label'}
                        onChange={item=>{
                            setProteinValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Level"
                    />
                </View>
                <View className='flex flex-row'>
                    <Text className='text-lg mb-5 mt-2 w-1/2'>Fat Intake</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={FatValue}
                        data={data}
                        labelField={'label'}
                        onChange={item=>{
                            setFatValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Level"
                    />
                </View>
                <View className='flex flex-row'>
                    <Text className='text-lg mb-5 mt-2 w-1/2'>Carbohydrate Intake</Text>
                    <Dropdown
                        className="border-b w-1/3 mb-4 ml-6"
                        value={CarbValue}
                        data={data}
                        labelField={'label'}
                        onChange={item=>{
                            setCarbValue(item)
                        }}
                        valueField={'value'}
                        placeholder="Select Level"
                    />
                </View>
                <SideButton
                    onPress={()=>
                        {
                            setSeventh(false);
                            setLast(true);
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    const Last = () => {
        const navigation = useNavigation();
        return (
            <View className='h-80 mt-20 ml-9'>
                <PersonalBackButton setFalse={setLast} setTrue={setSeventh}/>
                <Text className="text-2xl font-semibold mb-4">What are your micronutrient preferences?</Text>
                <Text className="text-md mb-4">This helps us better generate recipes for you.</Text>
                <SideButton
                    onPress={()=>
                        {
                            setLast(false);
                            navigation.navigate("SelectStore")
                        }
                    }
                    buttonText="NEXT"
                />
            </View>
        );
    }
    return (
        <SafeAreaView className="h-80 bg-[#dae2e6] rounded-br-3xl rounded-bl-3xl">
            {toggleFirst ? <BackButton navigation={navigation}/> : ""}
            <Image
                className={`object-fill w-52 h-52 mx-auto mb-2 ${!toggleFirst ? "mt-9" : ""}`}
                source={require("../../assets/personal.jpg")}
            />
            {toggleFirst ? <First/> : ""}
            {toggleSecond ? <Second/> : ""}
            {toggleThird ? <Third/> : ""}
            {toggleFourth ? <Fourth/> : ""}
            {toggleFifth ? <Fifth/> : ""}
            {toggleSixth ? <Sixth/> : ""}
            {toggleSeventh ? <Seventh/> : ""}
            {toggleLast ? <Last/> : ""}
        </SafeAreaView>
    );
};

export default Personal;
