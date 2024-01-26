import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ width = '100%', type = 'outline', title = 'Button', onPress, buttonColor = '#9B4AED', textColor = 'white', textStyle }) => {
    const [outlineWidth, outlineColor] = type.split(' ').slice(1);
    const borderWidth = parseInt(outlineWidth) || 1;
    const borderColor = outlineColor || '#9B4AED'; // Cor padrão para o tema escuro

    // Define styles based on the theme
    const customTypeBG = type.startsWith('outline') ? { ...styles.customOutlineBG, borderWidth, borderColor } : (type === 'cover' ? styles.customCoverBG : styles.customOutlineBG);

    return (
        <TouchableOpacity
            style={[styles.customBtnBG, { backgroundColor: buttonColor, width }, customTypeBG]}
            onPress={onPress}>
            <Text style={{ ...styles.customBtnText, color: textColor, ...textStyle }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    customBtnBG: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50,
        maxHeight: '55px',
        maxWidth: '200px',
    },
    customBtnText: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default CustomButton;
