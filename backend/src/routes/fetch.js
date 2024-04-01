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
const adminModel_1 = __importDefault(require("../models/adminModel"));
const mailingListModel_1 = __importDefault(require("../models/mailingListModel"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json({ message: "GrowAfrica!!" });
});
router.get("/admin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admins = yield adminModel_1.default.find();
        if (admins.length === 0) {
            res.status(404).json({ Message: "Admins not available" });
        }
        else {
            res.json({ data: admins });
        }
    }
    catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
router.get("/admin/:adminId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminId = req.params.adminId;
        const admin = yield adminModel_1.default.findById(adminId);
        if (!admin) {
            res.status(404).json({ Message: "Admin not found" });
        }
        else {
            res.json({ data: admin });
        }
    }
    catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
router.get("/contacts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield mailingListModel_1.default.find();
        if (contacts.length === 0) {
            res.status(404).json({ Message: "Contacts not available" });
        }
        else {
            res.json({ data: contacts });
        }
    }
    catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
router.get("/contacts/:contactId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactId = req.params.contactId;
        const contact = yield mailingListModel_1.default.findById(contactId);
        if (!contact) {
            res.status(404).json({ Message: "Contact not found" });
        }
        else {
            res.json({ data: contact });
        }
    }
    catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
exports.default = router;
