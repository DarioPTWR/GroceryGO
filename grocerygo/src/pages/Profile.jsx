import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Pressable
} from "react-native";
// Import an icon library or use a custom SVG icon component
import AddImage from "../components/AddImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import LeftButton from "../components/LeftButton";
import RedButton from "../components/RedButton";
import { SafeAreaView } from "react-native-safe-area-context";
import PointsBar from "../components/PointsBar";

orderNumber =4
likedProducts = 3
const onPressEditProfile = () => {
  console.log("Edit Profile");
};


const onPressViewProfile = () => {
  console.log("View Profile");
};


const Profile = () => {
    return (
      <SafeAreaView className="h-screen bg-[#fff4ec]">
        <ScrollView>
          <View className="flex-1 m-3 p-2">
            <Text className="font-bold text-6xl ">My Profile</Text>
            <Text className="text-base font-medium text-black  pt-2">
              Welcome to your profile at GroceryGO!
            </Text>
            <AddImage />

            <RedButton
              buttonText="Edit Profile"
              onPress={onPressEditProfile}
            ></RedButton>
            <RedButton
              buttonText="View Rewards"
              onPress={onPressViewProfile}
            ></RedButton>
          </View>
          {/* profile picture */}
          <View className="m-3 p-2">
            <Text className="text-lg font-bold">My Activity</Text>
            <PointsBar></PointsBar>
            <Text className="text-lg font-bold mb-4 mt-4">Rosalind's Dashboard</Text>
            <View className="mb-4">
              <LeftButton
                buttonText="My Past Orders"
                buttonNumber={orderNumber}
              ></LeftButton>
            </View>
            <LeftButton
              buttonText="Liked Products"
              buttonNumber={likedProducts}
            ></LeftButton>
            <Text className="font-bold text-lg mt-4 mb-2 ">Refer A Friend</Text>
            <Text className="text-bold ">
              Make a friend referral to hop onto our app and earn points for
              every successful referral
            </Text>
            <Pressable className="flex flex-row mt-4">
              <View className="bg-main-green py-2 w-3/5 max-w-lg rounded-md flex flex-row p-2 flex-grow items-center">
                <FontAwesomeIcon icon={faPlusCircle} size={22} color="white" />
                <Text className="text-white text-lg ml-3 ">Invite Friends</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    );

    
}

export default Profile