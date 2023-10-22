import {
  useFonts,
  VT323_400Regular,
  Ubuntu_700Bold,
} from "@expo-google-fonts/dev";
import { StyleSheet, Text, View, Image} from "react-native";
import { Button } from "react-native-paper";

export default function manHinh01() {
  let [loadFonts] = useFonts({ VT323_400Regular, Ubuntu_700Bold });
  loadFonts;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          lineHeight:26,
          marginTop: 50,
          marginBottom: 20,
          marginHorizontal: 20,
          fontFamily: "VT323_400Regular",
          textAlign: "center",
        }}
      >
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.img_XeDap}>
        <Image source={require('../img/xe_dap_xanh.png') } style={{ width: '90%', height:'90%', resizeMode:"center"}}></Image>
      </View>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Ubuntu_700Bold",
          width: 200,
          textAlign: "center",
          margin: 20,
        }}
      >
        POWER BIKE SHOP
      </Text>
      <Button
        title="Get Started"
        buttonColor="#E94141"
        textColor="#fff"
        style={{
          width: 360,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
        onPress={{}}
      >
        <Text
          style={{ color: "#fff", fontSize: 27, fontFamily: 'VT323_400Regular' }}
        >
          Get Started
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img_XeDap: {
    width: 350,
    height: 350,
    backgroundColor: "#E941411A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
});
