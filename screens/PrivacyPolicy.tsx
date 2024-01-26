import { Box, ScrollView, VStack } from 'native-base';
import { Text } from 'react-native';
import React from 'react';
import { theme } from '../styles/theme';
import { Typography } from '../styles';
import { privacyTerms } from '../data/userTerms';

export const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <VStack safeArea px={4} style={{ paddingTop: 20 }} bg={theme.colors.white} flex={1}>
        {privacyTerms.map((term, key) => (
          <Box key={key} mb={6}>
            <Text style={[Typography.navigationHeader, { marginBottom: 15 }]}>{term.title}</Text>
            <Text style={{ fontSize: 14, lineHeight: 19.6 }}>{term.text}</Text>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};
