import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';

export default function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {
    const trimmedTask = taskText.trim();
    if (trimmedTask !== '' && !tasks.includes(trimmedTask)) {
      setTasks([...tasks, trimmedTask]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => 
          <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center', // Center content vertically
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
