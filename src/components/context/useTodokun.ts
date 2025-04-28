import { atom, action } from "nanostores";
import { jotai } from "../types/jotai";
import type { Todokun } from "../types/task";

  const generateId = (length:number) => {
      const id = Math.random() * (length - 1);
      return Math.floor(id);
  }

  const generateRondom = () => {
      const id = generateId(jotai.length);
      const j = jotai[id];
      return j;
  }

  export const todokun = atom<Todokun>(generateRondom());

  export const generateTodokun = action(todokun, "generateTodokun", (store) => {
    store.set(generateRondom());
    console.log(todokun);
  });