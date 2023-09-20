import db from "../../api/firebaseConfig.js";
import { collection, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect} from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import components
import Button from "../components/Button.jsx";
import BackButton from "../components/BackButton.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const preferences = [
  "Egg Free",
  "Wheat Free",
  "Grain Free",
  "Peanut Free",
  "Primal",
  "Vegetarian",
  "Nut Free",
  "Vegan",
  "Pescetarian",
  "Dairy Free",
  "Paleo",
  "Gluten Free"
]

// add a button for each preference in the preferences array 
const PreferenceButton = ({ preference, isSelected, onPress }) => {
  return (
    <TouchableOpacity 
      className="flex flex-row border-solid border-2 m-3 p-3 rounded-lg "
      // onPress is a function that takes in a preference and toggles it 
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

const Preference = ({ navigation }) => {
  // declare vars and set their state
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [customPreference, setCustomPreference] = useState(""); // State for custom preference input
  const [username, setUsername] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  React.useEffect(async() => {
    try {
      const jsonValue = await AsyncStorage.getItem('username');
      console.log(jsonValue)
      jsonValue != null ? setUsername(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
    const userPreferencesRef = doc(db, "Preferences", username); // Replace "Joe" with the actual user ID
    const unsubscribe = onSnapshot(userPreferencesRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        const updatedSelectedPreferences = preferences.filter(
          (preference) => userData[preference]
        );
        setSelectedPreferences(updatedSelectedPreferences);
      }
    });

    return unsubscribe; // Cleanup function to unsubscribe from the snapshot listener
  }, []);

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
  const handleSubmit =  async () => {
    setLoading(true)
    // Get the user preferences document from Firestore can replace joe with user id 
    // this is the path to the document
    const userPreferencesRef = doc(db, "Preferences", username); 
    // Get the user preferences document
    const userPreferencesDoc = await getDoc(userPreferencesRef);
    // Get the data from the user preferences document or an empty object if it does not exist
    const userPreferencesData = userPreferencesDoc.exists() ? userPreferencesDoc.data() : {};

    // Create a copy of the user preferences data
    const updatedUserPreferences = { ...userPreferencesData };
    // Update the preferences based on the selectedPreferences array
    preferences.forEach((preference) => {
      updatedUserPreferences[preference] =
        selectedPreferences.includes(preference);
    });
    // Update or insert the user preferences document
    if (userPreferencesDoc.exists()) {
      //print out the updated user preferences
      await updateDoc(userPreferencesRef, updatedUserPreferences);
      console.log(userPreferencesData);
    } else {
      await setDoc(userPreferencesRef, updatedUserPreferences);
      console.log(userPreferencesData);
    }
    setLoading(false)
    setSent(true)
    setSelectedPreferences((prevSelectedPreferences) => {
      // Store the current selected preferences as submitted preferences
      let finalPreferences = [...prevSelectedPreferences];

      // If customPreference is not empty, add it to the selected preferences
      if (customPreference.trim() !== "") {
        finalPreferences.push(customPreference);
        setCustomPreference(""); // Clear the input field
      }

      return finalPreferences;
    });
  };

  const handleCustomPreferenceChange = (text) => {
    setCustomPreference(text);
  };

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
        className="flex-1 bg-main-background"
      >
        <ScrollView className="flex-1 bg-main-background">
          <BackButton navigation={navigation} />
          <View className="flex-1 m-2 mt-4">
            <Text className="text-5xl font-bold text-black px-4">
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
          <Text className="text-xl font-bold m-3">
            Any Other Allergies/Preferences?
          </Text>
          <TextInput
            placeholder="Add Custom Preference"
            value={customPreference}
            onChangeText={handleCustomPreferenceChange}
            className="border-2 border-black rounded-lg m-3 p-5"
          />
          {/* Conditional rendering of buttons */}
          <View className="mb-20 mt-4">
            <TouchableOpacity
              className="flex flex-col items-center"
              onPress={handleSubmit}
              buttonText={"Submit Preferences"}
            >
              <View className="bg-[#355D4E] py-2 w-3/5 max-w-lg rounded-md">
                {
                  !sent && !loading &&
                  <Text className="text-white text-lg text-center">
                    Submit Preferences
                  </Text>
                  ||
                  sent && !loading &&
                  <Text className="text-white text-lg text-center">
                    Saved!
                  </Text>
                  ||
                  loading &&
                  <Text className="text-white text-lg text-center">
                    Loading...
                  </Text>
                }
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Preference;