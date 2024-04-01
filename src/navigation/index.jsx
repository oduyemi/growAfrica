import React from "react";
import { UserProvider } from "../UserContext";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home/index"
import AdminSignup from "../pages/AdminSignup";
import AdminSignin from "../pages/AdminSignin";
import AdminDashboard from "../pages/AdminDashboard";
import EmailList from "../pages/EmailList";
import PhoneNmberList from "../pages/PhoneNumberList";
import Shoppers from "../pages/Shoppers";
import Vendors from "../pages/Vendors";
import Mail from "../pages/Mail";
import Call from "../pages/Call";
import WhatsApp from "../pages/WhatsApp";
import EditAdminProfile from "../pages/EditAdminProfile";
import Insta from "../pages/Insta";
import PasswordReset from "../pages/PasswordReset";





export const Navigation = () => {
    return (
        <UserProvider>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin/signup" element={<AdminSignup />} />
                    <Route path="/admin/signin" element={<AdminSignin />} />
                    <Route path="/admin/reset-password" element={<PasswordReset />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/update" element={<EditAdminProfile />} />
                    <Route path="/admin/email-purse" element={<EmailList />} />
                    <Route path="/admin/phone-bank" element={<PhoneNmberList />} />
                    <Route path="/admin/shoppers" element={<Shoppers />} />
                    <Route path="/admin/vendors" element={<Vendors />} />
                    <Route path="/admin/preference-email" element={<Mail />} />
                    <Route path="/admin/preference-instagram" element={<Insta />} />
                    <Route path="/admin/preference-phone-call" element={<Call />} />
                    <Route path="/admin/preference-whatsapp" element={<WhatsApp />} />
                </Routes>
        </UserProvider>

    );
};