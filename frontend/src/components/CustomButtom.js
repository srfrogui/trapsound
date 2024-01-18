import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ type = 'outline', title = 'Button', onPress, theme = 'dark', textColor = 'white' }) => {
    // Define styles based on the theme
    const buttonStyle = theme === 'dark' ? styles.darkButton : styles.lightButton;
    const customTypeBG = type === 'outline' ? styles.customOutlineBG : (type === 'cover' ? styles.customCoverBG : styles.customOutlineBG);

    return (
        <TouchableOpacity
            style={[styles.customBtnBG, buttonStyle, customTypeBG]}
            onPress={onPress}>
            <Text style={{...styles.customBtnText, color: textColor}}>{title}</Text>
        </TouchableOpacity>
    );
};

const colors = {
    lightButtonColor: 'lightblue',
    darkButtonColor: '#9B4AED',
};

const styles = StyleSheet.create({
    customBtnBG: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50,
        height: '100%',
        maxHeight: '55px',
        maxWidth: '200px',
        width: '40%',
    },
    customBtnText: {
        fontFamily: 'monospace',
        fontSize: 25,
        textAlign: 'center',
    },

    //bachground border
    customCoverBG: {
        backgroundColor: colors.darkButtonColor, 
    },
    customOutlineBG: {
        backgroundColor: 'white', 
    },

    //cor do botao
    darkButton: {
        backgroundColor: colors.darkButtonColor,
    },
    lightButton: {
        backgroundColor: colors.lightButtonColor,
    },
});

export default CustomButton;
