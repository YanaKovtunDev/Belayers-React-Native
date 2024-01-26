import { Box, ScrollView, VStack } from 'native-base';
import { Text } from 'react-native';
import React from 'react';
import { theme } from '../styles/theme';
import { Typography } from '../styles';
import { termsAndCondition } from '../data/userTerms';

export const TermsAndConditions = () => {
  return (
    <ScrollView>
      <VStack safeArea px={4} style={{ paddingTop: 20 }} bg={theme.colors.white} flex={1}>
        {termsAndCondition.map((term, key) => (
          <Box key={key} mb={6}>
            <Text style={[Typography.navigationHeader, { marginBottom: 15 }]}>
              {key + 1 + '. ' + term.title}
            </Text>
            <Text style={{ fontSize: 14, lineHeight: 19.6 }}>{term.text}</Text>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};
