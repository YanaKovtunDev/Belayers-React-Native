import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/Main';
import React from 'react';
import { TermsAndConditions } from '../screens/TermsAndConditions';
import { PrivacyPolicy } from '../screens/PrivacyPolicy';

const InsideStack = createNativeStackNavigator();

export default function ProfileLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Main" component={MainScreen} />
      <InsideStack.Screen
        name="TermsAndCondition"
        component={TermsAndConditions}
        options={{
          title: 'Terms & Conditions',
        }}
      />
      <InsideStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy Policy',
        }}
      />
    </InsideStack.Navigator>
  );
}
