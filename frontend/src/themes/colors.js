import { useColorScheme } from 'react-native';
import backDark from '../assets/im_black.png';
import backLight from '../assets/im_light.png';

export const useThemedStyles = () => {
  const colorScheme = useColorScheme();

  const getBackgroundColor = () => {
    return colorScheme === 'dark' ? '#0E0D24' : '#fff';
  };

  const getTextColor = () => {
    return colorScheme === 'dark' ? '#fff' : '#000';
  };

  const getButtonBackgroundColor = () => {
    return colorScheme === 'dark' ? '#9B4AED' : '#21CE3D';
  };

  const getBackgroundImage = () => {
    return colorScheme === 'dark' ? backDark : backLight;
  };

  return {
    getBackgroundColor,
    getTextColor,
    getButtonBackgroundColor,
    getBackgroundImage,
    colorScheme,
  };
};
