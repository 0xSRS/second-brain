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
        const users = await ContentModel_1.ContentModel.find({ userId }).populate("userId", "name email");
        if (!users) {
            res.json("No content added yet");
        }
        res.json(users);
    }
    catch {
        res.json("Unable to view the content");
    }
});
exports.default = router;
//# sourceMappingURL=contentRouteHandler.js.map