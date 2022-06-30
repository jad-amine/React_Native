import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Form = ({ todos, setTodos, setNumber, number }) => {
  const [newTodo, SetNewTodo] = useState("");

  const handleAdd = () => {
    setNumber(number + 1);
    const toAdd = { text: newTodo, key: number };
    setTodos([...todos, toAdd]);
  };

  return (
    <View>
      <Text>New Todo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => SetNewTodo(val)}
        placeholder="add todo.."
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
  },
});

export default Form;
