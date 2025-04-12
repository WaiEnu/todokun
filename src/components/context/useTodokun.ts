import { atom, action } from "nanostores";

  const generateId = (length) => {
      const id = Math.random() * (length - 1);
      return Math.floor(id);
  }

  const generateRondom = () => {
      const id = generateRondomId(jotai.length);
      const j = jotai[id];
      return j;
  }

  export const todokun = atom<Todokun>(generateRondom());

  export const generateTodokun = action(todokun, "generateTodokun", (store) => {
    store.set(generateRondom());
    console.log(todokun);
  });