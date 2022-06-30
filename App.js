import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Form from "./components/Form";

// Components
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: "1" },
    { text: "create app", key: "2" },
    { text: "clean the room", key: "3" },
  ]);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(todos.length);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form
          setTodos={setTodos}
          todos={todos}
          setNumber={setNumber}
          number={number}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
