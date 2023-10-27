import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
// Import an icon library or use a custom SVG icon component
import AddImage from "../components/AddImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import LeftButton from "../components/Buttons/LeftButton";
import RedButton from "../components/Buttons/RedButton";
import { SafeAreaView } from "react-native-safe-area-context";
import PointsBar from "../components/PointsBar";

const Profile2 = () => {
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
                            onPress={onPressPastOrders}
                        ></LeftButton>
                        <LeftButton
                            buttonText="My Liked Products"
                            onPress={onPressLikedProducts}
                        ></LeftButton>
                        <LeftButton
                            buttonText="My Preferences"
                            onPress={onPressPreferences}
                        ></LeftButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
