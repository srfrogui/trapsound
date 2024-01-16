import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Stack } from '@mui/material';
import back from './assets/im_black.png';

const FirstPage = () => {
  return (
    <View style={styles.homeDark}>
      <Image
        style={styles.imageRemovebg}
        source={back}
      />
      <View style={styles.overlapGroup}>
        <Text style={styles.textTop}>Um lugar para procurar colaboradores para suas músicas</Text>
        <Stack style={styles.containerButton} spacing={10} direction={'row'} alignItems={'center'} justifyContent={'center'}>
          <Button variant="contained" style={styles.button1} >Entrar</Button>
          <Button variant="contained" style={styles.button2} >Criar Conta</Button>
        </Stack>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeDark: {
    backgroundColor: '#0d0d24',
    height: '100vh',
    width: '100%',
  },
  imageRemovebg: {
    height: '80%',
    top: '10%',
    width: '100%',
    position: 'absolute',
    display:'flex',
    justifyContent: 'center',
  },
  overlapGroup: {
    height: '100vh',
    position: 'relative',
    display:'flex',
    justifyContent: 'space-between',
    paddingVertical: 100,
  },
  textTop: {
    paddingHorizontal: 30,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
  },
  containerButton: {
    height: '7%',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
  },
  button1: {
    height: '100%',
    width:'40%',
    fontSize: '1.4rem',
    borderRadius: '50px',
    backgroundColor: 'white',
    color:'#9B4AED',
    marginRight: '3%',
  },
  button2:{
    height: '100%',
    width:'40%',
    fontSize: '1.4rem',
    borderRadius: '50px',
    backgroundColor: '#9B4AED',
    marginLeft: '3%',
  },

});

export default FirstPage;
