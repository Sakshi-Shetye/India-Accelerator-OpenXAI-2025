"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaIdCard, FaRobot, FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";

export default function BusinessCardScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState({
    name: "—",
    phone: "—",
    email: "—",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));

      // TODO: Hook OCR + AI (like Tesseract + Ollama)
      setTimeout(() => {
        setExtractedData({
          name: "John Doe",
          phone: "+91 9876543210",
          email: "john.doe@email.com",
        });
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 via-blue-200 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">
        <h1 className="text-2xl font-bold text-blue-600">CardSnap</h1>
        <p className="text-sm italic text-gray-600 md:text-base">
          Scan. Extract. Save Contacts Instantly.
        </p>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 py-12 text-center md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl"
        >
          Business Card Scanner 📇
        </motion.h2>
        <p className="max-w-2xl text-base text-gray-600 md:text-lg">
          Tired of typing business cards manually? Upload a card and let AI do the rest.
        </p>
      </section>

      {/* Upload Section */}
      <section className="flex justify-center px-4 md:px-12">
        <div className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl md:p-8">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload-card"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="upload-card"
            className="flex items-center justify-center w-full transition border-2 border-gray-400 border-dashed cursor-pointer h-44 md:h-56 rounded-xl hover:bg-gray-50"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Business Card Preview"
                className="object-contain rounded-lg shadow-md max-h-44 md:max-h-56"
              />
            ) : (
              <span className="flex flex-col items-center gap-2 text-sm text-gray-500 md:text-base">
                <FaCloudUploadAlt size={36} className="text-blue-500" />
                Drag & Drop or Click to Upload
              </span>
            )}
          </label>

          {/* Extracted Info */}
          <div className="w-full mt-6 text-left">
            <h2 className="mb-3 text-lg font-semibold">Extracted Details</h2>
            <div className="p-4 space-y-2 text-sm bg-gray-100 rounded-xl md:text-base">
              <p>
                <strong>Name:</strong> {extractedData.name}
              </p>
              <p>
                <strong>Phone:</strong> {extractedData.phone}
              </p>
              <p>
                <strong>Email:</strong> {extractedData.email}
              </p>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full py-3 mt-6 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600 md:text-base">
            Save as Contact
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-6 px-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-4 md:px-12">
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <FaIdCard className="mb-3 text-4xl text-blue-500" />
          <h3 className="font-semibold text-gray-700">Upload Any Card</h3>
          <p className="mt-1 text-sm text-gray-500">Supports images from camera or gallery.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <FaRobot className="mb-3 text-4xl text-green-500" />
          <h3 className="font-semibold text-gray-700">AI Extraction</h3>
          <p className="mt-1 text-sm text-gray-500">Smartly detects name, phone & email.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <FaAddressBook className="mb-3 text-4xl text-purple-500" />
          <h3 className="font-semibold text-gray-700">Save Contacts</h3>
          <p className="mt-1 text-sm text-gray-500">Quickly add info into your address book.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
          <FaCloudUploadAlt className="mb-3 text-4xl text-orange-500" />
          <h3 className="font-semibold text-gray-700">Export Options</h3>
          <p className="mt-1 text-sm text-gray-500">Export to CSV or sync with Google Contacts.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 mt-auto text-sm text-center text-gray-300 bg-gray-800 md:text-base">
        <p>© {new Date().getFullYear()} CardSnap. All rights reserved.</p>
      </footer>
    </div>
  );
}
