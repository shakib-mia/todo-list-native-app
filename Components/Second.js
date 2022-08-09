import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Second = ({ tasks }) => {
  const completeItem = (item) => {
    item.isDone = true;

    fetch(`https://glacial-falls-22743.herokuapp.com/todos/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const deleteItem = (item) => {
    fetch(`https://glacial-falls-22743.herokuapp.com/todos/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDeletedCount(data.deletedCount));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.secondTitle}>Task List</Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.textStyle}>
            <Text>{item.title}</Text>
            <View style={styles.iconStyle}>
              <Icon
                style={{ marginRight: 5 }}
                name="check"
                size={15}
                color={`${item.isDone ? "#0f0" : "#111"}`}
                onPress={() => completeItem(item)}
              ></Icon>
              <Icon
                name="trash"
                size={15}
                color="#000"
                onPress={() => deleteItem(item)}
              ></Icon>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "90%",
    marginLeft: 18,
    marginVertical: 10,
    marginHorizontal: 18,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: "#3930f0",
  },

  textStyle: {
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    margin: 20,
    color: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  secondTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },

  iconStyle: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Second;
