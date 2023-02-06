import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from "./components/screens/Manager";
import About from "./components/screens/About";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Manager" component={Manager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const FirstScreen = (props) => {
  const nav = props.navigation;
  const list = [
    {
      msv: "Ph123",
      fullName: "Vu Viet Khanh",
      image_url:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329635391_569361275232615_4680220548375287363_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=RrdtzehoNf0AX9eF7Bv&tn=UjJKA-ueJhmY6JzG&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDIrMikCB-UXsMKJfVViPIOmjYtbIZM3wvyf1OaHu50Xw&oe=63E63847",
    },
    {
      msv: "Ph124",
      fullName: "Vu Viet Khanh1",
      image_url:
        "https://scontent.fhan15-2.fna.fbcdnhttps://sconhttps://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/328052117_613865290550455_807997876283446010_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=m1Z2reqd3qsAX-uX-eW&_nc_ht=scontent.fhan5-10.fna&oh=00_AfANgltK9YLC5vMaXEnJCCoKSF8qx6DLbzd4xc3w0ai8cg&oe=63E5239Etent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/329174121_6082048788481809_4550646394443332503_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=k4kSG1j_QQwAX-VaiU3&_nc_ht=scontent.fhan5-9.fna&oh=00_AfDhttps://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/329174121_6082048788481809_4550646394443332503_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=k4kSG1j_QQwAX-VaiU3&_nc_ht=scontent.fhan5-9.fna&oh=00_AfDwWd4fPV4Sh8dQflzIhvs2ZeLm_Fs1PtbckZfLZYBZsQ&oe=63E5EF7DwWd4fPV4Sh8dQflzIhvs2ZeLm_Fs1PtbckZfLZYBZsQ&oe=63E5EF7D.net/v/t39.30808-6/328678642_737317448012233_2812023294353111400_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=B2MJ_v2av9QAX8Yqj-A&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAHleHJ0279642_3bxu0Am-gG4fcwkM4EfMP7Jwfd3y6Q&oe=63E4EF5Dhttps://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/329635391_569361275232615_4680220548375287363_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=RrdtzehoNf0AX9eF7Bv&tn=UjJKA-ueJhmY6JzG&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDIrMikCB-UXsMKJfVViPIOmjYtbIZM3wvyf1OaHu50Xw&oe=63E63847",
    },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://picsum.photos/200",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nav.navigate("Manager", { list });
        }}
      >
        <Text style={styles.text}>Quản lý</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nav.navigate("About", {
            msv: "phheh1231",
            fullName: "Khanh",
            image_url:
              "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/329034569_870838410640486_4549434568533237204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=iLWjp8mkOqgAX-1F_Kf&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCSx0GzC60Xqwqzi7v0YgfQtjeuP2q0g14Jn1A3ki8Lww&oe=63E5FB3F",
          });
        }}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "yellow",
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
  image:{
    width: 200,
          height: 200,
          borderWidth: 1,
          borderColor: "none",
          borderRadius: 15,
  }
});
