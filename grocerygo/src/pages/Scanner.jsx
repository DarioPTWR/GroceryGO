import { useState } from 'react';
import React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [product, setProduct] = useState('');

  React.useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    axios.get(
      `https://api.upcdatabase.org/product/${data}?apikey=6D00C35F312273F6627F7266B6D3A333` // add to backend
    )
      .then(res => {
        setScanned(true);
        setProduct(res.data)
      })
      .catch(err => {
        setScanned(true);
        setProduct({title: "Not Found"})
        alert(err)
      })
  };

  if (hasPermission === null) {
    return (
      <View className="flex-1 justify-center items-center mx-14">
        <BackButton/>
        <Text className="text-5xl font-extrabold self-start">Scan A Product</Text>
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
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View className="flex-1 justify-center items-center mx-14">
        <Text className="text-5xl font-extrabold self-start">Scan A Product</Text>
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
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 h-screen px-14 pt-16 bg-main-background">
      <Text className="text-5xl font-extrabold self-start">Scan A Product</Text>
      <Text className="text-xs font-bold self-start">Use the scanner below to scan the item.</Text>
      <BarCodeScanner 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
        className="w-full aspect-square my-6"
      />
      {!scanned && <Text className="text-center font-bold text-md">Please scan the barcode of the product.</Text>}
      {scanned && <Text className="text-center font-extrabold text-lg text-md text-main-red">PRODUCT SCANNED:</Text>}
      {scanned && <Text className="text-center font-extrabold text-xl text-main-red">{product.title}</Text>}
      <Pressable 
        className="bg-main-green rounded-lg p-3 w-full mt-8" 
        onPress={() => setScanned(false)}
      >
        <Text className='text-white text-lg text-center'>Scan {scanned ? 'Again' : 'Product'}</Text>
      </Pressable>
      {scanned && 
        <Pressable 
          className="bg-main-green rounded-lg p-3 w-full mt-6" 
          onPress={() => navigation.navigate("Test", {product: product})}
        >
          <Text className='text-white text-lg text-center'>Find Out More</Text>
        </Pressable>
      }
    </SafeAreaView>
  );
}
