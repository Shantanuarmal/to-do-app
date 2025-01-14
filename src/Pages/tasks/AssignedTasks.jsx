import React from 'react';
import TaskPage from '../TaskPage';
import { User } from 'lucide-react';

const AssignedTasks = () => {
  const initialTasks = [
    { id: 1, title: 'Code review for PR #123', completed: false, assignedBy: 'Sarah Chen' },
    { id: 2, title: 'Bug fix for mobile layout', completed: false, assignedBy: 'Mike Johnson' },
  ];

  return <TaskPage title="Assigned Tasks" icon={User} initialTasks={initialTasks} />;
};

export default AssignedTasks;
