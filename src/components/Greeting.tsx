import { StyleSheet, Text } from "react-native";

type Greeting = {
  name: string;
  role: string;
};

export default function Greeting({ name, role }: Greeting) {
  return (
    <Text>
      Hello {name} ({role})
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});
