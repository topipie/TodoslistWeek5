import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import { Button, TextInput } from "react-native-paper";

interface Props {
  input: string;
  setInput: (text: string) => void;
  addTask: () => void;
}

const TodoInput: React.FC<Props> = ({ input, setInput, addTask }) => {
  return (
    <View style={styles.inputRow}>
        <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Add task"
        mode="outlined"
      />
      <Button
      style={styles.button}
      mode="contained"
      onPress={addTask}  
      >
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'stretch',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  button: {  
    backgroundColor: '#2d00f8',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default TodoInput;