import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(text)}
        title={"Add Todo"}
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
