import React from 'react';
import TaskPage from '../TaskPage';
import { ListChecks } from 'lucide-react';

const AllTasks = () => {
  const initialTasks = [
    { id: 1, title: 'Complete project documentation', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Update dependencies', completed: false },
  ];

  return <TaskPage title="All Tasks" icon={ListChecks} initialTasks={initialTasks} />;
};

export default AllTasks;
