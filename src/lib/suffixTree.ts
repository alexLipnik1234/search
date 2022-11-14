export type TChildren = {
  [key: string]: any;
};

export interface INode {
  children: TChildren;
  isWord: boolean;
}

class Node implements INode {
  children: TChildren;
  isWord: boolean;

  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

export class Trie {
  root: { children: TChildren; isWord: boolean };
  constructor() {
    this.root = new Node();
  }

  insert(word: string) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];

      if (!(charToInsert in current.children)) {
        current.children[charToInsert] = new Node();
      }

      current = current.children[charToInsert];
    }

    current.isWord = true;
  }

  contains(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];

      if (!(charToFind in current.children)) {
        return false;
      }

      current = current.children[charToFind];
    }

    return current.isWord;
  }

  startWithPrefix(prefix: string) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];

      if (!(charToFind in current.children)) {
        return false;
      }

      current = current.children[charToFind];
    }

    return current;
  }

  createResultsArray(prefix: string): string[] {
    const node = this.startWithPrefix(prefix);

    if (node) {
      const stack = [{ node, word: prefix }];
      const resultsArray = [];

      while (stack.length !== 0) {
        let current = stack.pop();
        if (current?.node?.isWord) {
          resultsArray.push(current?.word);
        }
        for (let key in current?.node.children) {
          stack.push({
            node: current?.node?.children[key],
            word: current?.word + key,
          });
        }
      }

      return resultsArray;
    }
    return [];
  }
}
