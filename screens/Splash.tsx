import { Text } from 'react-native';
import React from 'react';

import { Typography } from '../styles';
import { TriangleBrown } from '../assets/svg/SplashTriangles';
import { TriangleYellow } from '../assets/svg/SplashTriangles';
import { TriangleGreen } from '../assets/svg/SplashTriangles';
import { TriangleOrange } from '../assets/svg/SplashTriangles';
import { Box, VStack, Image } from 'native-base';

export const SplashScreen = () => {
  return (
    <Box flex={1} px={3} bg="white" alignItems="center" justifyContent="center" safeArea>
      <TriangleBrown />
      <TriangleYellow />
      <VStack space={2} alignItems="center">
        <Image
          source={require('../assets/logo.png')}
          style={{ marginBottom: 40 }}
          alt="Logo Belayers"
        />
        <Text
          style={{
            ...Typography.capsLock,
            marginBottom: 5,
          }}
        >
          Climbing it’s not only a sport or a passion
        </Text>
        <Text style={[Typography.header, { textAlign: 'center' }]}>Climbing is a lifestyle</Text>
      </VStack>
      <TriangleGreen />
      <TriangleOrange />
    </Box>
  );
};
