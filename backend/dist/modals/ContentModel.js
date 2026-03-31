"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = void 0;
const mongoose_1 = require("mongoose");
const ContentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "users" }
});
exports.ContentModel = (0, mongoose_1.model)("contents", ContentSchema);
//# sourceMappingURL=ContentModel.js.map