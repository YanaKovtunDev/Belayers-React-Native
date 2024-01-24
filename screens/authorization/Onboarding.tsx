import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, Text } from 'react-native';
import { SignupWrapper } from '../../components/SignupWrapper';
import { Buttons, Typography } from '../../styles';
import { VStack, Button } from 'native-base';
import { theme } from '../../styles/theme';
import { RootStackScreenProps } from '../../types/navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { FirstMountain } from '../../assets/svg/SignupMountains';
import { SignupBackground } from '../../assets/svg/SignupTriangles';
import { signInWithCredential, FacebookAuthProvider } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { saveUserDataToFirestore } from '../../utils/firebase';

export const Onboarding = ({ navigation }: RootStackScreenProps<'Onboarding'>) => {
  const [onPressedFacebook, toggleOnPressedFacebook] = useState(false);

  const signInWithFB = async () => {
    try {
      await LoginManager.logInWithPermissions(['public_profile', 'email']);
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        return;
      }
      const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
      const response = await signInWithCredential(FIREBASE_AUTH, facebookCredential);

      const userData = {
        name: response.user.displayName || '',
        email: response.user.email || '',
        profilePicture: response.user.photoURL || '',
      };

      await saveUserDataToFirestore(userData);
      Alert.alert('Authorization successful');
    } catch (e) {
      const message = (e as Error).message;
      Alert.alert(message || 'Error with authorization');
    }
  };

  return (
    <SignupWrapper>
      <Text style={[Typography.header, { marginBottom: 45 }]}>Join us</Text>
      <VStack>
        <Button colorScheme="primary" style={[styles.buttonPrimary]}>
          <Text style={Typography.buttonText}>use mobile phone</Text>
        </Button>
        <Text style={[Typography.small, { marginVertical: 20, textAlign: 'center' }]}>
          or continue with
        </Text>
        <Button
          style={[
            styles.buttonFacebook,
            {
              backgroundColor: onPressedFacebook
                ? theme.colors.facebook.hover
                : theme.colors.facebook.main,
            },
          ]}
          onPressIn={() => toggleOnPressedFacebook(true)}
          onPressOut={() => toggleOnPressedFacebook(false)}
          leftIcon={<FontAwesome5 marginRight={15} name="facebook" size={24} color="white" />}
          onPress={signInWithFB}
        >
          <Text style={Typography.buttonText}>use facebook</Text>
        </Button>
        <Text style={[Typography.small, { marginTop: 50, textAlign: 'center' }]}>
          By continuing, you confirm that you accept our{' '}
          <Text onPress={() => navigation.navigate('TermsAndCondition')} style={Typography.link}>
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text onPress={() => navigation.navigate('PrivacyPolicy')} style={Typography.link}>
            Privacy Policy
          </Text>
        </Text>
      </VStack>
      <FirstMountain />
      <SignupBackground />
    </SignupWrapper>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    ...Buttons.buttonDefault,
    ...Buttons.shadow,
    shadowColor: Platform.OS === 'android' ? 'red' : theme.colors.primary[600],
  },
  buttonFacebook: {
    ...Buttons.buttonDefault,
    ...Buttons.shadow,
    shadowColor: Platform.OS === 'android' ? 'blue' : theme.colors.facebook.main,
  },
});
