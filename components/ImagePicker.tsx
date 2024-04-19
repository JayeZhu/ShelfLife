import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
  type: 'image' | 'photo' | 'both';
  src: string;
  setSrc: (src: string) => void;
}

export default function ImageSelector(props: IProps) {
  const { src, type, setSrc } = props;

  const pickImage = async () => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSrc(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraPermission.status === 'granted' && mediaLibraryPermission.status === 'granted') {
      let photo = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!photo.canceled) {
        setSrc(photo.assets[0].uri);
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 200, flexDirection: 'row' }}>
      {src && <Image source={{ uri: src }} style={{ width: 200, height: 200 }} />}
      <View style={{ margin: 20, flexDirection: 'row' }}>
        <Ionicons name="image" size={32} color="gray" onPress={pickImage} />
        <Ionicons name="camera" size={32} color="gray" onPress={takePhoto} />
      </View>
    </View>
  );
}