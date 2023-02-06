import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Manager = (props) => {
  const { route } = props;
  const { list } = route.params;
  return (
      <View style={styles.container}>
        {list ? (
          list.map((item, index) => (
            <View key={index} style={styles.form}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image_url,
                }}
              />
              <View>
                <Text style={styles.text}>MSV: {item.msv}</Text>
                <Text style={styles.text}>Họ và Tên: {item.fullName}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
  );
};

export default Manager;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
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
