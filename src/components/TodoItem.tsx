import React, { useState } from 'react';
import { Todo } from '../App';
import { Pencil, Trash2 } from 'lucide-react';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={`flex items-center justify-between bg-white rounded shadow mx-auto p-3 m-1 w-11/12 hover:scale-[1.05] 
        ${todo.completed ? 'opacity-60 line-through' : ''
      }`}
    >
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 px-2 py-1 border rounded mr-2"
        />
      ) : (
        <span
          onClick={() => onToggle(todo.id)}
          className="flex-1 cursor-pointer"
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
          <Pencil size={18} />
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
