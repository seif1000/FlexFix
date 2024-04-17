import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import Ripple from 'react-native-material-ripple';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale} from '../styles/index';

type Props = {
  text: string;
  width: number;
  onPress: () => void;

  disabled: boolean;
  loading: boolean;
  textColor?: string;
  fontSize?: number;
};
const Button: FC<Props> = ({
  text,
  onPress,
  width,

  disabled,
  loading,
  textColor,
  fontSize,
}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <Ripple
      rippleContainerBorderRadius={mScale(5)}
      style={styles.container}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Ripple>
  );
};
export default Button;
const stylesheet = createStyleSheet(theme => ({
  container: {
    width: mScale(350),
    backgroundColor: theme.colors.netflixRed,
    borderWidth: 1,
    borderColor: theme.colors.netflixRed,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: mScale(5),
    color: theme.colors.text,
    marginTop: mScale(15),
    paddingVertical: mScale(13),
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.font.lg,
  },
}));
