// import * as React from "react";
// import { View, Text } from "react-native";

// function HomeScreen() {
//   return (
//     //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <View className="bg-black">
//       <Text  className='bg-black'>Home Screen</Text>
//     </View>
//   );
// }

// export default HomeScreen;


import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

function HomeScreen() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className=''>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

