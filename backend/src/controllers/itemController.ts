import type { Request, Response } from "express";
import ShoppingItem from "../models/ShoppingItem.ts";

export const getItems = async (_: Request, res: Response) => {
  const items = await ShoppingItem.find().sort({ bought: 1, createdAt: -1 });
  res.json(items);
};

export const addItem = async (req: Request, res: Response) => {
  const item = await ShoppingItem.create({ name: req.body.name });
  res.status(201).json(item);
};

export const updateItem = async (req: Request, res: Response) => {
  const item = await ShoppingItem.findByIdAndUpdate(
    req.params.id,
    { bought: req.body.bought },
    { new: true },
  );
  res.json(item);
};

export const deleteItem = async (req: Request, res: Response) => {
  await ShoppingItem.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
