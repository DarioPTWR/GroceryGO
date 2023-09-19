import { useState } from 'react';
import React from 'react';
import { Button, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import baseURL from '../baseURL';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  
  React.useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    setLoading(true)
    axios.get(`https://api.spoonacular.com/food/products/upc/${data}?apiKey=edb8d0432df44f4983f00ce195392a1e`)
      .then(res => {
        console.log(res.data)
        setLoading(false)
        if(res.data.status === "failure"){
          setProduct({title: "Not Found"})
        }else{
          setProduct(res.data)
        }
      })
      .catch(err => {
        setLoading(false)
        setProduct({title: "Not Found"})
        alert(err);
      })
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView className="flex-1 h-screen px-14 bg-main-background">
        <BackButton/>
        <Text className="text-5xl font-extrabold self-start mt-16">Scan A Product</Text>
        <Text className="text-xs font-bold self-start">Use the scanner below to scan the item.</Text>
        <View 
          className="w-full aspect-square my-6 bg-zinc-700 flex justify-center p-6"
        >
          <Text className="text-white text-2xl text-center">Allow camera access.</Text>
        </View>
        <Text className="text-center font-bold text-md">Please scan the barcode of the product.</Text>
        <Pressable 
          className="bg-main-green rounded-lg p-3 w-full mt-8"
        >
          <Text className='text-white text-lg text-center'>Scan Product</Text>
        </Pressable>
      </SafeAreaView>
    )
  }
  
  if (hasPermission === false) {
    return (
      <SafeAreaView className="flex-1 h-screen px-14 bg-main-background">
        <Text className="text-5xl font-extrabold self-start mt-16">Scan A Product</Text>
        <Text className="text-xs font-bold self-start">Use the scanner below to scan the item.</Text>
        <View 
          className="w-full aspect-square my-6 bg-zinc-700 flex justify-center p-6"
        >
          <Text className="text-white text-2xl text-center">No camera access.</Text>
        </View>
        <Text className="text-center font-bold text-md">Please scan the barcode of the product.</Text>
        <Pressable 
          className="bg-main-green rounded-lg p-3 w-full mt-8"
        >
          <Text className='text-white text-lg text-center'>Scan Product</Text>
        </Pressable>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 h-screen bg-main-background">
      <ScrollView className='px-14'>
        <Text className="text-5xl font-extrabold self-start mt-16">Scan A Product</Text>
        <Text className="text-xs font-bold self-start">Use the scanner below to scan the item.</Text>
        <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
          className="w-full aspect-square my-6"
        />
        {!scanned && !loading && <Text className="text-center font-bold text-md">Please scan the barcode of the product.</Text>}
        {loading && <Text className="text-center font-bold text-xl">Loading...</Text>}
        {scanned && !loading && <Text className="text-center font-extrabold text-lg text-md text-main-red">PRODUCT SCANNED:</Text>}
        {scanned && !loading && <Text className="text-center font-extrabold text-xl text-main-red" numberOfLines={1}>{product.title}</Text>}
        {
          loading ? '' :
          <Pressable 
            className="bg-main-green rounded-lg p-3 w-full mt-8 active:scale-95 transition-all" 
            onPress={() => setScanned(false)}
          >
            <Text className='text-white text-lg text-center'>Scan {scanned && !loading ? 'Again' : 'Product'}</Text>
          </Pressable>
        }
        {scanned && !loading && product.title !== "Not Found" && 
          <Pressable 
            className="bg-main-green rounded-lg p-3 w-full mt-6" 
            onPress={() => navigation.navigate("Item", {product: product})}
          >
            <Text className='text-white text-lg text-center'>Find Out More</Text>
          </Pressable>
        }
      </ScrollView>
    </SafeAreaView>
  );
}