import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '@components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {mScale} from '../../styles/mixins';
import Button from '@components/Button';
import type {ScreenProps} from '../../types/navigation';
import {showMessage} from 'react-native-flash-message';
import {signin} from '../../services/auth';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

export default function Login({navigation}: ScreenProps) {
  const {styles} = useStyles(stylesheet);
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require('@assets/icons/netflix.png')}
      />
      <Text style={styles.text}>Login</Text>
      <Formik
        enableReinitialize={true}
        validationSchema={SignupSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          try {
            await signin(values.email, values.password);
          } catch (error: any) {
            showMessage({
              message: error.message,
              type: 'danger',
            });
          
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
              placeholder="Email"
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
              isSecure={true}
            />
            {errors.password && (
              <Text style={styles.error}> {errors.password}</Text>
            )}

            <Button
              text={'Login'}
              width={0}
              onPress={handleSubmit}
              disabled={isSubmitting}
              loading={isSubmitting}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.loginText}>Signup</Text>
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
