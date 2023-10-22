import { useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import BackButton from "../components/Buttons/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import baseURL from "../baseURL";

// const producttt = {
//   aisle: "Savory Snacks",
//   badges: [
//     "egg_free",
//     "msg_free",
//     "peanut_free",
//     "no_artificial_colors",
//     "no_artificial_flavors",
//     "vegetarian",
//     "nut_free",
//     "no_artificial_ingredients",
//     "vegan",
//     "dairy_free",
//     "soy_free",
//   ],
//   brand: null,
//   breadcrumbs: ["butter crackers", "crackers", "snack", "menu item type"],
//   description: null,
//   generatedText:
//     "Ritz crackers original: This product is an awesome fit if you like to buy products that are vegetarian and vegan. We recommend choosing products with short ingredient lists, as these tend to be less processed. This product has 16 ingredients. According to our research, this product contains no ingredients that you should avoid.",
//   id: 9290956,
//   image: "https://spoonacular.com/productImages/9290956-312x231.jpg",
//   imageType: "jpg",
//   images: [
//     "https://spoonacular.com/productImages/9290956-90x90.jpg",
//     "https://spoonacular.com/productImages/9290956-312x231.jpg",
//     "https://spoonacular.com/productImages/9290956-636x393.jpg",
//   ],
//   importantBadges: [],
//   ingredientCount: 16,
//   ingredientList:
//     'span class="allergen">wheat flour</span>, palm oil, sugar, raising agents (ammonium bicarbonate, monocalcium orthophosphate, sodium bicarbonate, potassium bicarbonate), glucose-fructose syrup, salt, <span class="allergen">barley malt flour</span>, emulsifier (sunflower lecithin), may contain <span class="allergen">egg</span>, <span class="allergen">milk</span>, <span class="allergen">sesame</span',
//   ingredients: [
//     { description: null, name: "wheat flour", safety_level: null },
//     { description: null, name: "sesame", safety_level: null },
//     { description: null, name: "egg", safety_level: null },
//     { description: null, name: "sunflower lecithin", safety_level: null },
//     { description: null, name: "raising agents", safety_level: null },
//     { description: null, name: "milk", safety_level: null },
//     { description: null, name: "potassium bicarbonate", safety_level: null },
//     { description: null, name: "barley malt flour", safety_level: null },
//     { description: null, name: "ammonium bicarbonate", safety_level: null },
//     {
//       description: null,
//       name: "monocalcium orthophosphate",
//       safety_level: null,
//     },
//     { description: null, name: "palm oil", safety_level: null },
//     { description: null, name: "sugar", safety_level: null },
//     {
//       description: null,
//       name: "glucose-fructose syrup",
//       safety_level: "controversial",
//     },
//     { description: null, name: "sodium bicarbonate", safety_level: null },
//     { description: null, name: "salt", safety_level: null },
//   ],
//   likes: 0,
//   nutrition: {
//     caloricBreakdown: {
//       percentCarbs: 21.2,
//       percentFat: 68.59,
//       percentProtein: 10.21,
//     },
//     calories: null,
//     carbs: "16g",
//     fat: "23g",
//     protein: "7.699999809265137g",
//   },
//   price: 0,
//   servings: { number: 8, size: 25, unit: "g" },
//   spoonacularScore: 27.5,
//   title: "Ritz crackers original",
//   upc: "7622210157324",
// };

export default function Scanner({ navigation }) {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [product, setProduct] = useState({});
  // const isFocused = useIsFocused();

  // React.useEffect(() => {
  //   const getBarCodeScannerPermissions = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   };

  //   getBarCodeScannerPermissions();
  // }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   setLoading(true);
  //   // setLoading(false);
  //   // setProduct({ ...producttt, upc: data });
  //   axios
  //     .get(
  //       `https://api.spoonacular.com/food/products/upc/${data}?apiKey=ef7386df4ade4892ac164598e7f45732`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setLoading(false);
  //       if (res.data.status === "failure") {
  //         setProduct({ title: "Not Found" });
  //       } else {
  //         setProduct(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setProduct({ title: "Not Found" });
  //       alert(err);
  //     });
  // };

  // if (hasPermission === null) {
  //   return (
  //     <SafeAreaView className="flex-1 h-screen px-14 bg-main-background">
  //       <BackButton />
  //       <Text className="text-5xl font-extrabold self-start mt-16">
  //         Scan A Product
  //       </Text>
  //       <Text className="text-xs font-bold self-start">
  //         Use the scanner below to scan the item.
  //       </Text>
  //       <View className="w-full aspect-square my-6 bg-zinc-700 flex justify-center p-6">
  //         <Text className="text-white text-2xl text-center">
  //           Allow camera access.
  //         </Text>
  //       </View>
  //       <Text className="text-center font-bold text-md">
  //         Please scan the barcode of the product.
  //       </Text>
  //       <Pressable className="bg-main-green rounded-lg p-3 w-full mt-8">
  //         <Text className="text-white text-lg text-center">Scan Product</Text>
  //       </Pressable>
  //     </SafeAreaView>
  //   );
  // }

  // if (hasPermission === false) {
  //   return (
  //     <SafeAreaView className="flex-1 h-screen px-14 bg-main-background">
  //       <Text className="text-5xl font-extrabold self-start mt-16">
  //         Scan A Product
  //       </Text>
  //       <Text className="text-xs font-bold self-start">
  //         Use the scanner below to scan the item.
  //       </Text>
  //       <View className="w-full aspect-square my-6 bg-zinc-700 flex justify-center p-6">
  //         <Text className="text-white text-2xl text-center">
  //           No camera access.
  //         </Text>
  //       </View>
  //       <Text className="text-center font-bold text-md">
  //         Please scan the barcode of the product.
  //       </Text>
  //       <Pressable className="bg-main-green rounded-lg p-3 w-full mt-8">
  //         <Text className="text-white text-lg text-center">Scan Product</Text>
  //       </Pressable>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView className="flex-1 h-screen bg-main-background">
      <ScrollView className="px-14">
        <Text className="text-5xl font-extrabold self-start mt-16">
          Scan A Product
        </Text>
        <Text className="text-xs font-bold self-start">
          Use the scanner below to scan the item.
        </Text>
        {/* {isFocused ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          className="w-full aspect-square my-6"
        />
        ) : null }
        {!scanned && !loading && (
          <Text className="text-center font-bold text-md">
            Please scan the barcode of the product.
          </Text>
        )}
        {loading && (
          <Text className="text-center font-bold text-xl">Loading...</Text>
        )}
        {scanned && !loading && (
          <Text className="text-center font-extrabold text-lg text-md text-main-red">
            PRODUCT SCANNED:
          </Text>
        )}
        {scanned && !loading && (
          <Text
            className="text-center font-extrabold text-xl text-main-red"
            numberOfLines={1}
          >
            {product.title}
          </Text>
        )}
        {loading ? (
          ""
        ) : (
          <Pressable
            className="bg-main-green rounded-lg p-3 w-full mt-8 active:scale-95 transition-all"
            onPress={() => setScanned(false)}
          >
            <Text className="text-white text-lg text-center">
              Scan {scanned && !loading ? "Again" : "Product"}
            </Text>
          </Pressable>
        )}
        {scanned && !loading && product.title !== "Not Found" && (
          <Pressable
            className="bg-main-green rounded-lg p-3 w-full mt-6"
            onPress={() => navigation.navigate("Item", { product: product })}
          >
            <Text className="text-white text-lg text-center">
              Find Out More
            </Text>
          </Pressable>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}
