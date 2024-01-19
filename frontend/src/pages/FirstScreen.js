import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, useColorScheme } from 'react-native';

import { colors } from '../themes/colors';
import CustomButton from '../components/CustomButtom';
import backDark from '../assets/im_black.png';
import backLight from '../assets/im_light.png';


const { width, height } = Dimensions.get('window');

const FirstScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  const themeColors = colors[theme];
  const backgroundImage = theme === 'dark' ? backDark : backLight;

  return (
    <View style={[styles.home, { backgroundColor: themeColors.background }]}>
      <View style={styles.image}>
        <Image style={styles.backgroundImage} source={backgroundImage} />
      </View>
      <View style={styles.overlapGroup}>
        <View style={styles.containerText}>
          <Text style={[styles.textTop, { color: themeColors.topTextColor }]}>
            Um lugar para procurar colaboradores para suas músicas
          </Text>
        </View>
        <View style={styles.containerButton}>
        <CustomButton
            title='Login'
            buttonColor='white'
            type={`outline 1 ${themeColors.buttonBackground}`}
            textColor={themeColors.buttonBackground}
            onPress={() => navigation.navigate('Login')}
          />
          <View style={styles.espacamento}></View>
          <CustomButton
            title='Register'
            buttonColor={themeColors.buttonBackground}
            type='cover'
            textColor='white'
            onPress={() => navigation.navigate('Register')}
          />
        </View>
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
  overlapGroup: {
    flex: 1,
    justifyContent: 'space-between',
    maxWidth: width > height ? '60%' : '100%',
    paddingVertical: width > height ? 40 : 70,
    paddingHorizontal: 0,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textTop: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  containerButton: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 50,
  },
  espacamento: {
    width: '10%',
  },
});

export default FirstScreen;
