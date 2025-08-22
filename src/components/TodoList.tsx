import React from 'react';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return <p className="dark:text-white text-gray-500">No tasks found.</p>;
    }

    return (
        <ul className="dark:text-black w-1/2 ">
            {todos.map((todo) => (
                <motion.li
                    key={todo.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    layout
                    className="flex flex-col justify-between items-center py-2 bg-white rounded shadow mb-2 dark:bg-gray-800"
                >
                    <TodoItem
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </motion.li>
            ))}
        </ul>
    );
};

export default TodoList;