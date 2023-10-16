import { StyleSheet, Text, View } from "react-native";
import manHinh1 from "./component/manHinh1.js";

export default function App() {
  return manHinh1();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
