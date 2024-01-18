import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import CustomButton from '../components/CustomButtom';
import back from '../assets/im_black.png';

const { width, height } = Dimensions.get('window');

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.homeDark}>
      <View style={styles.image}>
        <Image
          style={styles.backgroundImage}
          source={back}
        />
      </View>
      <View style={styles.overlapGroup}>
        <View style={styles.containerText}>
          <Text style={styles.textTop}>Um lugar para procurar colaboradores para suas músicas</Text>
        </View>
        <View style={styles.containerButton} >
          <CustomButton
            theme='dark'
            title='Login'
            type='outline'
            textColor='#9B4AED'
            onPress={() => navigation.navigate('Login')}
          />
         <View style={styles.espacamento}></View>
          <CustomButton
            theme='dark'
            title='Register'
            type='cover'
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeDark: {
    backgroundColor: '#0d0d24',
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
  paddingVertical: width > height ? 40 : 100,
  maxWidth: width > height ? '60%' : '100%',
  paddingHorizontal: 30,
},
  containerText: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
},
  textTop: {
  color: '#ffffff',
  fontSize: 35,
  fontWeight: '700',
  textAlign: 'center',
},
  containerButton: {
  height: '7%',
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight: 40,
},
espacamento: {
  width: '10%',
},
});

export default FirstScreen;
