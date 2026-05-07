import mongoose from "mongoose";
import { LinkModel } from "../models/Link.js";
import { ContentModel } from "../models/Content.js";
import { User } from "../models/User.js";
import { random } from "../utils.js";
export const shareBrain = async (req, res) => {
    if (!req.userId) {
        return res.status(403).json({
            message: "Unauthorized"
        });
    }
    const share = req.body.share;
    if (share) {
        const existing = await LinkModel.findOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        });
        if (existing) {
            return res.json({ hash: existing.hash });
        }
        const hash = random(10);
        await LinkModel.create({
            userId: new mongoose.Types.ObjectId(req.userId),
            hash
        });
        res.json({ hash });
    }
    else {
        await LinkModel.deleteOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        });
        res.json({ message: "Removed link" });
    }
};
export const getSharedBrain = async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({ hash });
    if (!link) {
        return res.status(411).json({ message: "Invalid link" });
    }
    const content = await ContentModel.find({
        userId: link.userId
    });
    const user = await User.findById(link.userId);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json({
        username: user.username,
        content
    });
};
//# sourceMappingURL=brainController.js.map