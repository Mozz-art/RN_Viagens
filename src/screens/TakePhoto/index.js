import React, { useState, useRef } from "react";
import { Button, Text, View, Image, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
  Container,
  Container2,
  CameraContainer,
  ButtonContainer,
  ButtonContainer2,
  StyledButton,
  StyledButton2,
} from "./styles";
import { Feather } from "@expo/vector-icons";

const TakePhoto = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [showCamera, setShowCamera] = useState(true);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <Container>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="garantir permissão" />
      </Container>
    );
  }

  async function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function tirarFoto() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri);
        setShowCamera(false);
      } catch (error) {
        console.error("Erro ao tirar a foto:", error);
      }
    }
  }

  async function deleteFoto() {
    setPhotoUri(null);
    setShowCamera(true);
  }

  async function salvarFoto() {
    if (photoUri) {
      try {
        await MediaLibrary.saveToLibraryAsync(photoUri);
        Alert.alert("Foto salva com sucesso!");
        setShowCamera(true);
      } catch (error) {
        console.error("Erro ao salvar a foto:", error);
        Alert.alert("Erro ao salvar a foto!");
      }
    } else {
      Alert.alert("Nenhuma foto para salvar!");
    }
  }

  return (
    <Container>
      <CameraContainer>
        {showCamera ? (
          <CameraView style={{ flex: 1 }} facing={facing} ref={cameraRef}>
            <ButtonContainer>
              <StyledButton onPress={toggleCameraFacing}>
                <Feather name="refresh-ccw" size={40} color="#fff" />
              </StyledButton>
              <StyledButton onPress={tirarFoto}>
                <Feather name="camera" size={40} color="#fff" />
              </StyledButton>
            </ButtonContainer>
          </CameraView>
        ) : (
          <Container>
            <Image
              source={{ uri: photoUri }}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
            {!showCamera && (
              <ButtonContainer2>
                <StyledButton2 onPress={deleteFoto}>
                  <Feather name="x" size={40} color="#fff" />
                </StyledButton2>
                <StyledButton2 onPress={salvarFoto}>
                  <Feather name="save" size={40} color="#fff" />
                </StyledButton2>
              </ButtonContainer2>
            )}
          </Container>
        )}
      </CameraContainer>
    </Container>
  );
};

export default TakePhoto;
