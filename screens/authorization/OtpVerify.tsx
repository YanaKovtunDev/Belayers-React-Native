import React, { useState } from 'react';
import { StyleSheet, Text, Alert, Platform } from 'react-native';
import { checkVerification, sendSmsVerification } from '../../api/verify';
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

export const OtpVerify = ({ route, navigation }: RootStackScreenProps<'OtpVerify'>) => {
  const { phoneNumber } = route.params;
  const [invalidCode, setInvalidCode] = useState(false);
  const [code, setCode] = useState('');
  const handleVerification = async (code: string) => {
    try {
      const isVerified = await checkVerification(phoneNumber, code);

      if (isVerified) {
        const user = await getUserDataFromDB(phoneNumber, 'phoneNumber');
        if (user) {
          await signInWithCredential(FIREBASE_AUTH, user.credential);
          Alert.alert('Authorization successful');
        } else {
          navigation.replace('Email');
        }
      } else {
        setInvalidCode(true);
      }
    } catch (error) {
      const message = (error as Error).message;
      Alert.alert(`${'Error with verification: ' + message} || "Error with verification" `);
    }
  };

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
      {invalidCode && <Text style={styles.error}>Incorrect code</Text>}
      <Text
        onPress={() => sendSmsVerification(phoneNumber)}
        style={[Typography.secondaryLink, { marginBottom: 35, marginTop: 25 }]}
      >
        Send me a new code
      </Text>
      <Button
        colorScheme="primary"
        style={[code ? styles.buttonPrimary : Buttons.disabled]}
        onPress={() => handleVerification(code)}
      >
        <Text style={Typography.buttonText}>next</Text>
      </Button>
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
  error: {
    color: 'red',
  },
});
