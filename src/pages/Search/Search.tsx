import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { useGlobalData } from "../../contexts/globalDataContext";
import useSearch from "../../hooks/useSearch";
import { useStyles } from "./Search.style";

const Search = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const globalData = useGlobalData();
  const currentHistory = globalData.history || [];
  const results = useSearch(inputValue, globalData);

  const filteredResults = results.filter((item) => {
    let check = true;
    currentHistory.forEach((historyItem) => {
      if (historyItem.id == item.id) {
        check = false;
      }
    });
    return check;
  });

  return (
    <div className={classes.SearchPageContainer}>
      <Input
        results={filteredResults}
        history={currentHistory}
        value={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default Search;
