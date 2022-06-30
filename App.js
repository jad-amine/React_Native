import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import {} from "react-native-web";

export default function App() {
  const [name, setName] = useState("jad");
  const [age, setAge] = useState(35);

  const persons = [
    "jad",
    "joseph",
    "john",
    "dada",
    "joseph",
    "john",
    "joseph",
    "john",
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {persons.map((person) => (
          <View>
            <Text style={styles.item}>{person}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  item: {
    backgroundColor: "grey",
    marginTop: 24,
    padding: 30,
    fontSize: 24,
  },
});
