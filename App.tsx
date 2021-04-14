import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy milk', key: '2'},
    {text: 'buy butter', key: '3'},
  ]);

  const [foo, setFoo] = useState('');

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <Text>{ foo }</Text>
          <FlatList
           data={todos}
           renderItem={({ item }) => (
             <TodoItem item={ item } pressHandler={ pressHandler } />
           )}
          />
        </View>
      </View>
    </View>
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
