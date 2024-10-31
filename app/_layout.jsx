import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      {/* Main tabs layout */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false, 
        }} 
      />

      
      <Stack.Screen 
        name="ask-question" 
        options={{ 
          headerShown: false, 
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
