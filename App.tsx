import 'expo-dev-client';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SplashScreen } from './screens/Splash';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Onboarding } from './screens/authorization/Onboarding';
import { onAuthStateChanged } from 'firebase/auth';
import { Box, NativeBaseProvider } from 'native-base';
import { theme } from './styles/theme';
import { TermsAndConditions } from './screens/TermsAndConditions';
import { Typography } from './styles';
import { PrivacyPolicy } from './screens/PrivacyPolicy';
import { RootStackParamList } from './types/navigation';
import { FIREBASE_AUTH } from './FirebaseConfig';
import ProfileLayout from './components/ProfileLayout';
import { PhoneNumber } from './screens/authorization/PhoneNumber';
import { OtpVerify } from './screens/authorization/OtpVerify';
import { Email } from './screens/authorization/Email';
import { UserProvider } from './context/UserAuthContext';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  const [user, setUser] = useState(null);
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);
  const [fontsLoaded] = useFonts({
    Unbounded: require('./assets/fonts/Unbounded-Regular.ttf'),
    UnboundedBold: require('./assets/fonts/Unbounded-Bold.ttf'),
    UnboundedLight: require('./assets/fonts/Unbounded-Light.ttf'),
    UnboundedSemiBold: require('./assets/fonts/Unbounded-SemiBold.ttf'),
  });

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user: any) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000);
  }, []);

  return (
    <UserProvider>
      <NativeBaseProvider theme={theme}>
        {!fontsLoaded ? (
          <Box>
            <ActivityIndicator size="large" color="black" />
          </Box>
        ) : isSplashScreenVisible ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
              <Stack.Group
                screenOptions={{
                  headerTitleStyle: Typography.navigationHeader,
                  headerTitleAlign: 'center',
                  headerTintColor: theme.colors.grayText,
                  headerShadowVisible: false,
                  headerShown: false,
                }}
              >
                {user ? (
                  <Stack.Screen name="InsideProfile" component={ProfileLayout} />
                ) : (
                  <>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                    <Stack.Screen name="OtpVerify" component={OtpVerify} />
                    <Stack.Screen name="Email" component={Email} />
                    <Stack.Screen
                      name="TermsAndCondition"
                      component={TermsAndConditions}
                      options={{
                        title: 'Terms & Conditions',
                      }}
                    />
                    <Stack.Screen
                      name="PrivacyPolicy"
                      component={PrivacyPolicy}
                      options={{
                        title: 'Privacy Policy',
                      }}
                    />
                  </>
                )}
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </NativeBaseProvider>
    </UserProvider>
  );
}
