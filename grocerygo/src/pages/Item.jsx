import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { collection, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../../api/firebaseConfig.js";

// Import components
import WhiteBackButton from "../components/WhiteBackButton";
import BackButton from "../components/BackButton";
import ItemButton from "../components/ItemButton";
import { black } from "tailwindcss/colors";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({ navigation }) => {
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

  const route = useRoute();
  const product = route.params?.product;

  const [username, setUsername] = React.useState('')
  const [userPreferences, setUserPreferences] = React.useState([''])

  // Get user's preferences
  React.useEffect(async() => {
    AsyncStorage.getItem('username')
      .then(response => {
        setUsername(response)
        const userPreferencesRef = doc(db, "Preferences", response); // Replace "Joe" with the actual user ID
        const unsubscribe = onSnapshot(userPreferencesRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            const updatedSelectedPreferences = preferences.filter(
              (preference) => userData[preference]
            );
            setUserPreferences(updatedSelectedPreferences);
          }
        });
      })
      .catch(err => console.log(err))
  }, []);
  
  if(!product) {
    return (
      <View className="bg-main-background h-screen">
        <Text className="text-4xl font-extrabold text-center mt-72 mx-14 mb-12 uppercase text-[#E11D48]">
          You have not scanned a product!
        </Text>
        <ItemButton buttonText={"To Scanner"} onPress={() => navigation.navigate('Scanner')} />
      </View>
    )
  }

  const checkUnfulfilled = (preferences) => {
    console.log(preferences)
    const preferencesMapped = preferences.map(preference => {
      switch(preference){
        case 'egg_free':
          return 'Egg Free'
        case 'wheat_free':
          return 'Wheat Free'
        case 'grain_free':
          return 'Grain Free'
        case 'peanut_free':
          return 'Peanut Free'
        case 'primal':
          return 'Primal'
        case 'vegetarian':
          return 'Vegetarian'
        case "nut_free":
          return "Nut Free"
        case "vegan":
          return "Vegan"
        case "pescetarian":
          return "Pescetarian"
        case 'dairy_free':
          return 'Dairy Free'
        case "paleo":
          return "Paleo"
        case 'gluten_free':
          return 'Gluten Free'
      }
    })
    const filteredPreferences = preferencesMapped.filter((x)=> x !== undefined)
    let unfulfilledPreferences = userPreferences.filter((o) => !filteredPreferences.includes(o));
    let fulfilledPreferences = userPreferences.filter((o)=> filteredPreferences.includes(o))
    console.log(unfulfilledPreferences, fulfilledPreferences)
    return [unfulfilledPreferences, fulfilledPreferences]
  }

  let [unfulfilledPreferences, fulfilledPreferences] = checkUnfulfilled(product.badges)

  return (
    <SafeAreaView className="bg-main-background">
      <ScrollView className="h-screen bg-main-background">
      <BackButton navigation={navigation} />
        <Image 
          className="object-fill flex-1 h-60 w-36 mx-auto mb-5 -mt-7" 
          source={{uri:`https://spoonacular.com/productImages/${product.id}-636x393.${product.imageType}`}}
        />
        <View className="mx-9 mb-36">
          <Text
            style={{ fontSize: 16 }}
            className="text-md font-extrabold text-[#D44C3D] mt-2 uppercase"
          >
            {product.breadcrumbs[0]}
          </Text>
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <AntDesign
              name="heart"
              size={18}
              color="brown"
              style={{ marginTop: -18 }}
            ></AntDesign>
          </View>
          <Text className="text-[#D44C3D]">______________________________________</Text>
          <Text className="text-lg font-bold mt-4">{product.title}</Text>
          <Text style={{ fontSize: 16 }} className="self-start mt-3">
            {product.generatedText}
          </Text>
          <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            INGREDIENTS
          </Text>
          <Text style={{ fontSize: 16 }} className="text-md self-start">
            {product.ingredients.length > 1 ? product.ingredients.map((ingredient, index) => (
              <Text key={index}>  
                {"\n"}
                {"\u2022  "}
                {ingredient.name[0].toUpperCase() + ingredient.name?.slice(1)}
              </Text>
            )): "No Information on ingredients."}
          </Text>
          <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            MACROS
          </Text>
          <Text style={{ fontSize: 16 }} className="text-md self-start">
            {product.nutrition.nutrients.length >= 1 ? product.nutrition.nutrients.map((nutrient, index) => (
              <Text key={index}>
                {"\n"}
                {"\u2022  "}
                {nutrient.name.toUpperCase()} - {nutrient.amount}{nutrient.unit}
              </Text>
            )): "No Information on ingredients."}
          </Text>
          <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            PREFERENCE MATCH : {unfulfilledPreferences ? '' : ''} SUITABLE
          </Text>
          <Text style={{ fontSize: 16 }} className="mt-4 mb-6">
            {unfulfilledPreferences.map((preference, index) => (
              <React.Fragment key={index}>
                <AntDesign
                name="closecircle"
                size={16}
                color="brown"
                style={{ marginTop: -18 }}
                ></AntDesign>
                <Text> </Text>
                <Text>
                  {preference}
                </Text>
                {index !== unfulfilledPreferences.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </Text>
          <Text style={{ fontSize: 16 }} className="mb-6">
            {fulfilledPreferences.map((preference, index) => (
              <React.Fragment key={index}>
                <AntDesign
                  name="checkcircle"
                  size={16}
                  color="green"
                  style={{ marginTop: -18 }}
                ></AntDesign>
                <Text> </Text>
                <Text>
                  {preference}
                </Text>
                {index !== fulfilledPreferences.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </Text>
          <ItemButton buttonText="Explore Similar Products" onPress={() => navigation.navigate('Comparison', {product: product})}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Item;