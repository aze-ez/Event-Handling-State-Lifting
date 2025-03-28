import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('')

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText)
      setTaskText('') 
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
        onSubmitEditing={handleAddTask} // Trigger when pressing Enter
        returnKeyType="done" // Change the return key to "done"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center', // Cen
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  }
});
