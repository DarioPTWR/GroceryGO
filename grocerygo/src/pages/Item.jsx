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
const preferences = [
  "Lactose Intolerant",
  "Halal",
  "Healthier Choice",
  "Vegetarian",
  "Seafood-Free",
];

const Item = ({ navigation }) => {
  const route = useRoute();
  const product = route.params?.product;
  
  if(!product) {
    return (
      <>
      <Text className="text-4xl font-extrabold text-center mt-44 mx-14 mb-12">
        You have not scanned a product!
      </Text>
      <ItemButton buttonText={"To Scanner"} onPress={() => navigation.navigate('Scanner')} />
      </>
    )
  }

  const checkUnfulfilled = (preferences) => {
    const preferencesMapped = preferences.map(preference => {
      switch(preference){
        case 'Gluten Free':
          return 'gluten_free'
        case 'Lactose Intolerant':
          return 'dairy_free'
        case 'Vegetarian Based':
          return 'vegetarian'
        case 'Peanut - Free':
          return 'peanut_free'
        case 'Grain - Free':
          return 'grain_free'
        case 'Wheat - Free':
          return 'wheat_free'
      }
    })

    const badges = product.badges
    let unfulfilledPreferences = preferencesMapped.filter((o) => badges.indexOf(o) === -1);
    return unfulfilledPreferences
  }

  const unfulfilledPreferences = checkUnfulfilled(preferences)

  return (
    <SafeAreaView>
      <ScrollView className="h-screen bg-main-background">
        <Image 
          className="object-fill flex-1 h-60 mb-5 " 
          source={{uri:`https://spoonacular.com/productImages/${product.id}-636x393.${product.imageType}`}}
        />
        <WhiteBackButton navigation={navigation} />
        <View className="mx-9">
          <Text
            style={{ fontSize: 16 }}
            className="text-md font-bold text-[#D44C3D] mt-2"
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
          <Text className="text-[#D44C3D]">_______________________</Text>
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
            {product.ingredients.map((ingredient, index) => (
              <Text key={index}>
                {"\n"}
                {"\u2022  "}
                {ingredient.name}
              </Text>
            ))}
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
                <Text>
                  {preference}
                </Text>
                {index !== unfulfilledPreferences.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </Text>
          <ItemButton buttonText="Explore Similar Products" />
          <ItemButton buttonText="Add to Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Item;