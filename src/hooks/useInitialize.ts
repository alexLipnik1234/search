import React, { useEffect, useState } from "react";
import data from "../mock.json";
import { Trie } from "../lib/suffixTree";
import { THashMap } from "../models/data";

const useInitialize = () => {
  const hash: THashMap = {};
  const suffixTree = new Trie();

  useEffect(() => {
    data.prizes.forEach((nobelCategory) => {
      nobelCategory.laureates?.forEach((winner) => {
        const key =
          `${winner.firstname}${winner.surname}${winner.id}`.toLocaleLowerCase();
        if (!(key in hash)) {
          hash[key] = {
            ...winner,
            year: nobelCategory.year,
            category: nobelCategory.category,
            overallMotivation: nobelCategory?.overallMotivation,
          };
        }
        suffixTree.insert(key);
      });
    });
  }, []);

  return { hash, suffixTree };
};

export default useInitialize;
