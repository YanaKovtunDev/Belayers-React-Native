import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  SignUp: undefined;
  InsideProfile: undefined;
  TermsAndCondition: undefined;
  PrivacyPolicy: undefined;
  Main: undefined;
  Onboarding: undefined;
  PhoneNumber: undefined;
  OtpVerify: { phoneNumber: string };
  Email: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
