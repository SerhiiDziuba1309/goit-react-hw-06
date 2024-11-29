import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <span className={s.span}>Find contact by name</span>
      <input
        className={s.searchBox}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBox;
