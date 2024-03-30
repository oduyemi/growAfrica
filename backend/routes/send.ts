import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import mongoose, { Schema, Document } from "mongoose";
import Admin, { IAdmin } from "../models/adminModel.js";
import MailingList, { IMailingList } from "../models/mailingListModel.js";

const router = express.Router();


require("dotenv").config();

interface AdminSession {
    adminID: mongoose.Types.ObjectId; 
    fname: string;
    lname: string;
    email: string;
    phone: string;
}
  

declare module "express-session" {
    interface SessionData {
      admin?: AdminSession; 
    }
}
  


router.post("/contact", async (req: Request, res: Response) => {
    try {
        const { fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how } = req.body;
        if (![fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const newContact: IMailingList = new MailingList({ fullname, email, phone, productInterest, shopperOrVendor, contactPreference, how }) as IMailingList;
        await newContact.save();

        return res.status(200).json({ message: "Contact saved!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        return res.status(500).json({ message: "Error saving contact" });
    }
});


router.post("/admin/signup", async (req: Request, res: Response) => {
    try {
        const { fname, lname, email, phone, password, confirmPassword } = req.body;
        if (![fname, lname, email, phone, password, confirmPassword].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Both passwords must match!" });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await hash(password, 10);
        const newAdmin: IAdmin = new Admin({ fname, lname, email, phone, password: hashedPassword }) as IAdmin;
        await newAdmin.save();

        // Access token
        const token = jwt.sign(
            {
                adminID: newAdmin._id, 
                email: newAdmin.email
            },
            process.env.JWT_SECRET!,
        );

        const adminSession: AdminSession = {
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
    } catch (error) {
        console.error("Error during admin registration:", error);
        return res.status(500).json({ message: "Error registering admin" });
    }
});


   
  
router.post("/admin/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (![email, password].every((field) => field)) {
            return res.status(400).json({ message: "All fields are required" });
        }

        try {
            const admin: IAdmin | null = await Admin.findOne({ email });
            if (!admin) {
                return res.status(401).json({ message: "Email not registered. Please register first." });
            }

            const isPasswordMatch = await compare(password, admin.password);

            if (!isPasswordMatch) {
                return res.status(401).json({ message: "Incorrect email or password" });
            }

            const pin = Math.floor(1000 + Math.random() * 9000).toString();

            // Access token
            const token = jwt.sign(
                {
                    adminID: admin._id,
                    email: admin.email
                },
                process.env.JWT_SECRET || "default_secret",
            );

            const adminSession: AdminSession = {
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
        } catch (error) {
            console.error("Error during admin login:", error);
            return res.status(500).json({ message: "Error logging in admin" });
        }
    } catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ message: "Error logging in admin" });
    }
});





export default router;