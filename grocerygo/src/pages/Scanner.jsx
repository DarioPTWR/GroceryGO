import { useState } from 'react';
import React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  React.useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <View className="flex-1 justify-center items-center mx-14">
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
    return <Text>No access to camera</Text>;
  }

  return (
    <View className="flex-1 justify-center items-center mx-14">
      <Text className="text-5xl font-extrabold self-start">Scan A Product</Text>
      <Text className="text-xs font-bold self-start">Use the scanner below to scan the item.</Text>
      <BarCodeScanner 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
        className="w-full aspect-square my-6"
      />
      <Text className="text-center font-bold text-md">Please scan the barcode of the product.</Text>
      <Pressable 
        className="bg-main-green rounded-lg p-3 w-full mt-8" 
        onPress={() => setScanned(false)}
      >
        <Text className='text-white text-lg text-center'>Scan Product</Text>
      </Pressable>
    </View>
  );
}
