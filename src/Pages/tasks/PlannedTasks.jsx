import React from 'react';
import TaskPage from '../TaskPage';
import { Clock } from 'lucide-react';

const PlannedTasks = () => {
  const initialTasks = [
    { id: 1, title: 'Quarterly review meeting', completed: false },
    { id: 2, title: 'Project milestone', completed: false },
  ];

  return <TaskPage title="Planned Tasks" icon={Clock} initialTasks={initialTasks} />;
};

export default PlannedTasks;
