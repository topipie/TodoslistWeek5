import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import useTodos from '../hooks/useTodos';

import TodoInput from '../components/todoinput';
import TodoList from '../components/todolist';


const TodoScreen: React.FC = () => {
const { tasks, addTask, toggleTask, deleteTask } = useTodos();
const [input, setInput] = useState('');

const handleAddTask = () => {
    if (input.trim()) {
        addTask(input.trim());
        setInput('');
    }
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Todo List</Text>

 <TodoInput 
    input={input} 
    setInput={setInput} 
    addTask={handleAddTask} 
    />

<TodoList    
    items={tasks} 
    toggleItem={toggleTask} 
    deleteTask={deleteTask}
    />

</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 60,
paddingHorizontal: 16,
backgroundColor: '#fff',
width: '100%',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
textAlign: 'center',
},
});

export default TodoScreen;