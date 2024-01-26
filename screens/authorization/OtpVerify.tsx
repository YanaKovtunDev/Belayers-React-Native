import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, Platform, ActivityIndicator } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { RootStackScreenProps } from '../../types/navigation';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithCredential } from 'firebase/auth';
import { getUserDataFromDB } from '../../utils/firebase';
import { SignupWrapper } from '../../components/SignupWrapper';
import { Buttons, Typography } from '../../styles';
import { theme } from '../../styles/theme';
import { Button } from 'native-base';
import { OTPMountain } from '../../assets/svg/SignupMountains';
import {
  useSendSmsVerifyMutation,
  useCheckVerificationMutation,
} from '../../features/auth/verifyApi';
import { handleApiErrors } from '../../utils/errors';

export const OtpVerify = ({ route, navigation }: RootStackScreenProps<'OtpVerify'>) => {
  const { phoneNumber } = route.params;
  const [code, setCode] = useState('');

  const [sendSmsVerify, response] = useSendSmsVerifyMutation();
  const [checkVerification, { isSuccess, error, isLoading }] = useCheckVerificationMutation();

  const handleVerification = async () => {
    try {
      const user = await getUserDataFromDB(phoneNumber, 'phoneNumber');
      if (user) {
        await signInWithCredential(FIREBASE_AUTH, user.credential);
        Alert.alert('Authorization successful');
      } else {
        navigation.replace('Email');
      }
    } catch (e) {
      const message = (error as Error).message;
      Alert.alert(`${'Error with verification: ' + message || 'Error with verification'}`);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleVerification();
    }
  }, [isSuccess]);

  return (
    <SignupWrapper>
      <Text style={[Typography.header, { marginBottom: 20 }]}>Verify your number</Text>
      <Text style={[Typography.small, { marginBottom: 30 }]}>
        Enter the code we’ve sent to{' '}
        <Text style={{ fontFamily: 'UnboundedBold' }}>{phoneNumber}</Text>
      </Text>
      <Text
        onPress={() => navigation.navigate('PhoneNumber')}
        style={[Typography.secondaryLink, { marginBottom: 25 }]}
      >
        Change phone number
      </Text>
      <OTPInputView
        style={{ width: '100%', height: 70 }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.codeStyle}
        codeInputHighlightStyle={styles.codeStyleHighLighted}
        onCodeFilled={(code) => setCode(code)}
      />
      {error && <Text style={[Typography.error, { marginTop: 10 }]}>{handleApiErrors(error)}</Text>}
      {response.isLoading ? (
        <ActivityIndicator
          size="large"
          color="#A0BEAB"
          style={{ marginBottom: 35, marginTop: 25 }}
        />
      ) : (
        <Text
          onPress={() => sendSmsVerify(phoneNumber)}
          style={[Typography.secondaryLink, { marginBottom: 35, marginTop: 25 }]}
        >
          Send me a new code
        </Text>
      )}

      {isLoading ? (
        <ActivityIndicator size="large" color="#D95721" />
      ) : (
        <Button
          colorScheme="primary"
          style={[code ? styles.buttonPrimary : Buttons.disabled]}
          onPress={() => checkVerification({ phoneNumber, code })}
        >
          <Text style={Typography.buttonText}>next</Text>
        </Button>
      )}
      <OTPMountain />
    </SignupWrapper>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    ...Buttons.buttonDefault,
    ...Buttons.shadow,
    shadowColor: Platform.OS === 'android' ? 'red' : theme.colors.primary[600],
  },
  codeStyle: {
    color: theme.colors.text,
    height: 70,
    fontSize: 24,
    borderRadius: 15,
    fontFamily: 'UnboundedLight',
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.white,
  },
  codeStyleHighLighted: {
    borderColor: theme.colors.darkGrey,
  },
});
