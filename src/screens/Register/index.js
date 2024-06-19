import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from "react-native-animatable";

const Register = () => {
  const navigation = useNavigation();


  const [email, setMail] = useState('');
  const [password, setPass] = useState('');
  const [confirmPass, seConfirmpass] = useState('');

  const clearInput = (inputSetter) => {
    inputSetter('');
  };

  return (
    <S.Container>
      
      <Animatable.View animation="slideInDown" duration={2500}>
          <Animatable.View animation="fadeIn" duration={5000}>
          <S.Title>Cadastre-se</S.Title>
          </Animatable.View>
        </Animatable.View>
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
      <S.InputContainer rounded>
        <Icon name="lock" size={20} color="#888" style={S.IconStyle} />
        <S.Input
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPass}
          onChangeText={(text) => seConfirmpass(text)}
        />
        {password ? (
          <Icon name="close" size={20} onPress={() => clearInput(setPass)} />
        ) : null}
      </S.InputContainer>
      <S.Button onPress={() => navigation.navigate("Menu")}>
        <S.TextButton>Cadastrar</S.TextButton>
      </S.Button>
      <S.ButtonRegister onPress={() => navigation.navigate("Login")}>
        <S.TextRegister>Voltar</S.TextRegister>
      </S.ButtonRegister>
    </S.Container>
  );
};
export default Register;
