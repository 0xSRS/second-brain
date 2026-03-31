"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserModel_1 = require("../modals/UserModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
router.post("/v1/signup", async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await UserModel_1.UserModel.findOne({ email });
        if (!user) {
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            await UserModel_1.UserModel.create({ email, name, password: hashedPassword });
            res.json("User has been added");
        }
        else {
            res.json({ msg: "User already exists" });
        }
    }
    catch (e) {
        console.error("Error : Unable to connect to DB during Signup");
    }
});
router.post("/v1/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel_1.UserModel.findOne({ email });
        const SECRET_KEY = process.env.SECRET_KEY;
        if (!SECRET_KEY) {
            console.error("ERROR : SECRET_KEY env variable not present");
            res.status(500).json({ msg: "Internal server configuration error" });
        }
        if (user) {
            const result = await bcryptjs_1.default.compare(password, user.password);
            if (result) {
                const token = jsonwebtoken_1.default.sign({ userId: user._id }, SECRET_KEY);
                res.json({ msg: "Successfully logged in ", token });
            }
        }
        else {
            res.json({ msg: "User does not exist" });
        }
    }
    catch (e) {
        console.error("Error : Unable to connect to DB during Login");
    }
});
exports.default = router;
//# sourceMappingURL=authRouteHandler.js.map