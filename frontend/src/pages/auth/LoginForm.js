import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { useThemedStyles } from '../../themes/Colors';

const LoginForm = ({ navigation }) => {
  const { getBackgroundColor, getTextColor, getButtonBackgroundColor, getBackgroundImage } = useThemedStyles();
  
  return (
    <View style={[styles.home, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.image}>
        <Image style={styles.backgroundImage} source={getBackgroundImage()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '80%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'contain',
  },
});

export default LoginForm;
