"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRouteHandler_1 = __importDefault(require("./routes/authRouteHandler"));
const contentRouteHandler_1 = __importDefault(require("./routes/contentRouteHandler"));
const mongoose_1 = __importDefault(require("mongoose"));
async function start() {
    try {
        const DB_URL = process.env.DB_URL;
        if (!DB_URL) {
            console.error("Error: DB_URL env variable not present");
        }
        await mongoose_1.default.connect(DB_URL);
        const PORT = process.env.PORT;
        if (!PORT) {
            console.error("Error: PORT env variable not present");
        }
        app.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`);
        });
    }
    catch (e) {
        console.error("Error : Unable to establish connection with Database");
    }
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/auth", authRouteHandler_1.default);
app.use("/api/content", contentRouteHandler_1.default);
start();
//# sourceMappingURL=server.js.map