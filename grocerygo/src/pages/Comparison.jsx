import {React,useState,useEffect} from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import axios from "axios";


const user_badges = ["egg_free"];
// get the product name and upc from the scanner
const product_upc = "041631000564";
const product_name = "Swan Flour";
// GET https://api.spoonacular.com/food/products/upc/{upc}
body = {title:product_name, upc: product_upc };
JSON_body = JSON.stringify(body);
const Comparison = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //classify the product
    axios
      .post("https://api.spoonacular.com/food/products/classify", JSON_body, {
        params: { apiKey: "f03217ecd0924dc1a912eb907eb0b497" },
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        //get the category of the product
        // console.log(response.data.category);
        // console.log(response.data);
        query = response.data.category;
        axios
          .get(
            `https://api.spoonacular.com/food/products/search?query=${query}&addProductInformation=True&number=4&apiKey=f03217ecd0924dc1a912eb907eb0b497`
          )
          .then((response) => {
            const newProducts = [];
            for (let i = 0; i < 4; i++) {
              const productData = response.data.products[i];
              // filter out the products if one of the user badges is not included in the product badges, dont add to the list
              if (productData.badges.some((r) => user_badges.indexOf(r) >= 0)) {
                newProducts.push({
                  title: productData.title,
                  description: productData.description,
                  imageUrl: productData.image,
                });
              }

            }
            setProducts(newProducts);
            console.log(products);
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

  // Dynamically adjust text size to fit inside the card
  const getDynamicFontSize = (cardWidth) => {
    const maxWidth = cardWidth - 20; // Subtracting padding
    const baseFontSize = 18; // Base font size

    if (maxWidth < baseFontSize) {
      return 10; // Minimum font size
    }

    return Math.min(baseFontSize, maxWidth / 10);
  };

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <ScrollView>
        <View className="flex-1 m-3 p-2">
          <Text className="font-bold text-6xl ">Find Similar Products</Text>
          <Text className="text-base font-medium text-black  pt-2">
            Filter according to store and price of item.
          </Text>
          <View className="flex flex-row flex-wrap justify-between mt-5">
            {products.map((product, index) => (
              <View
                key={index}
                className=" mb-2 justify-center text-center items-center"
              >
                <Image
                  style={styles.image}
                  source={{ uri: product.imageUrl }}
                />
                <Text
                  style={[
                    styles.cardTitle,
                    {
                      fontSize: getDynamicFontSize(
                        Dimensions.get("window").width * 0.48 // Card width
                      ),
                    },
                  ]}
                >
                  {product.title}
                </Text>
                {/* <Text style={styles.cardDescription}>
                  {product.description}
                </Text> */}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    flexDirection: "row",
    flexWrap: "wrap",
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
