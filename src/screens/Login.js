import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import firebase from "../../firebase/firebase";

const Login = ({ navigation }) => {
  // Listen for authentication state to change.
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log("We are authenticated now!");
      navigation.replace("home");
    } else {
      console.log("We are not authenticated!");
    }
  });

  const SignInAnonymously = async () => {
    await firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        navigation.navigate("home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login screens</Text>
      <Button title="Sign In Anonymously" onPress={SignInAnonymously} />
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

export default Login;
