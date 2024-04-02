import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Typography } from "@mui/material";
import Button from "../elements/Button";
import axios from "axios";





const PopupForm = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    productInterest: "",
    shopperOrVendor: "",
    contactPreference: "",
    how: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://grow-africa-api.vercel.app/send/contact", formData);
      console.log(response.data.message); 
      onClose(); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal isOpen={open} onRequestClose={onClose} className="Modal">
      <Box className="grid items-center justify-center bg-gray-900 bg-opacity-75">
        <Box className="formbox bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
          <Box className="py-5 px-5 md:px-10">
            <Box className="text-center mb-3">
              <Typography
                variant="h4"
                className="text-2xl text-gray-900"
                sx={{
                  fontSize: "18px",
                  fontWeight: "600"
                }}
              >
                Join Our Waitlist
              </Typography>
              <Typography
                variant="h6"
                className=""
                sx={{
                  fontSize: "10px",
                }}
              >
                Please enter your name and email address.
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box width="100%" maxWidth="400px" margin="auto">
                <Box className="mb-2">
                  <label htmlFor="fullname" className="text-xs font-semibold px-1">Enter Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g Solomon Edem"
                  />
                </Box>
                <Box className="mb-2">
                  <label htmlFor="email" className="text-xs font-semibold px-1">Enter Email Address</label>
                  <input
                    name="email"
                    type="text"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g youremail@gmail.com"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </Box>
                <Box className="mb-2">
                  <label htmlFor="phone" className="text-xs font-semibold px-1">Enter Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="e.g +2347066338756"
                  />
                </Box>
                <Box className="mb-2">
                  <label htmlFor="productInterest" className="text-xs font-semibold px-1">Product Interest</label>
                  <input
                    type="text"
                    name="productInterest"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    placeholder="What is Your Interest About The Product?"
                    onChange={handleChange}
                    value={formData.productInterest}
                  />
                </Box>
                <Box className="mb-2">
                  <label htmlFor="shopperOrVendor" className="text-xs font-semibold px-1">Shopper or Vendor</label>
                  <select
                    name="shopperOrVendor"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    onChange={handleChange}
                    value={formData.shopperOrVendor}
                  >
                    <option value="">Choose an option</option>
                    <option value="shopper">Shopper</option>
                    <option value="vendor">Vendor</option>
                  </select>
                </Box>
                <Box className="mb-2">
                  <label htmlFor="contactPreference" className="text-xs font-semibold px-1">Preferred Communication Method</label>
                  <select
                    name="contactPreference"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    onChange={handleChange}
                    value={formData.contactPreference}
                  >
                    <option value="">Select Your Preferred Communication Method</option>
                    <option value="email">Email</option>
                    <option value="instagram">Instagram</option>
                    <option value="phonecall">Phone call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </Box>
                <Box className="mb-2">
                  <label htmlFor="how" className="text-xs font-semibold px-1">How Did You Hear About Us?</label>
                  <select
                    name="how"
                    className="
                      w-full px-3 py-2 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    "
                    onChange={handleChange}
                    value={formData.how}
                  >
                    <option value="">How Did You Hear About Us?</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="website">Website</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="x">X</option>
                    <option value="friend">Friend</option>
                  </select>
                </Box>
                <Box className="mb-2">
                  <Button
                    type="submit"
                    className="
                      block w-full px-3 py-3 rounded-xl
                      text-white font-semibold
                    "
                  >
                    Join Our Waitlist
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export { PopupForm };
