import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

interface Item {
  id: string;
  name: string;
  done: boolean;
}

interface Props {
  items: Item[];
  toggleItem: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ items, toggleItem, deleteTask }) => {
  return (
    <SwipeListView
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <Pressable onPress={() => toggleItem(item.id)}>
        <View style={styles.rowFront}>
          <Text style={{ textDecorationLine: item.done ? "line-through" : "none" }}>
            {item.name}
            </Text>
        </View>
        </Pressable>
    )}
     renderHiddenItem={({item}) => (
        <View style={styles.rowBack}>
          <Pressable
          style= {styles.deleteButton}
          onPress={() => deleteTask(item.id)}
          >
       <Text style={styles.deleteText}>Delete</Text> 
      </Pressable>
    </View>
  )}
    rightOpenValue={-75}
    disableRightSwipe
    leftOpenValue={0}
  />
);
};

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 16,
  },
  rowBack: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 0
  },
  deleteButton: {
    backgroundColor: '#e53935',
    padding: 10,
    borderRadius: 5,
    },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
  },
});

export default TodoList;