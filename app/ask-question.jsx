import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';

export default function AskQuestionScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-blue-500 rounded-lg p-3">
        <TouchableOpacity>
        <Image source={require("../assets/back.png")} className="w-5 h-5 mr-1" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-white">AI Helper</Text>
        <TouchableOpacity>
        <Image source={require("../assets/bell.png")} className="w-5 h-5 mr-1" />
        </TouchableOpacity>
      </View>

      {/* Ask Questions Section */}
      <Text className="text-lg font-semibold text-gray-800 mt-5">Ask Questions</Text>
      <Text className="text-sm text-gray-500 mb-3">Featured Tools</Text>

      {/* Text Area */}
      <TextInput
        placeholder="Enter or Copy your Question Here"
        className="border border-gray-300 rounded-md p-4 text-gray-700 mb-5 text-base h-40" 
        multiline
      />

      {/* Or Text */}
      <Text className="text-center text-gray-500 mb-5">Or</Text>

      {/* Scan with Camera Button with Border */}
      <TouchableOpacity className="flex-row items-center justify-center mb-5 border border-blue-500 rounded-md p-3">
        <Text className="text-blue-500 text-base">Scan with Camera</Text>
        <Text className="ml-1 text-lg">📷</Text>
      </TouchableOpacity>

      {/* Get Answer Button */}
      <TouchableOpacity className="bg-blue-500 p-4 rounded-md flex-row items-center justify-center">
        <Text className="text-white text-lg font-semibold">Get Answer</Text>
        <Text className="ml-2 text-yellow-400 text-lg">🪙</Text>
        <Text className="text-yellow-400 text-lg">1</Text>
      </TouchableOpacity>
    </View>
  );
}
