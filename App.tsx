import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import { SplashScreen } from './screens/Splash';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);
  const [fontsLoaded] = useFonts({
    Unbounded: require('./assets/fonts/Unbounded-Regular.ttf'),
    UnboundedBold: require('./assets/fonts/Unbounded-Bold.ttf'),
    UnboundedLight: require('./assets/fonts/Unbounded-Light.ttf'),
    UnboundedSemiBold: require('./assets/fonts/Unbounded-SemiBold.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
      </SafeAreaView>
    );
  }

  if (isSplashScreenVisible) {
    return <SplashScreen />;
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar style="dark" />
        <Text>Main Page</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
