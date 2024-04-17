import auth from '@react-native-firebase/auth';

export const signup = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error: any) {
    console.log('🚀 -> file: auth.ts:7 -> signup -> error:', error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    } else {
      throw new Error('Something goes wrong, please check your credentials!');
    }
  }
};

export const signin = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error: any) {
    if (error.code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    } else {
      throw new Error('Something goes wrong, please check your credentials!');
    }
  }
};
