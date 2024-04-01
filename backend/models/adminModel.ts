import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';

export interface IAdmin extends Document {
  admin_id: mongoose.Types.ObjectId;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  pwd: string;
  createdAt: Date;
  salt: string;
}

const adminSchema: Schema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
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
  pwd: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

adminSchema.pre<IAdmin>('save', async function (next: Function) {
  const admin: IAdmin = this as IAdmin; 
  if (!admin.isModified('pwd')) return next();

  const saltRounds = 10;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(admin.pwd, salt);
    admin.pwd = hashedPassword;
    admin.salt = salt;
    return next();
  } catch (error) {
    return next(error);
  }
});

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;
