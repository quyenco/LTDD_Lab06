import { StyleSheet, Text, View } from "react-native";
import manHinh02 from "./component/manHinh02.js";
import manHinh01 from "./component/manHinh01.js";

export default function App() {
  return manHinh02();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
