const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <nav className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default TaskFilter;
