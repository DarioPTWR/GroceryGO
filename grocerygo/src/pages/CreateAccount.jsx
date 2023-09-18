import React, { setState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Import components
import BackButton from "../components/BackButton";
import FormInput from "../components/FormInput";
import AddImage from "../components/AddImage";
import Button from "../components/Button";
import baseURL from "../baseURL";

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errMessage, setErrMessage] = React.useState('');
  const [profileImage, setProfileImage] = React.useState(null)
  const validateEmail = (email) => {
    emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrMessage("E-mail is invalid!");
    } else {
      setErrMessage("");
    }
  }
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    if (!usernameRegex.test(username)) {
      setErrMessage("Username is invalid, 3 to 16 characters only.");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileImage,username, email, password)
    axios
      .post(`${baseURL}/addUser`, {
        imageuri: profileImage,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Preference");
      })
      .catch((err) => {
        setErrMessage(err.response.data);
      });
  };

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <KeyboardAvoidingView behavior="position">
        <BackButton navigation={navigation} />
        <Text className="font-bold text-6xl mt-4 mx-9">Create Account</Text>
        <Text className="mx-10 text-xl">Start Grocery Shopping with us.</Text>
        <AddImage saveURI={setProfileImage} />
        <View className="w-80 mx-auto mb-4">
          <FormInput
            name='Username'
            input={username}
            setInput={setUsername}
            secure = {false}
            validate={validateUsername}
          />
          <FormInput 
            name='Email'
            input={email}
            setInput={setEmail} 
            secure = {false}
            validate={validateEmail}
          />
          <FormInput
            name='Password'
            input={password}
            setInput={setPassword}
            secure = {true}
            validate={validatePassword}
          />
        </View>
      </KeyboardAvoidingView>
      <Text className="mx-auto mb-2 text-[#E11D48] text-center">{errMessage}</Text>
      <Button buttonText="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateAccount;