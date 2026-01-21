import * as shoppingListService from "../services/shoppingList";
import { useState, useEffect } from "react";
import type { ShoppingListItem } from "../types/shoppingListItem";

export const useGetShoppingListItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const load = () => {
      setIsLoading(true);
      shoppingListService.getItems().then((data: ShoppingListItem[]) => {
        setItems(data);
        setIsLoading(false);
      });
    };

    load();
  }, [refresh]);

  const refreshItems = () => {
    setRefresh(!refresh);
  };

  return { items, refreshItems, isLoading };
};

export const useCreateShoppingListItem = () => {
  const createItem = (title: string) => shoppingListService.createItem(title);

  return { createItem };
};

export const useToggleShoppingItemBought = () => {
  const toggleBought = (item: ShoppingListItem) =>
    shoppingListService.updateItem(item._id, { ...item, bought: !item.bought });

  return { toggleBought };
};

export const useDeleteShoppingListItem = () => {
  const deleteItem = (item: ShoppingListItem) =>
    shoppingListService.deleteItem(item._id);

  return { deleteItem };
};
