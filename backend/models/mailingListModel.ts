import mongoose, { Schema, Document } from "mongoose";

export interface IMailingList extends Document {
  id: mongoose.Types.ObjectId;
  fullname: string;
  email: string;
  phone: string;
  productInterest: string;
  shopperOrVendor: 'shopper' | 'vendor';
  contactPreference: 'email' | 'phone' | 'whatsapp';
  how: string;
  date: Date;
}

const mailingListSchema: Schema = new mongoose.Schema({
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

const MailingList = mongoose.model<IMailingList>("MailingList", mailingListSchema);

export default MailingList;
