import React, { useState } from "react";
import * as S from "./styles";
import * as Animatable from "react-native-animatable";

const Graficos = () => {
  return (
    <S.Container>
      <Animatable.View animation="slideInDown" duration={2500}>
        <Animatable.View animation="fadeIn" duration={5000}>
          <S.LogoGraficos source={require("../../assets/trabalhar.png")} />
          <S.TitleGraficos>Em contrução</S.TitleGraficos>
        </Animatable.View>
      </Animatable.View>
    </S.Container>
  );
};

export default Graficos;
