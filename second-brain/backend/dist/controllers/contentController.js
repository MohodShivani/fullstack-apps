import mongoose from "mongoose";
import { ContentModel } from "../models/Content.js";
export const createContent = async (req, res) => {
    const { title, link, type } = req.body;
    const content = await ContentModel.create({
        title,
        link,
        type,
        userId: new mongoose.Types.ObjectId(req.userId)
    });
    res.json({ message: "Content added", content });
};
export const getContent = async (req, res) => {
    if (!req.userId) {
        return res.status(403).json({ message: "Unauthorized" });
    }
    const type = req.query.type;
    const filter = {
        userId: new mongoose.Types.ObjectId(req.userId)
    };
    if (type && ["youtube", "twitter"].includes(type)) {
        filter.type = type;
    }
    const contents = await ContentModel.find(filter);
    res.json({ contents });
};
export const deleteContent = async (req, res) => {
    const id = req.params.id;
    await ContentModel.deleteOne({
        _id: id,
        userId: new mongoose.Types.ObjectId(req.userId)
    });
    res.json({ message: "Deleted successfully" });
};
//# sourceMappingURL=contentController.js.map