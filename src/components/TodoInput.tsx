import React, { useState } from 'react';

interface Props {
    onAdd: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed.length === 0) return;

        onAdd(trimmed);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md mb-4">
            <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-1-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-black"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            >
                Add
            </button>
        </form>
    );
};

export default TodoInput;