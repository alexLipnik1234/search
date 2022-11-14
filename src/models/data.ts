import { INode, TChildren } from "../lib/suffixTree";

export type TWinner = {
  firstname?: string;
  surname?: string;
  id: string;
  motivation: string;
  share: string;
};

export interface IHashMapItem extends TWinner {
  category: string;
  year: string;
  overallMotivation?: string;
}

export type THashMap = {
  [key: string]: IHashMapItem;
};

export type TGlobalData = {
  hash: THashMap;
  suffixTree: {
    root: INode;
    startWithPrefix: (prefix: string) => void;
    createResultsArray: (prefix: string) => string[];
    contains: (word: string) => void;
    insert: (word: string) => void;
  };
};
