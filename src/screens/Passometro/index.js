// src/components/Passometro.js
import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import * as S from './styles';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setStepCount, setDistance } from '../../database/store';

const Passometro = () => {
  const dispatch = useDispatch();
  const stepCount = useSelector(state => state.pedometer.stepCount);
  const distance = useSelector(state => state.pedometer.distance);
  const stepLength = 0.7;

  Accelerometer.setUpdateInterval(100);

  useEffect(() => {
    let isMounted = true;
    let lastStepTimestamp = Date.now();

    const loadStoredData = async () => {
      try {
        const storedStepCount = await AsyncStorage.getItem('stepCount');
        const storedDistance = await AsyncStorage.getItem('distance');
        if (storedStepCount !== null) {
          dispatch(setStepCount(Number(storedStepCount)));
        }
        if (storedDistance !== null) {
          dispatch(setDistance(Number(storedDistance)));
        }
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadStoredData();

    const saveData = async (steps, distance) => {
      try {
        await AsyncStorage.setItem('stepCount', steps.toString());
        await AsyncStorage.setItem('distance', distance.toString());
      } catch (error) {
        console.error('Failed to save data', error);
      }
    };

    const listener = Accelerometer.addListener((accelerometerData) => {
      if (isMounted) {
        const { x, y, z } = accelerometerData;
        const accelerationMagnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

        const threshold = 2;

        if (accelerationMagnitude > threshold) {
          const now = Date.now();
          const timeDiff = now - lastStepTimestamp;

          if (timeDiff > 300) {
            const newStepCount = stepCount + 1;
            const newDistance = distance + stepLength;

            dispatch(setStepCount(newStepCount));
            dispatch(setDistance(newDistance));

            saveData(newStepCount, newDistance);

            lastStepTimestamp = now;
          }
        }
      }
    });

    return () => {
      isMounted = false;
      listener && listener.remove();
    };
  }, [dispatch, stepCount, distance]);

  const resetContador = async () => {
    dispatch(setStepCount(0));
    dispatch(setDistance(0));
    try {
      await AsyncStorage.setItem('stepCount', '0');
      await AsyncStorage.setItem('distance', '0');
    } catch (error) {
      console.error('Failed to reset data', error);
    }
  };

  return (
    <S.Container>
      <Animatable.View animation="slideInDown" duration={2500}>
        <Animatable.View animation="fadeIn" duration={5000}>
          <S.Title>Contador de Passos</S.Title>
        </Animatable.View>
      </Animatable.View>
      <S.MidContainer>
        <S.InfoContainer>
          <Animatable.View animation="slideInDown" duration={2500}>
            <Animatable.View animation="fadeIn" duration={5000}>
              <S.LogoPassometro source={require('../../assets/Sprint1.png')} />
            </Animatable.View>
          </Animatable.View>

          <S.TextsTitle>Passos:</S.TextsTitle>
          <S.Texts>{stepCount}</S.Texts>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.TextsTitle>Distância percorrida:</S.TextsTitle>
          <S.Texts>{distance.toFixed(2)} metros</S.Texts>
        </S.InfoContainer>
        <S.ButtonPassometro onPress={resetContador}>
          <S.TextsButton>Reiniciar</S.TextsButton>
        </S.ButtonPassometro>
      </S.MidContainer>
    </S.Container>
  );
};

export default Passometro;
