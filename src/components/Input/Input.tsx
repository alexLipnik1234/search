import React, { useEffect, useRef } from "react";
import { useStyles } from "./Input.style";
import { MdSearch } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { IHashMapItem } from "../../models/data";
import ListItem from "../ListItem/ListItem";

const Input = ({
  value,
  results,
  history,
  setInputValue,
}: {
  value: string;
  results: IHashMapItem[];
  history: IHashMapItem[];
  setInputValue: (value: string) => void;
}) => {
  const [focused, setFocused] = useState(true);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const classes = useStyles();
  let showActiveContainer = results.length > 0 && focused;

  return (
    <div
      className={`${classes.searchContainer} ${
        showActiveContainer ? classes.searchContainerActive : ""
      }`}
    >
      <div className={classes.searchBody}>
        {focused && <MdSearch className={classes.searchIcon} />}
        <input
          onBlur={() => setTimeout(() => setFocused(false), 300)}
          onFocus={() => setFocused(true)}
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          className={classes.input}
          type="text"
        />
        <div className={classes.actionsContainer}>
          <MdClear
            onClick={() => setInputValue("")}
            className={classes.cancelIcon}
          />
        </div>
      </div>

      {showActiveContainer && (
        <ul className={classes.list}>
          <>
            {history.map((historyItem) => (
              <ListItem
                fromHistory
                key={historyItem.id}
                onClick={setInputValue}
                item={historyItem}
                title={`${historyItem?.firstname || ""} ${
                  historyItem?.surname || ""
                } ${historyItem.category} ${historyItem.year}`}
              />
            ))}
            {results.map((item) => (
              <ListItem
                key={item.id}
                onClick={setInputValue}
                item={item}
                title={`${item?.firstname || ""} ${item?.surname || ""} ${
                  item.category
                } ${item.year}`}
              />
            ))}
          </>
        </ul>
      )}
    </div>
  );
};

export default Input;
