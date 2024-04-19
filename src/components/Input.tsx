import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale} from '../styles/mixins';

type Props = {
  handleChange: (text: string) => void;
  handleBlur: (e: any) => void;
  value: string;
  placeholder: string;
  editable?: boolean;
  keyboardType?: string;
  placeholderTextColor?: string;
  label: string;
  isSecure?: boolean;
};

const Input = ({
  handleBlur,
  handleChange,
  value,
  placeholder,
  editable,
  keyboardType,
  label,
  isSecure = false,
}: Props) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.container}
        placeholder={placeholder}
        onChangeText={handleChange}
        placeholderTextColor={'gray'}
        onBlur={handleBlur}
        value={value}
        editable={editable}
        keyboardType={keyboardType ? 'number-pad' : 'default'}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: mScale(350),
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: mScale(10),
    paddingVertical: mScale(13),
    borderRadius: mScale(5),
    color: theme.colors.text,
  },
  label: {
    color: theme.colors.text,

    marginVertical: mScale(5),
  },
}));
