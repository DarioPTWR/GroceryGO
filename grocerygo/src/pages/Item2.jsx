import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "../../api/firebaseConfig.js";

// Import components
import WhiteBackButton from "../components/Buttons/WhiteBackButton.jsx";
import BackButton from "../components/Buttons/BackButton.jsx";
import ItemButton from "../components/Buttons/ItemButton.jsx";
import { black } from "tailwindcss/colors";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SimilarProductBox from "../components/SimilarProductBox.jsx";

const GreenCheckmark = () => (
  <Text style={{ color: "green", fontSize: 16 }}>✓</Text>
);
// const SimilarProduct =({product})=>{
//    return (
//      <TouchableOpacity className="w-36 h-50 border-2 border-black rounded-lg p-4 m-4">
//        <View className="flex flex-row justify-between">
//          <TouchableOpacity className='ml-auto mb-1'>
//            <AntDesign name="hearto" size={15} color="red" />
//          </TouchableOpacity>
//        </View>
//        <Image
//          source={{
//            uri: `https://spoonacular.com/productImages/${product.id}-636x393.${product.imageType}`,
//          }}
//          className="w-full h-10 object-cover"
//        />
//        <Text className="text-xs font-bold mt-1">{product.productType}</Text>
//        <Text className="text-xs">{product.title}</Text>
//        <Text className="text-base font-bold mt-1">${product.price}</Text>
//      </TouchableOpacity>
//    );
// }
const Item2 = ({ navigation }) => {
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
    "Gluten Free",
  ];
  const [quantity, setQuantity] = React.useState(1); // Initialize the quantity state

  const route = useRoute();
  //   const product = route.params?.product;
  const product = {
    id: 22347,
    title: "SNICKERS Minis Size Chocolate Candy Bars ",
    breadcrumbs: ["bars"],
    imageType: "jpg",
    badges: [
      "msg_free",
      "no_artificial_colors",
      "no_artificial_flavors",
      "no_artificial_ingredients",
      "gluten_free",
    ],
    importantBadges: [
      "no_artificial_flavors",
      "no_artificial_colors",
      "no_artificial_ingredients",
      "gluten_free",
      "msg_free",
    ],
    ingredientCount: 32,
    generatedText: "I LOVE SNICKERS",
    ingredientList:
      "Snickers Brand Almond Bar: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Corn Syrup, Almonds, Sugar, Milkfat, Skim Milk, Less than 2% - Lactose, Salt, Hydrogenated Palm Kernel Oil and/or Palm Oil, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Milkfat, Skim Milk, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand Peanut Butter Squared Bars: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanut Butter (Peanuts, Partially Hydrogenated Soybean Oil), Peanuts, Sugar, Corn Syrup, Vegetable Oil (Hydrogenated Palm Kernel Oil, Palm Oil, Rapeseed Oil and Cottonseed Oil and/or Partially Hydrogenated Palm Kernel Oil), Lactose, Corn Syrup Solids, Invert Sugar, Less than 2% - Glycerin, Dextrose, Skim Milk, Salt, Calcium Carbonate, Partially Hydrogenated Soybean Oil, Egg Whites, Artificial Flavor, TBHQ to Maintain Freshness",
    ingredients: [
      {
        description: null,
        name: "emulsifier",
        safety_level: null,
      },
      {
        description: null,
        name: "added sugar",
        safety_level: null,
      },
      {
        description: null,
        name: "sweetener",
        safety_level: null,
      },
      {
        description: null,
        name: "cooking fat",
        safety_level: null,
      },
      {
        description: null,
        name: "cooking oil",
        safety_level: null,
      },
      {
        description: null,
        name: "lecithin",
        safety_level: null,
      },
      {
        description: null,
        name: "yeast",
        safety_level: null,
      },
      {
        description: null,
        name: "menu item type",
        safety_level: null,
      },
      {
        description: null,
        name: "nuts",
        safety_level: null,
      },
      {
        description: null,
        name: "partially hydrogenated vegetable oil",
        safety_level: "low",
      },
      {
        description:
          "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
        name: "hydrogenated vegetable oil",
        safety_level: "high",
      },
      {
        description: null,
        name: "calcium",
        safety_level: null,
      },
      {
        description: null,
        name: "nut butter",
        safety_level: null,
      },
      {
        description: null,
        name: "legumes",
        safety_level: null,
      },
      {
        description: null,
        name: "refined sweetener",
        safety_level: null,
      },
      {
        description: null,
        name: "non food item",
        safety_level: null,
      },
      {
        description: null,
        name: "tree nuts",
        safety_level: null,
      },
      {
        description: null,
        name: "chocolate",
        safety_level: null,
      },
      {
        description: null,
        name: "sugar",
        safety_level: null,
      },
      {
        description: null,
        name: "snack",
        safety_level: null,
      },
      {
        description: null,
        name: "corn syrup",
        safety_level: null,
      },
      {
        description: null,
        name: "drink",
        safety_level: null,
      },
      {
        description: null,
        name: "milk",
        safety_level: null,
      },
      {
        description: null,
        name: "spread",
        safety_level: null,
      },
      {
        description: null,
        name: "vegetable oil",
        safety_level: null,
      },
      {
        description: null,
        name: "yeast nutrient",
        safety_level: null,
      },
      {
        description: null,
        name: "palm kernel oil",
        safety_level: null,
      },
      {
        description: null,
        name: "artificial ingredient",
        safety_level: null,
      },
      {
        description: null,
        name: "stabilizer",
        safety_level: null,
      },
      {
        description: null,
        name: "additive",
        safety_level: null,
      },
      {
        description: null,
        name: "nutrient",
        safety_level: null,
      },
      {
        description: null,
        name: "soybean oil",
        safety_level: null,
      },
      {
        description: null,
        name: "supplement",
        safety_level: null,
      },
      {
        description: null,
        name: "mineral",
        safety_level: null,
      },
      {
        description: null,
        name: "artificial flavor",
        safety_level: "medium",
      },
      {
        description: null,
        name: "skim milk",
        safety_level: null,
      },
      {
        description: null,
        name: "peanuts",
        safety_level: null,
      },
      {
        description: null,
        name: "corn syrup solids",
        safety_level: "medium",
      },
      {
        description:
          "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
        name: "hydrogenated palm kernel oil",
        safety_level: "high",
      },
      {
        description: null,
        name: "cottonseed oil",
        safety_level: null,
      },
      {
        description: null,
        name: "milkfat",
        safety_level: "high",
      },
      {
        description: null,
        name: "lactose",
        safety_level: null,
      },
      {
        description: null,
        name: "corn syrup",
        safety_level: null,
      },
      {
        description: null,
        name: "cocoa butter",
        safety_level: "high",
      },
      {
        description: null,
        name: "tbhq to maintain freshness",
        safety_level: null,
      },
      {
        description: null,
        name: "peanut butter",
        safety_level: null,
      },
      {
        description: null,
        name: "egg whites",
        safety_level: null,
      },
      {
        description: null,
        name: "sugar",
        safety_level: null,
      },
      {
        description: null,
        name: "milk chocolate",
        safety_level: null,
      },
      {
        description: null,
        name: "palm oil",
        safety_level: null,
      },
      {
        description: null,
        name: "artificial flavor",
        safety_level: null,
      },
      {
        description: null,
        name: "salt",
        safety_level: null,
      },
      {
        description: null,
        name: "almonds",
        safety_level: null,
      },
      {
        description: null,
        name: "skim milk less than 2% - lactose",
        safety_level: null,
      },
      {
        description: null,
        name: "vegetable oil",
        safety_level: null,
      },
      {
        description: null,
        name: "less than 2% - glycerin",
        safety_level: null,
      },
      {
        description: null,
        name: "dextrose",
        safety_level: "high",
      },
      {
        description:
          "Soy lecithin is not a concern for most people allergic to soy.",
        name: "soy lecithin",
        safety_level: "high",
      },
      {
        description: null,
        name: "invert sugar",
        safety_level: "high",
      },
      {
        description: null,
        name: "chocolate",
        safety_level: null,
      },
      {
        description: null,
        name: "rapeseed oil",
        safety_level: null,
      },
      {
        description: null,
        name: "partially hydrogenated soybean oil",
        safety_level: "low",
      },
      {
        description: null,
        name: "calcium carbonate",
        safety_level: "high",
      },
      {
        description: null,
        name: "partially hydrogenated palm kernel oil",
        safety_level: "low",
      },
      {
        description: null,
        name: "artificial flavor.snickers brand",
        safety_level: null,
      },
      {
        description: null,
        name: "snickers brand almond bar",
        safety_level: null,
      },
    ],
    likes: 0,
    aisle: "Sweet Snacks",
    nutrition: {
      nutrients: [
        {
          name: "Fat",
          amount: 4,
          unit: "g",
          percentOfDailyNeeds: 6.15,
        },
        {
          name: "Protein",
          amount: 10,
          unit: "g",
          percentOfDailyNeeds: 20,
        },
        {
          name: "Calories",
          amount: 200,
          unit: "cal",
          percentOfDailyNeeds: 10,
        },
        {
          name: "Carbohydrates",
          amount: 26,
          unit: "g",
          percentOfDailyNeeds: 9.45,
        },
      ],
      caloricBreakdown: {
        percentProtein: 22.22,
        percentFat: 20,
        percentCarbs: 57.78,
      },
    },
    price: 324.0,
    servings: {
      number: 8,
      size: 4,
      unit: "pieces",
    },
    spoonacularScore: 0.0,
  };

  //   const [username, setUsername] = React.useState("");
  //   const [userPreferences, setUserPreferences] = React.useState([""]);

  //   // Get user's preferences
  //   React.useEffect(async () => {
  //     AsyncStorage.getItem("username")
  //       .then((response) => {
  //         setUsername(response);
  //         const userPreferencesRef = doc(db, "Preferences", response); // Replace "Joe" with the actual user ID
  //         const unsubscribe = onSnapshot(userPreferencesRef, (docSnapshot) => {
  //           if (docSnapshot.exists()) {
  //             const userData = docSnapshot.data();
  //             const updatedSelectedPreferences = preferences.filter(
  //               (preference) => userData[preference]
  //             );
  //             setUserPreferences(updatedSelectedPreferences);
  //           }
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //   if (!product) {
  //     return (
  //       <View className="bg-main-background h-screen">
  //         <Text className="text-4xl font-extrabold text-center mt-72 mx-14 mb-12 uppercase text-[#E11D48]">
  //           You have not scanned a product!
  //         </Text>
  //         <ItemButton
  //           buttonText={"To Scanner"}
  //           onPress={() => navigation.navigate("Scanner")}
  //         />
  //       </View>
  //     );
  //   }

  //   const checkUnfulfilled = (preferences) => {
  //     console.log(preferences);
  //     const preferencesMapped = preferences.map((preference) => {
  //       switch (preference) {
  //         case "egg_free":
  //           return "Egg Free";
  //         case "wheat_free":
  //           return "Wheat Free";
  //         case "grain_free":
  //           return "Grain Free";
  //         case "peanut_free":
  //           return "Peanut Free";
  //         case "primal":
  //           return "Primal";
  //         case "vegetarian":
  //           return "Vegetarian";
  //         case "nut_free":
  //           return "Nut Free";
  //         case "vegan":
  //           return "Vegan";
  //         case "pescetarian":
  //           return "Pescetarian";
  //         case "dairy_free":
  //           return "Dairy Free";
  //         case "paleo":
  //           return "Paleo";
  //         case "gluten_free":
  //           return "Gluten Free";
  //       }
  //     });
  //     const filteredPreferences = preferencesMapped.filter(
  //       (x) => x !== undefined
  //     );
  //     let unfulfilledPreferences = userPreferences.filter(
  //       (o) => !filteredPreferences.includes(o)
  //     );
  //     let fulfilledPreferences = userPreferences.filter((o) =>
  //       filteredPreferences.includes(o)
  //     );
  //     console.log(unfulfilledPreferences, fulfilledPreferences);
  //     return [unfulfilledPreferences, fulfilledPreferences];
  //   };

  //   let [unfulfilledPreferences, fulfilledPreferences] = checkUnfulfilled(
  //     product.badges
  //   );

  return (
    <View className="bg-main-background flex">
      <ScrollView className="h-screen bg-main-background flex">
        <BackButton navigation={navigation} />
        <Image
          className="object-fill flex-1 h-60 w-36 mx-auto  -mt-7"
          source={{
            uri: `https://spoonacular.com/productImages/${product.id}-636x393.${product.imageType}`,
          }}
        />
        <View className="mx-9 mb-36">
          <Text className="text-lg font-bold ">{product.title}</Text>
          <View className="flex flex-row  items-center">
            <Text className="font-bold text-lg  mt-4">$1.30/kg</Text>
            <View className="flex flex-row mt-4 ml-auto">
              <Text
                className="p-2 border border-gray-300 rounded-full cursor-pointer text-lg"
                onPress={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)}
              >
                {" - "}
              </Text>
              <Text className="p-2 font-bold text-lg">{quantity}</Text>
              <Text
                className="p-2 border border-gray-300 rounded-full cursor-pointe text-lg"
                onPress={() => setQuantity(quantity + 1)}
              >
                {" + "}
              </Text>
            </View>
          </View>

          <Text className="text-black">
            ______________________________________
          </Text>
          <Text className="font-bold  text-lg mt-4">PRODUCT DETAILS</Text>
          <Text style={{ fontSize: 16 }} className="self-start mt-3">
            {product.generatedText}
          </Text>
          <Text className="font-bold text-lg  mt-4">INGREDIENTS</Text>
          <Text style={{ fontSize: 16 }} className="text-md self-start">
            {product.ingredients.length > 1 ? (
              <Text>
                {product.ingredients.map((ingredient, index) => (
                  <Text key={index}>
                    {ingredient.name[0].toUpperCase() +
                      ingredient.name.slice(1)}
                    <GreenCheckmark />
                    {index < product.ingredients.length - 1 ? ", " : ""}
                  </Text>
                ))}
              </Text>
            ) : (
              "No Information on ingredients."
            )}
          </Text>
          {/*Explore similar products  */}
          <Text className="font-bold  text-lg mt-4">
            EXPLORE SIMILAR PRODUCTS
          </Text>
          {/* we can always dynamically adjust the width based off the number of similar items */}
          <ScrollView horizontal="True" contentContainerStyle={{ width: 700 }}>
            <View className=" flex flex-row overflow-x-scroll ">
              <SimilarProductBox product={product} />
              <SimilarProductBox product={product} />
              <SimilarProductBox product={product} />
              <SimilarProductBox product={product} />
            </View>
          </ScrollView>

          {/* <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            MACROS
          </Text> */}
          {/* <Text style={{ fontSize: 16 }} className="text-md self-start">
            {product.nutrition.nutrients.length >= 1
              ? product.nutrition.nutrients.map((nutrient, index) => (
                  <Text key={index}>
                    {"\n"}
                    {"\u2022  "}
                    {nutrient.name.toUpperCase()} - {nutrient.amount}
                    {nutrient.unit}
                  </Text>
                ))
              : "No Information on ingredients."}
          </Text> */}
          {/* <Text
            style={{ fontSize: 16 }}
            className="font-bold text-[#D44C3D] mt-4"
          >
            PREFERENCE MATCH : {unfulfilledPreferences ? "" : ""} SUITABLE
          </Text> */}
          {/* <Text style={{ fontSize: 16 }} className="mt-4 mb-6">
            {unfulfilledPreferences.map((preference, index) => (
              <React.Fragment key={index}>
                <AntDesign
                  name="closecircle"
                  size={16}
                  color="brown"
                  style={{ marginTop: -18 }}
                ></AntDesign>
                <Text> </Text>
                <Text>{preference}</Text>
                {index !== unfulfilledPreferences.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </Text> */}
          {/* <Text style={{ fontSize: 16 }} className="mb-6">
            {fulfilledPreferences.map((preference, index) => (
              <React.Fragment key={index}>
                <AntDesign
                  name="checkcircle"
                  size={16}
                  color="green"
                  style={{ marginTop: -18 }}
                ></AntDesign>
                <Text> </Text>
                <Text>{preference}</Text>
                {index !== fulfilledPreferences.length - 1 ? ", " : ""}
              </React.Fragment>
            ))}
          </Text> */}
          {/* <ItemButton
            buttonText="Explore Similar Products"
            onPress={() =>
              navigation.navigate("Comparison", { product: product })
            }
          /> */}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 115,
          width: "100%",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
          className="rounded-full p-3 px-5 bg-[#355D4E]"
        >
          <Text className="text-white font-bold">ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item2;
