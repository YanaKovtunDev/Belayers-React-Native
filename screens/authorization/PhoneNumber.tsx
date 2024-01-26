import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, Platform, ActivityIndicator } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { RootStackScreenProps } from '../../types/navigation';
import { SignupWrapper } from '../../components/SignupWrapper';
import { Buttons, Input, Typography } from '../../styles';
import { PhoneMountain } from '../../assets/svg/SignupMountains';
import { Button } from 'native-base';
import { theme } from '../../styles/theme';
import { useSendSmsVerifyMutation } from '../../features/auth/verifyApi';
import { handleApiErrors } from '../../utils/errors';

export const PhoneNumber = ({ navigation }: RootStackScreenProps<'PhoneNumber'>) => {
  const [phone, setPhone] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const [sendSmsVerify, { isSuccess, error, isLoading }] = useSendSmsVerifyMutation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('OtpVerify', { phoneNumber: formattedValue });
    }
  }, [isSuccess]);

  return (
    <SignupWrapper>
      <Text style={[Typography.header, { marginBottom: 20 }]}>What’s your number?</Text>
      <Text style={[Typography.small, { marginBottom: 30 }]}>
        We make sure that all of our members are real people
      </Text>
      <PhoneInput
        containerStyle={styles.inputContainer}
        countryPickerButtonStyle={styles.countryPicker}
        textInputStyle={[Input.textInput]}
        textContainerStyle={[styles.phoneInput]}
        codeTextStyle={Input.textInput}
        placeholder="325345346"
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="UA"
        layout="first"
        onChangeText={(text) => {
          setPhone(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        countryPickerProps={{ withAlphaFilter: true }}
        withShadow
        autoFocus
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#D95721" />
      ) : (
        <Button
          colorScheme="primary"
          disabled={!phone}
          style={[phone ? styles.buttonPrimary : Buttons.disabled]}
          onPress={() => sendSmsVerify(formattedValue)}
        >
          <Text style={Typography.buttonText}>next</Text>
        </Button>
      )}
      {error && <Text style={[Typography.error, { marginTop: 10 }]}>{handleApiErrors(error)}</Text>}
      <PhoneMountain />
    </SignupWrapper>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    ...Buttons.buttonDefault,
    ...Buttons.shadow,
    shadowColor: Platform.OS === 'android' ? 'red' : theme.colors.primary[600],
  },
  countryPicker: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderRightWidth: 0,
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderLeftWidth: 0,
    backgroundColor: theme.colors.white,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: theme.colors.white,
    marginBottom: 30,
  },
});
