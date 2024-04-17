import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '@components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Button from '@components/Button';
import type {ScreenProps} from '../../types/navigation';
import {signup} from '../../services/auth';
import {mScale} from '../../styles/mixins';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

export default function Register({navigation}: ScreenProps) {
  const {styles} = useStyles(stylesheet);
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require('@assets/icons/netflix.png')}
      />
      <Text style={styles.text}>Create New Account</Text>
      <Formik
        enableReinitialize={true}
        validationSchema={SignupSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          try {
            await signup(values.email, values.password);
          } catch (error: any) {
            showMessage({
              message: error.message,
              type: 'danger',
            });
            console.log('🚀 -> file: Register.tsx:74 -> error', error);
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          isSubmitting,
        }) => (
          <View>
            <Input
              handleChange={handleChange('email')}
              value={values.email}
              placeholder="Eamil"
              handleBlur={handleBlur('email')}
              label="Email"
            />
            {errors.email && <Text style={styles.error}> {errors.email}</Text>}
            <Input
              handleChange={handleChange('password')}
              value={values.password}
              placeholder="Password"
              handleBlur={handleBlur('password')}
              label="Password"
            />
            {errors.password && (
              <Text style={styles.error}> {errors.password}</Text>
            )}

            <Button
              text={'Register'}
              width={0}
              onPress={handleSubmit}
              disabled={false}
              loading={isSubmitting}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: mScale(10),
  },
  text: {
    color: theme.colors.title,
    fontSize: theme.font.lg,
  },
  error: {
    color: theme.colors.error,
    marginTop: mScale(5),
  },
  logo: {
    width: mScale(200),
    height: mScale(200),
    marginBottom: mScale(20),
  },
  loginText: {
    color: theme.colors.primary,
    fontSize: theme.font.lg,
    textAlign: 'center',
    marginTop: mScale(10),
  },
}));
