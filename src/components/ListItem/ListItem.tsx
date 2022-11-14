import React, { useEffect, useRef } from "react";
import { useStyles } from "./ListItem.style";
import { MdSearch } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { useGlobalData } from "../../contexts/globalDataContext";
import { IHashMapItem } from "../../models/data";

const ListItem = ({
  fromHistory,
  onClick,
  title,
  item,
}: {
  fromHistory?: boolean;
  onClick: (value: string) => void;
  title: string;
  item: IHashMapItem;
}) => {
  const classes = useStyles();
  const globalData = useGlobalData();

  const handleClick = () => {
    const currentHistory = globalData?.history || [];
    if (!fromHistory) {
      const newValue = [...currentHistory, item];
      globalData?.setHistory?.(newValue);
      localStorage.setItem("history", JSON.stringify(newValue));
    }
    onClick(title);
  };

  const onRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const currentHistory = globalData?.history?.filter(
      (historyItem) => item.id !== historyItem.id
    );
    globalData?.setHistory?.(currentHistory || []);
    localStorage.setItem("history", JSON.stringify(currentHistory));
  };

  return (
    <li onClick={handleClick} className={classes.listItemContainer}>
      {fromHistory ? (
        <MdAccessTime className={classes.historyIcon} />
      ) : (
        <MdSearch className={classes.icon} />
      )}
      <div className={classes.content}>
        <div
          className={`${classes.title} ${
            fromHistory ? classes.titleHistory : ""
          }`}
        >
          {title}
        </div>

        {fromHistory && (
          <div className={classes.delete} onClick={(e) => onRemove(e)}>
            Delete
          </div>
        )}
      </div>
    </li>
  );
};

export default ListItem;
