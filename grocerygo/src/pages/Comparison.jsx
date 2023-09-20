import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton";

const user_badges = ["egg_free"];
// get the product name and upc from the scanner
const product_upc = "041631000564";
const product_name = "Swan Flour";
// GET https://api.spoonacular.com/food/products/upc/{upc}
body = { title: product_name, upc: product_upc };
JSON_body = JSON.stringify(body);

// add a button for each preference in the preferences array
const ProductCard = ({ product }) => {
  return (
    <View className="w-1/2 text-center">
      <Image
        style={styles.image}
        className="mx-auto"
        source={{ uri: product.imageUrl }}
      />
      <Text className="text-md font-medium text-center">{product.title}</Text>
    </View>
  );
};

// const products = [
//   {
//     imageUrl: "https://spoonacular.com/productImages/10054770-312x231.jpg",
//     title: "Ritz crackers toasted 1x0.75 oz",
//   },
//   {
//     imageUrl: "https://spoonacular.com/productImages/12268476-312x231.jpg",
//     title: "Buttery Tectured Crackers",
//   },
//   {
//     imageUrl: "https://spoonacular.com/productImages/11746962-312x231.jpg",
//     title: "Sweet butter crackers",
//   },
//   {
//     imageUrl: "https://spoonacular.com/productImages/5070738-312x231.jpg",
//     title: "Kelloggs Keebler Light Buttery Crackers, 16 oz",
//   },
// ];

const Comparison = ({ navigation }) => {
  const route = useRoute();
  const product = route.params?.product;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //classify the product
    axios
      .post(
        "https://api.spoonacular.com/food/products/classify",
        {
          title: product.title,
          upc: product.upc,
        },
        {
          params: { apiKey: "ef7386df4ade4892ac164598e7f45732" },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        //get the category of the product
        // console.log(response.data.category);
        // console.log(response.data);
        query = response.data.category;
        axios
          .get(
            `https://api.spoonacular.com/food/products/search?query=${query}&addProductInformation=True&number=4&apiKey=ef7386df4ade4892ac164598e7f45732`
          )
          .then((response) => {
            const newProducts = [];
            for (let i = 0; i < 4; i++) {
              const productData = response.data.products[i];
              // filter out the products if one of the user badges is not included in the product badges, dont add to the list
              if (productData.badges.some((r) => user_badges.indexOf(r) >= 0)) {
                newProducts.push({
                  title: productData.title,
                  imageUrl: productData.image,
                });
              }
            }
            console.log(newProducts);
            setProducts(newProducts);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    // use the category to get the similar products
  }, []);

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <BackButton navigation={navigation} />
      <View className="flex-1 px-8 pt-8">
        <Text className="font-extrabold text-5xl ">Find Similar Products</Text>
        <Text className="text-xs font-bold text-black">
          Filter according to store and price of item.
        </Text>
        <View className='mt-8'>
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductCard product={item} />}
            numColumns={2}
            ItemSeparatorComponent={() => <View className="h-8" />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 20,
  },
  cardContainer: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // Adjust as needed for spacing
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default Comparison;
