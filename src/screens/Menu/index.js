import React from "react";
import * as S from "./styles";
import {
  MaterialIcons,
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.IconAnimation>
        <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <S.LogoMenu source={require("../../assets/menu.png")} />
            <S.TitleTrip>Menu</S.TitleTrip>
          </Animatable.View>
        </Animatable.View>
      </S.IconAnimation>
      <S.MidContainer>
        <S.ActionButton onPress={() => navigation.navigate("Dashboard")}>
          <Feather name="book" size={50} color="#fff" />
          <S.TextMenu>Destino</S.TextMenu>
        </S.ActionButton>
        <S.ActionButton onPress={() => navigation.navigate("TakePhoto")}>
          <Feather name="camera" size={50} color="#fff" />
          <S.TextMenu>Câmera</S.TextMenu>
        </S.ActionButton>
        <S.ActionButton onPress={() => navigation.navigate("Galeria")}>
          <FontAwesome name="image" size={50} color="#fff" />
          <S.TextMenu>Galeria</S.TextMenu>
        </S.ActionButton>
        <S.ActionButton onPress={() => navigation.navigate("Passometro")}>
          <Feather name="fast-forward" size={50} color="#fff" />
          <S.TextMenu>Passos</S.TextMenu>
        </S.ActionButton>
        <S.ActionButton onPress={() => navigation.navigate("Traking")}>
          <Feather name="map" size={50} color="#fff" />
          <S.TextMenu>Mapa</S.TextMenu>
        </S.ActionButton>
        <S.ActionButton onPress={() => navigation.navigate("Graficos")}>
          <Feather name="trending-up" size={50} color="#fff" />
          <S.TextMenu>Gráfico</S.TextMenu>
        </S.ActionButton>
      </S.MidContainer>
    </S.Container>
  );
};

export default Menu;
