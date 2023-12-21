import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React from 'react';

import { Typography, Container } from '../styles';

export const SplashScreen = () => {
  return (
    <SafeAreaView style={[Container.screenContainer, styles.container]}>
      <Svg
        width="107"
        height="47"
        viewBox="0 0 107 47"
        fill="none"
        style={{ position: 'absolute', right: 80, top: 40 }}
      >
        <Path
          d="M37.3006 46.6168L106.762 17.3953L0.00037967 0.946332L37.3006 46.6168Z"
          fill="#83512A"
        />
      </Svg>
      <Svg
        width="154"
        height="175"
        viewBox="0 0 154 175"
        fill="none"
        style={{ position: 'absolute', right: 0, top: 20 }}
      >
        <Path
          d="M258.108 -5.94127L-0.000123372 83.2064L157.418 174.315L258.108 -5.94127Z"
          fill="#F4B33D"
        />
      </Svg>
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
      <Svg
        width="109"
        height="84"
        viewBox="0 0 109 84"
        fill="none"
        style={{ position: 'absolute', left: 3, bottom: 60 }}
      >
        <Path
          d="M32.0542 83.3522L108.554 43.0155L0.679426 0.594875L32.0542 83.3522Z"
          fill="#A0BEAB"
        />
      </Svg>
      <Svg
        width="260"
        height="115"
        viewBox="0 0 260 115"
        fill="none"
        style={{ position: 'absolute', left: 0, bottom: 0 }}
      >
        <Path d="M44.9854 216.488L-117.831 120.186L260 0.435903L44.9854 216.488Z" fill="#D95721" />
      </Svg>
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
