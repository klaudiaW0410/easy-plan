const TaskItem = ({ task, onToggleTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="checkbox-container">
        <input 
          type="checkbox" 
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <div className="custom-checkbox">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M4.5 9.4L1.3 6.2L2.7 4.8L4.5 6.6L9.3 1.8L10.7 3.2L4.5 9.4Z" />
          </svg>
        </div>
        <span className="task-text">{task.text}</span>
      </label>
    </li>
  );
};

export default TaskItem;
