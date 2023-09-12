import React, { useState, useEffect} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

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
  const [submittedPreferences, setSubmittedPreferences] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((item) => item !== preference)
      );
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
    setShowButtons(true);
  };

  // Function to handle the "Submit" button click
  const handleSubmit = () => {
    // Store the current selected preferences as submitted preferences
    setSubmittedPreferences([...selectedPreferences]);
    // Do something with selectedPreferences (e.g., send to server, update state, etc.)
    console.log("Selected Preferences:", selectedPreferences);
    setShowButtons(false);
  };

  // Function to handle the "Cancel" button click
  const handleCancel = () => {
    // Clear selected preferences and hide the buttons
    console.log('Previous Preferences:', submittedPreferences)
    setSelectedPreferences([...submittedPreferences]);
    console.log("Selected Preferences:", selectedPreferences)
    setShowButtons(false);
  };

  return (
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
      {/* Conditional rendering of buttons */}
      {selectedPreferences.length > 0 && showButtons && (
        <View className=" mt-2 flex flex-row justify-around">
          <TouchableOpacity
            className="p-4 border-black border-2 rounded-lg bg-main-green "
            onPress={handleSubmit}
          >
            <Text className="text-xl font-bold text-white ">Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="p-4 border-black border-2 rounded-lg bg-main-red"
            onPress={handleCancel}
          >
            <Text className="text-xl font-bold text-white ">Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Preference;
