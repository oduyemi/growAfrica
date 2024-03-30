import express, { Request, Response } from "express";
import Admin from "../models/adminModel.js";
import MailingList from "../models/mailingListModel.js";

const router = express.Router();


router.delete("/admin/:adminId", async (req: Request, res: Response) => {
    try {
        const adminId = req.params.menteeId;
        const deletedAdmin = await Admin.findByIdAndDelete(adminId);

        if (!deletedAdmin) {
            return res.status(404).json({ Message: "Admin not found" });
        }

        res.json({ Message: "Admin deleted successfully" });
    } catch (error) {
        console.error("Error deleting admin", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});


router.delete("/contact/:contactId", async (req: Request, res: Response) => {
    try {
        const contactId = req.params.taskId;
        const deletedContact= await MailingList.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).json({ Message: "Contact not found" });
        }

        res.json({ Message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});





export default router;