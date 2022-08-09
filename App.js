import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import First from "./Components/First";
import Second from "./Components/Second";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://glacial-falls-22743.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  return (
    <ScrollView style={styles.container}>
      <First tasks={tasks}></First>
      <Second tasks={tasks}></Second>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#00a6FF",
  },
});
