import type { Request, Response } from "express";
import mongoose from "mongoose";
import { ContentModel } from "../models/Content.js";

export const createContent = async (req: Request, res: Response) => {
  const { title, link, type } = req.body;

  const content = await ContentModel.create({
    title,
    link,
    type,
    userId: new mongoose.Types.ObjectId(req.userId)
  });

  res.json({ message: "Content added", content });
};

export const getContent = async (req: Request, res: Response) => {
  if (!req.userId) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  const type = req.query.type as string | undefined;

  const filter: any = {
    userId: new mongoose.Types.ObjectId(req.userId)
  };

  if (type && ["youtube", "twitter"].includes(type)) {
    filter.type = type;
  }

  const contents = await ContentModel.find(filter);

  res.json({ contents });
};

export const deleteContent = async (req: Request, res: Response) => {
  const id = req.params.id;

  await ContentModel.deleteOne({
    _id: id,
    userId: new mongoose.Types.ObjectId(req.userId)
  });

  res.json({ message: "Deleted successfully" });
};