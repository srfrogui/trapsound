import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet, Keyboard } from 'react-native';
import { TextInput, IconButton } from "react-native-paper";
import * as Animatable from 'react-native-animatable';

import { useThemedStyles } from '../../themes/Colors';
import CustomButton from '../../components/CustomButton';

const LoginForm = ({ navigation }) => {
  const { getBackgroundColor, getTextColor, getTextColorSQN,getButtonBackgroundColor, getBackgroundImage } = useThemedStyles();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={[styles.home, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.image}>
        <Image style={styles.backgroundImage} source={getBackgroundImage()} />
      </View>
      <View style={styles.como}>
        <Animatable.Text delay={10} animation="fadeInUp" style={[styles.textTop, { color: getTextColor() }]}>Login</Animatable.Text>
        <View style={[styles.containerInput, { backgroundColor: getTextColorSQN(0.6), borderColor: getTextColor() }]}>
          <View>
            <IconButton
              icon="arrow-left"
              size={30}
              onPress={() => navigation.goBack()}
              iconColor={getTextColor()}
            />
          </View>
          <TextInput style={styles.input} label="Username" />
          <TextInput
            style={styles.input}
            label="Password"
            secureTextEntry
          />
          <View style={styles.containerButton}>
            <CustomButton
              width='100%'
              style={styles.button}
              title='Entrar'
              type='cover'
              textColor='white'
            />
          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
    transform: [{ translateX: -110 }, { translateY: 150 }]
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'contain',
  },
  como: {
    alignItems: 'center',
    width: '100%'
  },
  textTop: {
    marginTop: '20%',
    marginBottom: '5%',
    fontSize: 80,
  },
  containerInput: {
    height: '100%',
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 50,
    height: '1%',
    paddingHorizontal: '20%'
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default LoginForm;
