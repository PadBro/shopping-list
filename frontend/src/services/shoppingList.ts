import { api } from "../adapters/api";
import type { ShoppingListItem } from "../types/shoppingListItem";

const resource = "items";

export const getItems = () => api.get(resource).then((data) => data.json());

export const createItem = (name: ShoppingListItem["name"]) =>
  api.post(resource, { name });

export const updateItem = (
  id: ShoppingListItem["_id"],
  item: ShoppingListItem,
) => api.put(`${resource}/${id}`, item);

export const deleteItem = (id: ShoppingListItem["_id"]) =>
  api.delete(`${resource}/${id}`);
