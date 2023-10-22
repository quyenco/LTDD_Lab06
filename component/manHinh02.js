import {
  useFonts,
  VT323_400Regular,
  Ubuntu_700Bold,
} from "@expo-google-fonts/dev";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function manHinh02() {
  let [loadFonts] = useFonts({ VT323_400Regular, Ubuntu_700Bold });
  loadFonts;
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#E94141",
          fontFamily: "Ubuntu_700Bold",
          fontSize: 25,
          marginTop: 40,
        }}
      >
        The world's Best Bike
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginBottom: 14,
        }}
      >
        <Button
          style={{
            borderColor: "red",
            borderWidth: 0.3,
            width: 110,
            borderRadius: 7,
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "gray", fontSize: 18 }}>All</Text>
        </Button>
        <Button
          style={{
            borderColor: "red",
            borderWidth: 0.3,
            width: 110,
            borderRadius: 7,
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "gray", fontSize: 18 }}>Mountain</Text>
        </Button>
        <Button
          id="btn_all"
          style={{
            borderColor: "red",
            borderWidth: 0.3,
            width: 110,
            borderRadius: 7,
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "gray", fontSize: 18 }}>Roadbike</Text>
        </Button>
      </View>
      <View style={{flex:1, backgroundColor: 'skyblue'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
  },
});
