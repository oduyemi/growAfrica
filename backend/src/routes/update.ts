import express, { Request, Response } from "express";
import Admin, { IAdmin } from "../models/adminModel";


const router = express.Router();





router.put("/admin/:adminId", async (req: Request, res: Response) => {
    try {
        const adminId = req.params.adminId;
        const updatedAdminData: Partial<IAdmin> = req.body;

        const requiredFields = ["fname", "lname", "email", "phone", "password"];
        const missingFields = requiredFields.filter(field => !(field in updatedAdminData));

        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
        }

        const updatedAdmin= await Admin.findByIdAndUpdate(adminId, updatedAdminData, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ Message: "Admin not found" });
        }

        res.json({ data: updatedAdmin });
    } catch (error) {
        console.error("Error updating admin profile", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});

  


export default router;