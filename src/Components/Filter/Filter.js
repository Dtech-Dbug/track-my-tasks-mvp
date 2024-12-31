import React from 'react';

export const TaskFilter = ({ setTaskFilter }) => {
  return (
    <div className="task-filter">
      <label htmlFor="status-filter">Filter by Status:</label>
      <select
        id="status-filter"
        onChange={(e) => setTaskFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};
