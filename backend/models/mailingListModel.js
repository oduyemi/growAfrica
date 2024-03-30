"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mailingListSchema = new mongoose_1.default.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    productInterest: {
        type: String,
        required: true,
    },
    shopperOrVendor: {
        type: String,
        enum: ['shopper', 'vendor'],
        required: true,
    },
    contactPreference: {
        type: String,
        enum: ['email', 'phone', 'whatsapp'],
        required: true,
    },
    how: {
        type: String,
        required: true,
    },
    date: {
        type: Date, default: Date.now
    },
});
const MailingList = mongoose_1.default.model("MailingList", mailingListSchema);
exports.default = MailingList;
