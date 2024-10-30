import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false, 
          headerTitle: false, 
        }} 
      />
    </Stack>
  );
};

export default RootLayout;
