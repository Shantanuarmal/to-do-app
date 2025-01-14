import React, { useState } from 'react';
import { Check, Trash2, Edit } from 'lucide-react';

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSubmit = () => {
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className={`flex items-center p-3 border rounded-lg mb-2 ${
      task.completed ? 'bg-gray-50' : 'bg-white'
    }`}>
      <button
        onClick={() => onComplete(task.id)}
        className={`p-2 rounded-full mr-3 ${
          task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100'
        }`}
      >
        <Check className="h-4 w-4" />
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSubmit}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          className="flex-1 p-1 border rounded"
          autoFocus
        />
      ) : (
        <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
      )}

      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 text-gray-500 hover:text-blue-500"
        >
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-gray-500 hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
