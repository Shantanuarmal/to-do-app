import React from 'react';
import TaskPage from '../TaskPage';
import { Calendar } from 'lucide-react';

const TodayTasks = () => {
  const initialTasks = [
    { id: 1, title: 'Team meeting at 2 PM', completed: false },
    { id: 2, title: 'Submit daily report', completed: false },
  ];

  return <TaskPage title="Today's Tasks" icon={Calendar} initialTasks={initialTasks} />;
};

export default TodayTasks;
