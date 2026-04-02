import { StyleSheet, Text, View } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> новый экран</Text>
      <Text style={styles.subtitle}>Ты перешёл новую страницу 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97c2e2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#d4e7e9",
  },
});
