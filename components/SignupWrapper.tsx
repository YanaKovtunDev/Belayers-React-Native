import { Image, Text } from 'react-native';
import React, { FC } from 'react';
import { Typography } from '../styles';
import { HStack, VStack } from 'native-base';
import { theme } from '../styles/theme';
import { TriangleGreen } from '../assets/svg/SignupTriangles';

interface SignupWrapper {
  children: React.ReactNode;
}

export const SignupWrapper: FC<SignupWrapper> = ({ children }) => (
  <VStack safeArea px={4} bg={theme.colors.white} flex={1}>
    <HStack space={2} alignItems="center" mt={3} mb={10}>
      <Image
        source={require('../assets/logoIcon.png')}
        style={{ marginRight: 23 }}
        alt="Logo Belayers"
      />
      <Text style={[Typography.logo]}>Belayers</Text>
    </HStack>
    <TriangleGreen />
    {children}
  </VStack>
);
