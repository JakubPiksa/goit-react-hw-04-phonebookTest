import React from 'react';
import css from './filter.module.css'


const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts by name"
      className={css.input}
    />
  );
};

export default Filter;
