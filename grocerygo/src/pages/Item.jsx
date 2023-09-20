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

// Import components
import WhiteBackButton from "../components/WhiteBackButton";
import BackButton from "../components/BackButton";
import ItemButton from "../components/ItemButton";
import { black } from "tailwindcss/colors";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

// Creating the ingredient list
const ingredients = [
    "Milk",
    "Sugar",
    "Skim Milk Powder",
    "Corn Syrup",
    "Stabilizers and Emulsifiers",
    "Artificial Flavoring",
    "Food Coloring",
    "Salt"
]

// Creating the preference list
const UserPreferences = [
  "No Artificial Flavouring",
  "Lactose Intolerant",
  "Halal Certified",
  "Vegetarian",
  "Nuts Free"
];

const Item = ({ navigation }) => {
  const route = useRoute();
  const product = route.params?.product;
  
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
    const preferencesMapped = preferences.map(preference => {
      switch(preference){
        case 'gluten_free':
          return 'Gluten-Free'
        case 'dairy_free':
          return 'Lactose Intolerant'
        case 'vegetarian':
          return 'Vegetarian'
        case 'peanut_free':
          return 'Peanut - Free'
        case 'grain_free':
          return 'Grain - Free'
        case 'wheat_free':
          return 'Wheat - Free'
        case "nut_free":
          return "Nuts Free"
        case "halal":
          return "Halal Certified"
        case "soy_free":
          return "Soy Free"
        case "no_artificial_flavors":
          return "No Artificial Flavouring"
        case "no_preservatives":
          return "No Preservatives"
      }
    })
    const filteredPreferences = preferencesMapped.filter((x)=> x !== undefined)
    console.log(product.badges, filteredPreferences)
    console.log(preferences)
    let unfulfilledPreferences = UserPreferences.filter((o) => !filteredPreferences.includes(o));
    console.log(unfulfilledPreferences)
    let fulfilledPreferences = UserPreferences.filter((o)=> filteredPreferences.includes(o))
    return [unfulfilledPreferences, fulfilledPreferences]
  }

  let [unfulfilledPreferences,fulfilledPreferences] = checkUnfulfilled(product.badges)
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
            className="font-bold text-[#D44C3D] mt-4 mb-3"
          >
            INGREDIENTS
          </Text>
          <Text style={{ fontSize: 16 }} className="text-md self-start">
            {product.ingredients.length > 1 ? product.ingredients.map((ingredient, index) => (
              <Text key={index}>
                {"\n"}
                {"\u2022  "}
                {ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}
              </Text>
            )): "No Information on ingredients."}
          </Text>
          <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            PREFERENCE MATCH : {unfulfilledPreferences ? '' : 'NOT'} SUITABLE
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
          <ItemButton buttonText="Explore Similar Products" onPress={() => navigation.navigate('Comparison')}/>
          <ItemButton buttonText="Add to Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Item;