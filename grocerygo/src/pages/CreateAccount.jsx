import React, { setState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

// Import components
import BackButton from "../components/Buttons/BackButton";
import FormInput from "../components/FormInput";
import AddImage from "../components/AddImage";
import Button from "../components/Buttons/Button";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideButton from "../components/Buttons/SideButton";
import userImg from "../../assets/user.png";
import passwordImg from "../../assets/password.png";
import mobileImg from "../../assets/mobile.png";
import emailImg from "../../assets/email.png";

const CreateAccount = ({ navigation }) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [errMessage, setErrMessage] = React.useState('');
  const validateEmail = (email) => {
    emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrMessage("E-mail is invalid!");
    } else {
      setErrMessage("");
    }
  }
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s-']{2,50}$/;
    if (!nameRegex.test(name)) {
      setErrMessage("Name is invalid, only letters allowed.");
    } else {
      setErrMessage("");
    }
  }
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w!*,@]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrMessage("Password is invalid, must contain at least 8 characters, include at least one uppercase letter, one lowercase letter and one digit.");
    } else {
      setErrMessage("");
    }
  }
  const validateMobile = (mobileNumber) => {
    const mobileRegex = /^\+65\s\d{4}\s\d{4}$|^\d{4}\s\d{4}$/;
    if (!mobileRegex.test(mobileNumber)) {
      setErrMessage("Mobile Number is invalid. Please retry.");
    } else {
      setErrMessage("");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName,lastName,email,mobileNumber,password) // validate again and reject submit if err msg
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
    }
    navigation.navigate("Personal");
  };

  return (
    <SafeAreaView className="h-screen bg-main-background flex-1">
      <KeyboardAvoidingView behavior="position">
        <BackButton navigation={navigation} />
        <Image
        className="object-fill w-24 h-24 mx-9 mt-8"
        source={require("../../assets/grocerygo.jpg")}
        />
        <Text className="font-semibold text-4xl mx-9">Create Account</Text>
        <Text className="mx-10 text-xl mb-10">Please sign up to continue</Text>
        <View className="w-80 mx-auto mb-4">
          <FormInput
            name='FIRST NAME'
            input={firstName}
            setInput={setFirstName}
            validate={validateName}
            secure = {false}
            image={userImg}
          />
          <FormInput
            name='LAST NAME'
            input={lastName}
            setInput={setLastName}
            validate={validateName}
            secure = {false}
            image={userImg}
          />
          <FormInput
            name='EMAIL ADDRESS'
            input={email}
            setInput={setEmail}
            validate={validateEmail}
            secure = {false}
            image={emailImg}
          />
          <FormInput 
            name='MOBILE NUMBER'
            input={mobileNumber}
            setInput={setMobileNumber}
            validate={validateMobile}
            secure = {false}
            image={mobileImg}
          />
          <FormInput
            name='PASSWORD'
            input={password}
            setInput={setPassword}
            validate={validatePassword}
            secure = {true}
            image={passwordImg}
          />
        </View>
      </KeyboardAvoidingView>
      <Text className="mx-auto mb-4 -mt-4 text-[#E11D48] text-center">{errMessage}</Text>
      <SideButton buttonText="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateAccount;