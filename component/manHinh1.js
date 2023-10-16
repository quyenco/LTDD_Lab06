import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";

export default function manHinh1() {
  return (
    <View style={styles.container}>
      <View style={styles.view_image}></View>
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <IconButton icon="star" iconColor={"#f2c641"} size={35}></IconButton>
          <IconButton icon="star" iconColor={"#f2c641"} size={35}></IconButton>
          <IconButton icon="star" iconColor={"#f2c641"} size={35}></IconButton>
          <IconButton icon="star" iconColor={"#f2c641"} size={35}></IconButton>
          <IconButton icon="star" iconColor={"#f2c641"} size={35}></IconButton>
        </View>
        <Text> (Xem 828 đánh giá)</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 40, marginRight: 40 }}>1.790.000 đ</Text>
        <Text style={{ fontSize: 17, textDecorationLine: "line-through" }}>
          1.790.000 đ
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 17,
            marginRight: 10,
            color: "red",
            fontWeight: "bold",
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <IconButton
          icon="help"
          size={15}
          style={{ borderWidth: 3 }}
        ></IconButton>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 0.5,
          margin: 5,
          borderRadius: 10,
          borderColor: "gray",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            width: "90%",
            textAlign: "center",
          }}
        >
          4 MÀU-CHỌN MÀU
        </Text>
        <IconButton icon="chevron-right"></IconButton>
      </View>
      <Button buttonColor={"red"}>
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          Chọn mua
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view_image: {
    width: "100%",
    height: 300,
  },
});
