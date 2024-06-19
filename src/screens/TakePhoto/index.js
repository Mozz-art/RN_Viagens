import React, { useState, useEffect, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';
import { View, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const TakePhoto = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [pickedImagePath, setPickedImagePath] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const imageWidth = windowWidth * 0.8;
  const imageHeight = windowHeight * 0.57;

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPickedImagePath(photo.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await Camera.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Sem permissão de acesso a câmera!');
      return;
    }

    setShowCamera(true);
  };

  const closeCamera = () => {
    setShowCamera(false);
  };

  const deletePhoto = () => {
    setPickedImagePath('');
  };

  return (
    <S.Container>
      {!showCamera && (
        <>
          {pickedImagePath !== '' && (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: pickedImagePath }}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  resizeMode: 'cover',
                  marginVertical: 10,
                }}
              />
            </View>
          )}

          <S.TaskContainer>
            <S.ActionButton onPress={openCamera}>
              <MaterialIcons name="photo-camera" size={24} color="#fff" />
            </S.ActionButton>
          </S.TaskContainer>
        </>
      )}

      {showCamera && (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={cameraRef}
        />
      )}

      {showCamera && (
        <S.TaskContainerCamera>
          <S.CameraButton
            onPress={async () => {
              await takePicture();
              closeCamera();
            }}
          >
            <MaterialIcons name="camera" size={22} color="white" />
          </S.CameraButton>
          <S.CameraButton onPress={deletePhoto}>
            <MaterialIcons name="delete" size={22} color="white" />
          </S.CameraButton>
          <S.CameraButton onPress={closeCamera}>
            <MaterialIcons name="close" size={22} color="white" />
          </S.CameraButton>
        </S.TaskContainerCamera>
      )}
    </S.Container>
  );
};

export default TakePhoto;
