import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Typography, Container } from '../styles';
import { TriangleBrown } from '../assets/icons/TriangleBrown';
import { TriangleYellow } from '../assets/icons/TriangleYellow';
import { TriangleGreen } from '../assets/icons/TriangleGreen';
import { TriangleOrange } from '../assets/icons/TriangleOrange';

export const SplashScreen = () => {
  return (
    <SafeAreaView style={[Container.screenContainer, styles.container]}>
      <TriangleBrown />
      <TriangleYellow />
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={{ marginBottom: 50 }} />
        <Text
          style={{
            ...Typography.small,
            marginBottom: 5,
          }}
        >
          Climbing it’s not only a sport or a passion
        </Text>
        <Text style={[Typography.header, { textAlign: 'center' }]}>Climbing is a lifestyle</Text>
      </View>
      <TriangleGreen />
      <TriangleOrange />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
