"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = auth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const { token } = req.headers;
    if (!token) {
        res.json({ msg: "You are not logged in" });
    }
    else {
        const SECRET_KEY = process.env.SECRET_KEY;
        if (!SECRET_KEY) {
            console.error("ERROR : SECRET_KEY env variable not present");
        }
        jsonwebtoken_1.default.verify(token, SECRET_KEY, (error, data) => {
            if (error) {
                console.error("Error: JWT verification failed");
                return res.status(403).json({ msg: "Invalid token" });
            }
            // const decoded = data as {userId:string}
            // req.userId = decoded.userId
            req.userId = data.userId;
            next();
        });
    }
}
//# sourceMappingURL=middleware.js.map