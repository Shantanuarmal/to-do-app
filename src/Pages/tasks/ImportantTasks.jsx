import React from 'react';
import TaskPage from '../TaskPage';
import { Star } from 'lucide-react';

const ImportantTasks = () => {
  const initialTasks = [
    { id: 1, title: 'Client presentation prep', completed: false },
    { id: 2, title: 'Review quarterly goals', completed: false },
  ];

  return <TaskPage title="Important Tasks" icon={Star} initialTasks={initialTasks} />;
};

export default ImportantTasks;
