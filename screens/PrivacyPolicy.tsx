import { Box, ScrollView, VStack } from 'native-base';
import { Text } from 'react-native';
import React from 'react';
import { theme } from '../styles/theme';
import { Typography } from '../styles';

const terms = [
  {
    title: 'Title one',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Title two',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
      '\n' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Title three',
    text:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
export const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <VStack safeArea px={4} style={{ paddingTop: 20 }} bg={theme.colors.white} flex={1}>
        {terms.map((term, key) => (
          <Box key={key} mb={6}>
            <Text style={[Typography.navigationHeader, { marginBottom: 15 }]}>{term.title}</Text>
            <Text style={{ fontSize: 14, lineHeight: 19.6 }}>{term.text}</Text>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};
