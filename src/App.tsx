import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import DarkModeToggle from './components/DarkModeToggle';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load todos from localStorage on initial render
  useEffect(() => {
      const saved = localStorage.getItem('todos');
      if (saved) {
        setTodos(JSON.parse(saved));
      }
    }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
 
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">To-Do App</h1>
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
        <TodoInput onAdd={addTodo} />
        <FilterButtons currentFilter={filter} onChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
    </div>
  );
};

export default App;
