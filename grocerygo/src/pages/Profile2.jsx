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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import UserIcon from "../../assets/user.png";
import LockIcon from "../../assets/Profile_Lock.png";
import HistoryIcon from "../../assets/Profile_History.png";
import HeartIcon from "../../assets/Profile_Heart.png";
import InformationIcon from "../../assets/Profile_Information.png";
import LocationIcon from "../../assets/Profile_Location.png";
import SaveIcon from "../../assets/Profile_Save.png";

const ProfileButton = ({ onPress, buttonText, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row border-solid border-2 w-80 rounded-lg   items-center h-14"
    >
      <View>
        <Image className="object-contain h-10 w-10 ml-3" source={image} />
      </View>
      <View>
        <Text className=" text-lg text-center ml-10">{buttonText}</Text>
      </View>
      <View className="item-end ml-auto mr-5">
        <Text className="text-lg text-center ">></Text>
      </View>
    </TouchableOpacity>
  );
};
  



const Profile2 = () => {
    return (
      <SafeAreaView className="h-screen bg-white">
        <ScrollView>
          <Image
            className="object-fill w-20 h-20 mx-auto mb-2 rounded-full"
            source={require("../../assets/grocerygo.jpg")}
          />
          {/* name */}
          <Text className="text-2xl font-semibold text-center">MAY LIM</Text>
          {/* use font awesome as the image  */}
          <View className="flex flex-col items-center mt-4 space-y-4">
            <View>
              <ProfileButton
                buttonText="Edit Profile"
                image={UserIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Change Password"
                image={LockIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Order History"
                image={HistoryIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Favourite"
                image={HeartIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Delivery Address"
                image={LocationIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Terms and Conditions"
                image={SaveIcon}
              ></ProfileButton>
            </View>
            <View>
              <ProfileButton
                buttonText="Help"
                image={InformationIcon}
              ></ProfileButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Profile2;