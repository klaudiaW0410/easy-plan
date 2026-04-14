import TaskItem from './TaskItem';

const TaskList = ({ tasks, filter, onToggleTask }) => {
  if (tasks.length === 0) {
    const emptyMessages = {
      all: 'No tasks yet. Start by adding one above!',
      active: 'No active tasks. You\'re all caught up!',
      completed: 'No completed tasks yet.'
    };
    
    return (
      <div className="empty-state">
        {emptyMessages[filter]}
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleTask={onToggleTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
