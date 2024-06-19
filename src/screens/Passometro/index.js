import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import * as S from "./styles";
import * as Animatable from "react-native-animatable";

const Passometro = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [stepCount, setStepCount] = useState(0);
  const [distance, setDistance] = useState(0);
  const stepLength = 0.7;

  Accelerometer.setUpdateInterval(100);

  useEffect(() => {
    let isMounted = true;
    let lastStepTimestamp = Date.now();

    const calcularDistancia = (steps) => {
      return steps * stepLength;
    };

    Accelerometer.addListener((accelerometerData) => {
      if (isMounted) {
        setAcceleration(accelerometerData);

        const { x, y, z } = accelerometerData;
        const accelerationMagnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

        const threshold = 2;

        if (accelerationMagnitude > threshold) {
          const now = Date.now();
          const timeDiff = now - lastStepTimestamp;

          if (timeDiff > 300) {
            setStepCount((prevStepCount) => prevStepCount + 1);
            setDistance((prevDistance) => prevDistance + stepLength);

            lastStepTimestamp = now;
          }
        }
      }
    });

    return () => {
      isMounted = false;
      Accelerometer.removeAllListeners();
    };
  }, []);

  const resetContador = () => {
    setStepCount(0);
    setDistance(0);
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
              <S.LogoPassometro source={require("../../assets/Sprint.png")} />
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
