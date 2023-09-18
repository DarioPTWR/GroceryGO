import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, View, Text, Image } from "react-native";

const AddImage = ({saveURI}) => {
    const [image,setImage] = useState(null);
    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            aspect: [4,3]
        });
        if (!_image.canceled) {
            setImage(_image.assets[0].uri);
            saveURI(_image.assets[0].uri);
        };
    };
    return (
        <View className="mx-auto mt-4">
            <View className="overflow-hidden w-40 h-40 rounded-full border">
                {
                    image  && <Image source={{ uri: image }} className="w-40 h-40 rounded-full" />
                }
                <TouchableOpacity onPress={addImage} className='absolute left-0 bottom-0 h-1/4 w-full bg-gray-500 opacity-70'>
                    <Text className='text-center mt-1'>{image? 'Edit' : 'Upload'} Image</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddImage;