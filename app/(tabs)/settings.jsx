import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Settings = () => {
  return (
    <View className="flex-1 bg-white px-4 pt-6 mt-10">
       <View className="bg-blue-500 rounded-lg p-2 shadow-lg">
       <Text className="text-lg font-bold text-white text-center">Settings</Text>
        
      </View>
     <Text className="text-base font-semibold mb-4 mt-3">User Settings</Text>
      {/* User Settings Card */}
      <View className="bg-gray-100 rounded-lg p-4 mb-4 shadow-sm">
        
        
        {/* Subscriptions */}
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Image source={require('../../assets/db.png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm">Subscriptions</Text>
        </TouchableOpacity>
        
        {/* Xidhmooyin */}
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Image source={require('../../assets/coi .png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm">Xidhmooyin</Text>
        </TouchableOpacity>

        {/* My Answers */}
        <TouchableOpacity className="flex-row items-center py-3">
          <Image source={require('../../assets/chat.png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm">My Answers</Text>
        </TouchableOpacity>
      </View>
       <Text className="text-base font-semibold mb-4">About</Text>
      {/* About Card */}
      <View className="bg-gray-100 rounded-lg p-4 shadow-sm">
       
        
        {/* Support */}
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Image source={require('../../assets/whatsapp.png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm">Support</Text>
        </TouchableOpacity>

        {/* About Us */}
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Image source={require('../../assets/about.png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm">About Us</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity className="flex-row items-center py-3">
          <Image source={require('../../assets/logout.png')} className="w-6 h-6 mr-4" />
          <Text className="text-sm text-red-500">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
