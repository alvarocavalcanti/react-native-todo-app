import React, { useEffect, useState } from 'react';
import { Alert, FlatList, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy milk', key: '2'},
    {text: 'buy butter', key: '3'},
  ]);

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('OOPSY!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <AddTodo submitHandler={ submitHandler }/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={ item } pressHandler={ pressHandler } />
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
  },
});
