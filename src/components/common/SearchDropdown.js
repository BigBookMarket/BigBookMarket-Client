import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  color: #333;
  cursor: default;
  width: 280px;

  .dropdown__arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: " ";
    display: block;
    height: 0;
    margin-top: 0.3rem;
    position: absolute;
    right: 10px;
    top: 30px;
    width: 0;
  }

  .dropdown__arrow.open {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .dropdown input {
    line-height: 1.5;
    font-size: 1rem;
    background-color: #fff;
    border: 1px solid var(--primary-color);
    border-radius: 2px;
    box-sizing: border-box;
    cursor: default;
    outline: none;
    padding: 8px 52px 8px 10px;
    transition: all 200ms ease;
  }

  .dropdown__options {
    display: none;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
  }

  .dropdown__options.open {
    display: block;
  }

  .option {
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    padding: 8px 10px;
  }

  .option.selected,
  .option:hover {
    background-color: var(--theme-color);
    color: #333;
    font-weight: bold;
  }
`;

const SearchDropdown = (props) => {
  const { options, searchInput, onChange, setSelectedBook } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (options) setIsOpen(true);
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [options]);

  const closeDropdown = (e) => {
    setIsOpen(e && e.target === inputRef.current);
  };

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const showValue = () => {
    if (query.length > 0) return query;
    if (searchInput) return searchInput.title;
    return "";
  };

  return (
    <DropdownWrapper>
      <div className="dropdown" onClick={openDropdown}>
        <input
          ref={inputRef}
          type="text"
          placeholder={searchInput ? searchInput.title : "도서 검색하기"}
          value={showValue()}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value);
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div className={`dropdown__arrow ${isOpen ? "open" : null}`} />
      </div>
      <div className={`dropdown__options ${isOpen ? "open" : null}`}>
        {options &&
          options.map((option, idx) => {
            return (
              <div
                className={`option ${
                  searchInput === option ? "selected" : null
                }`}
                key={idx}
                onClick={() => {
                  setQuery("");
                  onChange(option);
                  setIsOpen(false);
                  setSelectedBook(option);
                }}
              >
                {option.title}
              </div>
            );
          })}
      </div>
    </DropdownWrapper>
  );
};

export default SearchDropdown;
