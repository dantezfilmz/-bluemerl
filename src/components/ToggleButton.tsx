// ToggleButton.tsx
import React from 'react';
import { Block, Button, Image, Text } from '../components/';
import { ImageSourcePropType } from 'react-native';
import { ThemeColors, ThemeFonts, ThemeSizes, ThemeSpacing } from '../constants/types';

interface ToggleButtonProps {
  index: number;
  tab: number;
  handleProducts: (index: number) => void;
  assets: ImageSourcePropType;
  colors: any; 
  fonts: ThemeFonts;
  sizes: ThemeSizes & ThemeSpacing & {
    width: number;
    height: number;
}
  t: (key: string) => string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ index, tab, handleProducts, assets, colors, fonts, sizes, t }) => (
  <Button onPress={() => handleProducts(index)}>
    <Block row align="center">
      <Block
        flex={0}
        radius={6}
        align="center"
        justify="center"
        marginRight={sizes.s}
        width={sizes.socialIconSize}
        height={sizes.socialIconSize}
        gradient={colors.card}>
        <Image source={assets} color={colors.white} radius={0} />
      </Block>
      <Text p font={fonts?.[tab === index ? 'medium' : 'normal']}>
        {t(`home.${index === 0 ? 'check in' : 'activity'}`)}
      </Text>
    </Block>
  </Button>
);

export default ToggleButton;
