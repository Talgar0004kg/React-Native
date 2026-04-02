import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type ProfileCard = {
  name: string;
  role: string;
  course: number;
};

export default function ProfileCard({ name, role, course }: ProfileCard) {
  const [count, setCount] = useState(course);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{role}</Text>
      <Text>Course: {count}</Text>

      <Button title="Courseeeee" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 16,
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
});
