import { Button, SafeAreaView, Text } from 'react-native';
import React from 'react';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <Text>Main Screen</Text>
      <Button title="OnPress" onPress={() => console.log('Press button')} />
    </SafeAreaView>
  );
};
