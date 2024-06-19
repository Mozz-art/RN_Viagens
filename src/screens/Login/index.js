import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const Login = () => {
  const navigation = useNavigation();

  const [email, setMail] = useState("");
  const [password, setPass] = useState("");

  const clearInput = (inputSetter) => {
    inputSetter("");
  };
  return (
    <S.Container>
      <S.IconAnimation>
        <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
            <S.TitleTrip>RNtrip</S.TitleTrip>
            <FontAwesome5 name="plane-departure" size={120} color="#63E6BE" />
          </Animatable.View>
        </Animatable.View>
      </S.IconAnimation>
      <S.Title>Login</S.Title>
      <S.InputContainer rounded>
        <Icon name="envelope" size={14} color="#888" style={S.IconStyle} />
        <S.Input
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setMail(text)}
        />
        {email ? (
          <Icon name="close" size={20} onPress={() => clearInput(setMail)} />
        ) : null}
      </S.InputContainer>
      <S.InputContainer rounded>
        <Icon name="lock" size={20} color="#888" style={S.IconStyle} />
        <S.Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPass(text)}
        />
        {password ? (
          <Icon name="close" size={20} onPress={() => clearInput(setPass)} />
        ) : null}
      </S.InputContainer>
      <S.Button onPress={() => navigation.navigate("Menu")}>
        <S.TextButton>Entrar</S.TextButton>
      </S.Button>
      <S.ButtonRegister onPress={() => navigation.navigate("Register")}>
        <S.TextRegister>Cadastre-se</S.TextRegister>
      </S.ButtonRegister>
    </S.Container>
  );
};

export default Login;
