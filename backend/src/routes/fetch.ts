import express, { Request, Response } from "express";
import Admin, { IAdmin } from "../models/adminModel";
import MailingList, { IMailingList } from "../models/mailingListModel";

const router = express.Router();


router.get("/", (req: Request, res: Response) => {
    res.json({ message: "GrowAfrica!!" });
    });

router.get("/admin", async (req: Request, res: Response) => {
    try {
        const admins: IAdmin[] = await Admin.find();
        if (admins.length === 0) {
            res.status(404).json({ Message: "Admins not available" });
        } else {
            res.json({ data: admins });
        }
        } catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});

    
router.get("/admin/:adminId", async (req: Request, res: Response) => {
    try {
        const adminId = req.params.adminId;
        const admin: IAdmin | null = await Admin.findById(adminId);
    
        if (!admin) {
        res.status(404).json({ Message: "Admin not found" });
        } else {
        res.json({ data: admin });
        }
    } catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});
        
        


router.get("/contacts", async (req: Request, res: Response) => {
    try {
        const contacts: IMailingList[] = await MailingList.find();
        if (contacts.length === 0) {
            res.status(404).json({ Message: "Contacts not available" });
        } else {
            res.json({ data: contacts });
        }
        } catch (error) {

        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});

    
router.get("/contacts/:contactId", async (req: Request, res: Response) => {
    try {
        const contactId = req.params.contactId;
        const contact: IMailingList | null = await MailingList.findById(contactId);
    
        if (!contact) {
        res.status(404).json({ Message: "Contact not found" });
        } else {
        res.json({ data: contact });
        }
    } catch (error) {
        console.error("Error fetching data from the database", error);
        res.status(500).json({ Message: "Internal Server Error" });
    }
});




export default router;