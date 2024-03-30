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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require("dotenv").config();
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    const client = new mongodb_1.MongoClient(url);
    try {
        yield client.connect();
        const taskCategory = client.db("protaskdb").collection("TaskCategory");
        // await taskCategory.drop();
        const categories = [
            { name: "Frontend Web Application", description: "These are frontend web development projects or tasks", img: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/taskifypro/web.jpg" },
            { name: "Frontend Mobile Application", description: "These are mobile frontend projects or tasks", img: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/taskifypro/mobile.jpg" },
            { name: "Backend", description: "These are backend projects or tasks", img: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/taskifypro/backend.jpg" },
            { name: "Fullstack", description: "Build fullstack CRUD applications", img: "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/taskifypro/fullstack.jpg" }
        ];
        for (const category of categories) {
            yield taskCategory.insertOne(category);
        }
        console.log("task categories created successfully!");
    }
    catch (e) {
        console.error(e);
    }
    finally {
        yield client.close();
    }
});
seedDatabase();
