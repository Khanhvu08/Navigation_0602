import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const About = (props) => {
  const { route } = props;
  const { msv, fullName, image_url } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image_url,
        }}
      />
      <Text style={styles.text}>MSV: {msv}</Text>
      <Text style={styles.text}>Họ và Tên: {fullName}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 350,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 15,
    marginBottom: 5,
  },
  text: {
    marginVertical: 3,
    fontWeight: "bold",
    color: "red",
    fontSize: 18,

  },
});
