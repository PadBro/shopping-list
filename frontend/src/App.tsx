import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  useGetShoppingListItems,
  useCreateShoppingListItem,
  useToggleShoppingItemBought,
  useDeleteShoppingListItem,
} from "./hooks/shoppingList";
import type { ShoppingListItem } from "./types/shoppingListItem";

function App() {
  const [title, setTitle] = useState("");
  const { items, refreshItems, isLoading } = useGetShoppingListItems();
  const { createItem } = useCreateShoppingListItem();
  const { toggleBought } = useToggleShoppingItemBought();
  const { deleteItem } = useDeleteShoppingListItem();

  const handleToggleBought = (item: ShoppingListItem) => {
    toggleBought(item).then(() => refreshItems());
  };

  const handleDelete = (item: ShoppingListItem) => {
    deleteItem(item).then(() => refreshItems());
  };

  const handleAdd = (event: FormEvent) => {
    event.preventDefault();

    createItem(title).then(() => {
      refreshItems();
      setTitle("");
    });
  };

  return (
    <>
      <div className="p-4">
        <p className="text-xl text-center mb-4">Your shopping list</p>
        <form className="flex gap-4" onSubmit={handleAdd}>
          <Input
            required
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            disabled={isLoading}
            placeholder="Butter"
          />
          <Button
            variant="outline"
            type="submit"
            className="cursor-pointer"
            disabled={isLoading}
          >
            Add
            <PlusIcon />
          </Button>
        </form>
        <div className="pt-4 space-y-1">
          {items?.map((item) => (
            <div
              className="flex items-center justify-between gap-4 hover:bg-gray-200 rounded px-2 py-1 cursor-pointer"
              onClick={() => handleToggleBought(item)}
              key={item._id}
            >
              <div className="flex gap-2">
                <Checkbox
                  id={item._id}
                  checked={item.bought}
                  onCheckedChange={() => handleToggleBought(item)}
                  disabled={isLoading}
                />
                <Label
                  className={`${item.bought ? "line-through" : ""}`}
                  htmlFor={item._id}
                >
                  {item.name}
                </Label>
              </div>

              <Button
                variant="outline"
                type="button"
                className="cursor-pointer"
                size="sm"
                onClick={() => handleDelete(item)}
                disabled={isLoading}
              >
                <TrashIcon className="text-red-600" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
