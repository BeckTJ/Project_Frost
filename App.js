import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
}