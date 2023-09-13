import React, { useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

const preferences = [
  "Gluten-Free",
  "Lactose Intolerant",
  "Healthier Choice",
  "Vegetarian Based",
  "Halal Certified",
  "Spice Intolerant",
  "Nuts Free",
];

const PreferenceButton = ({ preference, isSelected, onPress }) => {
  return (
    <TouchableOpacity 
      className="flex flex-row border-solid border-2 m-3 p-3 rounded-lg "
      onPress={() => onPress(preference)}
    >
      <View
        className={`w-6 h-6 rounded-full  border-2 ${
          isSelected ? "bg-main-green " : "bg-main-background"
        } `}
      ></View>
      <Text className="ml-16 text-xl">{preference}</Text>
    </TouchableOpacity>
  );
};
// add multiple buttons with different props


const Preference = () => {
  // declare vars and set their state
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  // const [submittedPreferences, setSubmittedPreferences] = useState([]);
  const [customPreference, setCustomPreference] = useState(""); // State for custom preference input
  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((item) => item !== preference)
      );
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  // Function to handle the "Submit" button click
  const handleSubmit = () => {
      setSelectedPreferences((prevSelectedPreferences) => {
        // Store the current selected preferences as submitted preferences
        let finalPreferences = [...prevSelectedPreferences];

        // If customPreference is not empty, add it to the selected preferences
        if (customPreference.trim() !== "") {
          finalPreferences.push(customPreference);
          setCustomPreference(""); // Clear the input field
        }

        console.log("Submitted Preferences:", finalPreferences);
        return finalPreferences;
      });

  };

  const handleCustomPreferenceChange = (text) => {
    setCustomPreference(text);
  };


  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
      className="flex-1 bg-main-background"
    >
      <ScrollView className="flex-1 bg-main-background">
        <View className="flex-1 m-2">
          <Text className="text-3xl font-bold text-black px-4">
            Product Preferences
          </Text>
          <Text className="text-base font-medium text-black px-4 pt-2">
            We will recommend products based on your needs.
          </Text>
        </View>
        <View className="mt-2 ">
          {preferences.map((preference, index) => (
            <PreferenceButton
              key={index}
              preference={preference}
              isSelected={selectedPreferences.includes(preference)}
              onPress={togglePreference}
            />
          ))}
        </View>
        <Text className = 'text-xl font-bold m-3'>Any Other Allergies/Preferences?</Text>
        <TextInput
          placeholder="Add Custom Preference"
          value={customPreference}
          onChangeText={handleCustomPreferenceChange}
          className="border-2 border-black rounded-lg m-3 p-5"

        />
        {/* Conditional rendering of buttons */}
        <View className=" mt-2 flex flex-row justify-around">
          <TouchableOpacity
            className="p-4 border-black border-2  bg-main-green "
            onPress={handleSubmit}
          >
            <Text className="text-xl font-bold text-white ">
              Submit Preferences
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Preference;
