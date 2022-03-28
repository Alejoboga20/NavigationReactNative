import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const TouchableIcon = ({ iconName }: TouchableIconProps) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};

interface TouchableIconProps {
  iconName: string;
}
