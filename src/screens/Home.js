import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import firebase from "../../firebase/firebase";

const Home = ({ navigation }) => {
  const signOut = async () => {
    await firebase.auth().signOut();
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <Text>This is your home screen!</Text>
      <Text>
        You are authenticated as{" "}
        {firebase.auth().currentUser.isAnonymous
          ? "Guest"
          : firebase.auth().currentUser.uid}
      </Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
