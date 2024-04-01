"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = require("bcrypt");
const adminModel_1 = __importDefault(require("../models/adminModel"));
const mailingListModel_1 = __importDefault(require("../models/mailingListModel"));
const router = express_1.default.Router();
require("dotenv").config();
router.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how } = req.body;
        if (![fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newContact = new mailingListModel_1.default({ fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how });
        yield newContact.save();
        return res.status(200).json({ message: "Contact saved!" });
    }
    catch (error) {
        console.error("Error saving contact:", error);
        return res.status(500).json({ message: "Error saving contact" });
    }
}));
router.post("/admin/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fname, lname, email, phone, pwd, cpwd } = req.body;
        if (![fname, lname, email, phone, pwd, cpwd].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (pwd !== cpwd) {
            return res.status(400).json({ message: "Both passwords must match!" });
        }
        const existingAdmin = yield adminModel_1.default.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const hashedPassword = yield (0, bcrypt_1.hash)(pwd, 10);
        const newAdmin = new adminModel_1.default({ fname, lname, email, phone, pwd: hashedPassword });
        yield newAdmin.save();
        // Access token
        const token = jsonwebtoken_1.default.sign({
            adminID: newAdmin._id,
            email: newAdmin.email
        }, process.env.JWT_SECRET);
        const adminSession = {
            adminID: newAdmin._id,
            fname,
            lname,
            email,
            phone
        };
        req.session.admin = adminSession;
        return res.status(201).json({
            message: "Admin registered successfully.",
            token,
            nextStep: "/next-login-page",
        });
    }
    catch (error) {
        console.error("Error during admin registration:", error);
        return res.status(500).json({ message: "Error registering admin" });
    }
}));
router.post("/admin/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, pwd } = req.body;
        if (![email, pwd].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        try {
            const admin = yield adminModel_1.default.findOne({ email });
            if (!admin) {
                return res.status(401).json({ message: "Email not registered. Please register first." });
            }
            const isPasswordMatch = yield (0, bcrypt_1.compare)(pwd, admin.pwd);
            if (!isPasswordMatch) {
                return res.status(401).json({ message: "Incorrect email or password" });
            }
            const pin = Math.floor(1000 + Math.random() * 9000).toString();
            // Access token
            const token = jsonwebtoken_1.default.sign({
                adminID: admin._id,
                email: admin.email
            }, process.env.JWT_SECRET || "default_secret");
            const adminSession = {
                adminID: admin._id,
                fname: admin.fname,
                lname: admin.lname,
                email: admin.email,
                phone: admin.phone,
            };
            req.session.admin = adminSession;
            return res.status(201).json({
                message: "Admin login successful!.",
                pin,
                nextStep: "/next-dashboard",
                token,
            });
        }
        catch (error) {
            console.error("Error during admin login:", error);
            return res.status(500).json({ message: "Error logging in admin" });
        }
    }
    catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ message: "Error logging in admin" });
    }
}));
exports.default = router;
