import { atom, action } from "nanostores";
import { getTagsService } from "../services/get-tags";

export const id = atom<number>(0);

const rand = () => {
  return Math.floor(Math.random() * (jotaiLength - 1))
}

export const generateId = action(id, "generateId", (store) => {
  const newId = rand();
  if (newId) {
    store.set(newId);
  }
});


