import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
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
  | 'ios-time-outline'
  | 'close'
  | 'search1'
  | 'add-task'
  | 'date-range'
  | 'edit'
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
  const AppIcon = {
    settings: <Ionicons name='settings' size={size} {...otherProps} />,
    'settings-outline': (
      <Ionicons name='settings-outline' size={size} {...otherProps} />
    ),
    search1: <AntDesign name='search1' size={size} {...otherProps} />,
    star: <AntDesign name='star' size={size} {...otherProps} />,
    staro: <AntDesign name='staro' size={size} {...otherProps} />,
    'ios-home-outline': (
      <Ionicons name='ios-home-outline' size={size} {...otherProps} />
    ),
    'chevron-back': (
      <Ionicons name='chevron-back' size={size} {...otherProps} />
    ),
    'ios-time-outline': (
      <Ionicons name='ios-time-outline' size={size} {...otherProps} />
    ),
    'history-outline': (
      <FontAwesome name='history' size={size} {...otherProps} />
    ),
    'add-task': <MaterialIcons name='add-task' size={size} {...otherProps} />,
    'date-range': (
      <MaterialIcons name='date-range' size={size} {...otherProps} />
    ),
    history: <FontAwesome5 name='history' size={size} {...otherProps} />,
    edit: <Feather name='edit' size={size} {...otherProps} />,
    close: <Ionicons name='close' size={size} {...otherProps} />,
    home: <Ionicons name='home' size={size} {...otherProps} />,
  };

  const icon = AppIcon[name];

  if (!icon) {
    throw new Error(`Icon wit name ${name} is  not supported`);
  }

  return AppIcon[name];
};

export default Icon;
