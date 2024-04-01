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
router.delete("/admin/:adminId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminId = req.params.menteeId;
        const deletedAdmin = yield adminModel_1.default.findByIdAndDelete(adminId);
        if (!deletedAdmin) {
            return res.status(404).json({ Message: "Admin not found" });
        }
        res.json({ Message: "Admin deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting admin", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
router.delete("/contact/:contactId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactId = req.params.taskId;
        const deletedContact = yield mailingListModel_1.default.findByIdAndDelete(contactId);
        if (!deletedContact) {
            return res.status(404).json({ Message: "Contact not found" });
        }
        res.json({ Message: "Contact deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting contact", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
}));
exports.default = router;
