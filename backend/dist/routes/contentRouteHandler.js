"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = __importDefault(require("./middleware"));
const ContentModel_1 = require("../modals/ContentModel");
const router = (0, express_1.Router)();
router.post("/v1/add", middleware_1.default, async (req, res) => {
    const { title, link, description, type } = req.body;
    try {
        const userId = req.userId;
        //@ts-ignore
        await ContentModel_1.ContentModel.create({ title, link, description, type, userId });
        res.json({ msg: "Content added sucessfully" });
    }
    catch (e) {
        console.error("Unable to add content");
        res.json({ msg: "Unable to add content" });
    }
});
router.get("/v1/view", middleware_1.default, async (req, res) => {
    try {
        const userId = req.userId;
        //@ts-ignore
        const entries = await ContentModel_1.ContentModel.find({ userId }).populate("userId", "username");
        // Always send an array, even if it's empty
        res.json(entries);
    }
    catch (e) {
        res.status(500).json({ msg: "Error fetching content" });
    }
});
router.delete("/v1/delete", middleware_1.default, async (req, res) => {
    const { contentId } = req.body;
    // Check if contentId was actually provided
    if (!contentId) {
        return res.status(400).json({ msg: "Content ID is required" });
    }
    try {
        const userId = req.userId; // Extracted from the 'auth' middleware
        // Delete the document only if it matches the ID AND the owner's userId
        //@ts-ignore
        const result = await ContentModel_1.ContentModel.deleteOne({
            _id: contentId,
            userId: userId
        });
        // result.deletedCount tells us if something was actually removed
        if (result.deletedCount === 0) {
            return res.status(404).json({
                msg: "Content not found or you don't have permission to delete it"
            });
        }
        res.json({ msg: "Content deleted successfully" });
    }
    catch (e) {
        console.error("Delete Error:", e);
        res.status(500).json({ msg: "Internal server error during deletion" });
    }
});
exports.default = router;
//# sourceMappingURL=contentRouteHandler.js.map