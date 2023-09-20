import {React,useState,useEffect} from "react";
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import axios from "axios";


const user_badges = ["egg_free"];
// get the product name and upc from the scanner
const product_upc = "041631000564";
const product_name = "Swan Flour";
// GET https://api.spoonacular.com/food/products/upc/{upc}
body = {title:product_name, upc: product_upc };
JSON_body = JSON.stringify(body);



// add a button for each preference in the preferences array 
const ProductCard = ({ product }) => {
  return (
    <View className="w-1/2 text-center">
      <Image style={styles.image} className='mx-auto' source={{ uri: product.imageUrl }} />
      <Text className="text-xs text-center">
        {product.title}
      </Text>
    </View>
  );
};

const products = [
  {
    imageUrl: "https://spoonacular.com/productImages/4550592-312x231.jpeg",
    title: "Jiva Organics Bajri Flour, 2 lb",
  },
  {
    imageUrl: "https://spoonacular.com/productImages/8395276-312x231.jpg",
    title: "Manini's, multi-purpose flour",
  },
  {
    imageUrl: "https://spoonacular.com/productImages/8395278-312x231.jpg",
    title: "Manini's, Multi Grain Flour",
  },
  {
    imageUrl: "https://spoonacular.com/productImages/8276682-312x231.jpg",
    title: "All-purpose flour",
  },
];

const Comparison = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   //classify the product
  //   axios
  //     .post("https://api.spoonacular.com/food/products/classify", JSON_body, {
  //       params: { apiKey: "edb8d0432df44f4983f00ce195392a1e" },
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((response) => {
  //       //get the category of the product
  //       // console.log(response.data.category);
  //       // console.log(response.data);
  //       query = response.data.category;
  //       axios
  //         .get(
  //           `https://api.spoonacular.com/food/products/search?query=${query}&addProductInformation=True&number=4&apiKey=edb8d0432df44f4983f00ce195392a1e`
  //         )
  //         .then((response) => {
  //           const newProducts = [];
  //           for (let i = 0; i < 4; i++) {
  //             const productData = response.data.products[i];
  //             // filter out the products if one of the user badges is not included in the product badges, dont add to the list
  //             if (productData.badges.some((r) => user_badges.indexOf(r) >= 0)) {
  //               newProducts.push({
  //                 title: productData.title,
  //                 imageUrl: productData.image
  //               });
  //               console.log(products);

  //             }
  //           }
  //           setProducts(newProducts);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // use the category to get the similar products
  // }, []);



  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <View className="flex-1 m-3 p-2">
        <Text className="font-bold text-6xl ">Find Similar Products</Text>
        <Text className="text-base font-medium text-black  pt-2">
          Filter according to store and price of item.
        </Text>
        <View className="w-screen p-5 flex items-center justify-center">
          {/* {
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          } */}
          <FlatList
            data={products}
            renderItem={({ item }) => <ProductCard product={item} />}
            numColumns={2}
            // contentContainerStyle={styles.cardContainer}
            // className="grid grid-cols-2 gap-4"
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
