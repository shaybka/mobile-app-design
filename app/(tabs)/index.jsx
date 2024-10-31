import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white p-5 mt-10">
      {/* Header Section */}
      <View className="bg-blue-500 rounded-lg p-4 mb-5 shadow-lg">
  <View className="flex-row items-center justify-between">
    
    {/* Column 1: Wave Icon */}
    <View className="flex-1 items-center">
      <Image source={require("../../assets/wave.png")} className="w-8 h-8" />
    </View>

    {/* Column 2: Greeting and Subtext */}
    <View className="flex-2 items-start -ml-4 mr-4">
      <Text className="text-lg font-bold text-white">Hello, Adem</Text>
      <Text className="text-white text-sm mt-1">Let's get Answers</Text>
    </View>

    {/* Column 3: Coins Section */}
    <View className="flex-1 items-center">
      <Text className="text-white text-md mb-1">Your Coins</Text>
      <View className="flex-row items-center">
        <Image source={require("../../assets/coin.png")} className="w-5 h-5 mr-1" />
        <Text className="text-yellow-300 text-base font-bold">861</Text>
      </View>
    </View>

  </View>
</View>


      {/* Tabs Section */}
      <View className="flex-row justify-around items-center mb-5">
        <TouchableOpacity className="items-center">
          <Text className="text-blue-500 font-semibold">AI Tools</Text>
          <View className="w-2 h-2 bg-blue-500 rounded-full mt-1" />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-gray-400 font-semibold">Quizzes</Text>
        </TouchableOpacity>
      </View>

      {/* Button Section with Drop Shadow */}
      <Link href="/ask-question" asChild>
        <TouchableOpacity className="flex-row bg-blue-100 py-4 px-4 rounded-lg items-center mb-3 ">
          <Image source={require("../../assets/question.png")} className="w-6 h-6 mr-2" />
          <View>
            <Text className="text-blue-600 text-lg">Ask Questions</Text>
            <Text className="text-gray-500 text-sm">Have Question? Ask now!</Text>
          </View>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity className="flex-row bg-blue-100 py-4 px-4 rounded-lg items-center mb-3 shadow-md">
        <Image
          source={require("../../assets/Math.png")}
          className="w-6 h-6 mr-2"
        />
        <View>
          <Text className="text-blue-600 text-lg">Math Helper</Text>
          <Text className="text-gray-500 text-sm">
            Struggling with your Math?
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row bg-blue-100 py-4 px-4 rounded-lg items-center mb-3 shadow-md">
        <Image
          source={require("../../assets/revision.png")}
          className="w-6 h-6 mr-2"
        />
        <View>
          <Text className="text-blue-600 text-lg">Revision Helper</Text>
          <Text className="text-gray-500 text-sm">
            Need help with Revision?
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row bg-blue-100 py-4 px-4 rounded-lg items-center mb-3 shadow-md">
        <Image
          source={require("../../assets/summarizer.png")}
          className="w-6 h-6 mr-2"
        />
        <View>
          <Text className="text-blue-600 text-lg">Lesson Summarizer</Text>
          <Text className="text-gray-500 text-sm">
            Need your lessons summarized?
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
