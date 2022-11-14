import React, { useMemo, useState } from "react";
import { IHashMapItem, TGlobalData } from "../models/data";

export const debounce = ({
  func,
  timeout = 50,
}: {
  func: (value: string) => void;
  timeout?: number;
}) => {
  let timer: any;
  return (...args: any): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const useSearch = (
  prefix: string,
  globalData: Partial<{
    data: TGlobalData;
    setNewData: (value: TGlobalData) => void;
    history: IHashMapItem[];
    setHistory: (value: IHashMapItem[]) => void;
  }>
) => {
  const [results, setResults] = useState<IHashMapItem[]>([]);

  const searchPrefix = debounce({
    func: () => {
      if (prefix.length >= 1 && globalData && globalData.data) {
        const data: string[] = globalData?.data?.suffixTree?.createResultsArray(
          prefix.toLocaleLowerCase()
        );
        const dataFromHash: IHashMapItem[] = [];
        data.forEach((item) => {
          if (globalData && globalData.data && globalData.data.hash[item]) {
            dataFromHash.push({
              ...globalData.data?.hash[item],
            });
          }
        });
        setResults(dataFromHash);
      }
    },
  });

  useMemo(() => {
    searchPrefix();
  }, [prefix]);

  if (prefix === "") {
    return [];
  }

  return results;
};

export default useSearch;
