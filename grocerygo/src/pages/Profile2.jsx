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
import ProfileButton from "../components/Buttons/ProfileButton";


import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import UserIcon from "../../assets/user.png";
import LockIcon from "../../assets/Profile_Lock.png";
import HistoryIcon from "../../assets/Profile_History.png";
import HeartIcon from "../../assets/Profile_Heart.png";
import InformationIcon from "../../assets/Profile_Information.png";
import LocationIcon from "../../assets/Profile_Location.png";
import SaveIcon from "../../assets/Profile_Save.png";
import PlaceholderIcon from "../../assets/PlaceholderWoman.png";


  



const Profile2 = () => {
const navigation = useNavigation();

    return (
      <SafeAreaView className="h-screen bg-white">
        <ScrollView>
          <Image
            className="object-fill w-20 h-20 mx-auto mb-2 rounded-full"
            source={PlaceholderIcon}
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
                onPress={() => {
                  navigation.navigate("Item2");
                }}
              ></ProfileButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Profile2;