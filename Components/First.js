import React from "react";
import { useState } from "react";
import { StyleSheet, ScrollView, Text, TextInput } from "react-native";

const First = ({ tasks }) => {
  const [text, setText] = useState("");

  const addTask = (addTask) => {
    alert(addTask.length);
    const task = {
      title: text,
      isDone: false,
    };

    fetch("https://glacial-falls-22743.herokuapp.com/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => setAddResult(data));
  };

  return (
    <ScrollView style={styles.addTask}>
      <Text style={[styles.textStyle, styles.headerText]}>Add Task</Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="Add Task Here"
        onChangeText={(text) => setText(text)}
      ></TextInput>

      <Text style={styles.button} onPress={() => addTask(tasks)}>
        Add Task
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addTask: {
    height: "40%",
    width: "90%",
    marginVertical: 70,
    marginHorizontal: 18,
    paddingHorizontal: 30,
    paddingVertical: 50,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    backgroundColor: "#3930f0",
  },

  textStyle: {
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
  },

  inputStyle: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    flex: 1,
    justifyContent: "center",
    width: 100,
    marginLeft: 85,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
  },
});

export default First;
