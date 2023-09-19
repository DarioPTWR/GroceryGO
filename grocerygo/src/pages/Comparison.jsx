import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Comparison = () => {
  const products = [
    {
      title: "Product 1",
      description: "Description of Product 1",
      imageUrl: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      title: "Product 2",
      description: "Description of Product 2",
      imageUrl: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      title: "Product 3",
      description: "Description of Product 3",
      imageUrl: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
      title: "Product 4",
      description: "Description of Product 4",
      imageUrl: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <ScrollView>
        <View className="flex-1 m-3 p-2">
          <Text className="font-bold text-6xl ">Find Similar Products</Text>
          <Text  className="text-base font-medium text-black  pt-2">
            Filter according to store and price of item.
          </Text>
          {/*  */}
          <View className = 'flex flex-row flex-wrap justify-between mt-5'>
            {products.map((product, index) => (
              <View key={index} className='border border-black mb-2 justify-center text-center items-center'>
                <Image
                  style={styles.image}
                  source={{ uri: product.imageUrl }}
                />
                <Text style={styles.cardTitle}>{product.title}</Text>
                <Text style={styles.cardDescription}>
                  {product.description}
                </Text>
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
