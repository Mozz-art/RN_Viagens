// src/components/Galeria.js
import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, Alert } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { BlurView } from "expo-blur";
import { interpolate } from "react-native-reanimated";
import * as S from "./styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from 'react-redux';
import { setGalleryImages, addGalleryImage, removeGalleryImage } from '../../database/store';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Galeria() {
  const headerHeight = 95;
  const scale = 0.9;

  const RIGHT_OFFSET = windowWidth * (1 - scale);

  const ITEM_WIDTH = windowWidth * scale;
  const ITEM_HEIGHT = 220;

  const PAGE_HEIGHT = windowHeight - headerHeight;
  const PAGE_WIDTH = windowWidth;

  const dispatch = useDispatch();
  const galleryImages = useSelector(state => state.pedometer.galleryImages);

  const [photoName, setPhotoName] = useState("");

  const animationStyle = useCallback(
    (value) => {
      "worklet";

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-ITEM_HEIGHT, 0, ITEM_HEIGHT]
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3]
      );
      return {
        transform: [{ translateY }],
        right,
      };
    },
    [RIGHT_OFFSET, ITEM_HEIGHT]
  );

  const removeImage = (indexToRemove) => {
    const updatedImages = galleryImages.filter((_, index) => index !== indexToRemove);
    dispatch(setGalleryImages(updatedImages));
    saveImages(updatedImages);
  };

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão negada",
        "Você precisa permitir o acesso à galeria para selecionar uma imagem."
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      const newImage = {
        uri: pickerResult.assets[0].uri,
        name: photoName || "Fotos",
      };
      dispatch(addGalleryImage(newImage));
      setPhotoName("");
      saveImages([...galleryImages, newImage]);
    }
  };

  const saveImages = async (images) => {
    try {
      const jsonValue = JSON.stringify(images);
      await AsyncStorage.setItem("@images", jsonValue);
    } catch (e) {
      console.error("Error saving images:", e);
    }
  };

  const loadImages = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@images");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("Error loading images:", e);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedImages = await loadImages();
      if (storedImages) {
        dispatch(setGalleryImages(storedImages));
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <BlurView
        intensity={80}
        tint="dark"
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          position: "absolute",
        }}
      />
      <Carousel
        loop
        vertical
        style={{
          justifyContent: "center",
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
        }}
        width={ITEM_WIDTH}
        pagingEnabled={false}
        height={ITEM_HEIGHT}
        data={galleryImages}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity key={index}>
              <S.Container2>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 20,
                    
                  }}
                >
                  <S.DeleteButton onPress={() => removeImage(index)}>
                    <Feather name="trash" size={20} color="#fff" />
                  </S.DeleteButton>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        maxWidth: ITEM_WIDTH * 0.3 - 40,
                        color: "white",
                        fontSize: 16,
                        marginLeft: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: ITEM_WIDTH * 0.6,
                      height: ITEM_HEIGHT - 20,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        width: ITEM_WIDTH * 0.6,
                        height: ITEM_HEIGHT - 20,
                        borderRadius: 10,
                        marginRight: 5,
                      }}
                      source={
                        typeof item.uri === "string"
                          ? { uri: item.uri }
                          : item.uri
                      }
                    />
                  </View>
                </View>
              </S.Container2>
            </TouchableOpacity>
          );
        }}
        customAnimation={animationStyle}
      />
      <S.ButtonContainer>
        <S.AddButton onPress={openImagePicker}>
          <S.Input
            placeholder="Nome da foto"
            value={photoName}
            onChangeText={setPhotoName}
            placeholderTextColor="#FFFFFF"
          />
          <MaterialIcons name="add" size={24} color="#fff" />
        </S.AddButton>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Galeria;
