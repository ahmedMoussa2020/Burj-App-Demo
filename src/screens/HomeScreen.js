import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView style={styles.container}>
        <Text>Hi, James Roland</Text>
        <AntDesign
          name="login"
          size={24}
          color="black"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'space-between',

    backgroundColor: "pink",
  },
});
export default HomeScreen;
