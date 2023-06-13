import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg';

export type IconName =
  | 'ios-home-outline'
  | 'home'
  | 'star'
  | 'staro'
  | 'chevron-back'
  | 'settings'
  | 'settings-outline'
  | 'close'
  | 'history-outline'
  | 'close'
  | 'history';

type IconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  switch (name) {
    case 'settings':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'settings-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'star':
      return <AntDesign name={name} size={size} {...otherProps} />;
    case 'star':
      return <AntDesign name={name} size={size} {...otherProps} />;
    case 'staro':
      return <AntDesign name={name} size={size} {...otherProps} />;
    case 'ios-home-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'chevron-back':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'history-outline':
      return <FontAwesome name={'history'} size={size} {...otherProps} />;
    case 'history':
      return <FontAwesome5 name={'history'} size={size} {...otherProps} />;
    case 'close':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'home':
      return <Ionicons name={name} size={size} {...otherProps} />;
    default:
      throw new Error(`Icon wit name ${name} is  not supported`);
  }
};

export default Icon;
