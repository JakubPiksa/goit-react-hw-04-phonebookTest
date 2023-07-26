import React, { useState } from 'react';
import css from './filter.module.css';

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts by name"
      className={css.input}
    />
  );
};

export default Filter;
