import React, { createContext, useContext, useState } from "react";
import { IHashMapItem, TGlobalData } from "../models/data";

const GlobalDataContext = createContext<
  Partial<{
    data: TGlobalData;
    setNewData: (value: TGlobalData) => void;
    history: IHashMapItem[];
    setHistory: (value: IHashMapItem[]) => void;
  }>
>({});

export function useGlobalData() {
  return useContext(GlobalDataContext);
}
export function GlobalDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<TGlobalData | undefined>(undefined);
  const [history, setHistory] = useState<IHashMapItem[] | undefined>(
    localStorage.getItem("history") &&
      JSON.parse(localStorage.getItem("history") as string)
  );

  const setNewData = (data: TGlobalData) => {
    setData(data);
  };

  return (
    <GlobalDataContext.Provider
      value={{
        data,
        setNewData,
        history,
        setHistory,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
}
