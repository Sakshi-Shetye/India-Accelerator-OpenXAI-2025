// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaIdCard, FaRobot, FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";

// export default function BusinessCardScanner() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [extractedData, setExtractedData] = useState({
//     name: "—",
//     phone: "—",
//     email: "—",
//   });

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));

//       // TODO: Hook OCR + AI (like Tesseract + Ollama)
//       setTimeout(() => {
//         setExtractedData({
//           name: "John Doe",
//           phone: "+91 9876543210",
//           email: "john.doe@email.com",
//         });
//       }, 2000);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 via-blue-200 to-white">
//       {/* Header */}
//       <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">
//         <h1 className="text-2xl font-bold text-blue-600">CardSnap</h1>
//         <p className="text-sm italic text-gray-600 md:text-base">
//           Scan. Extract. Save Contacts Instantly.
//         </p>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center px-4 py-12 text-center md:px-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl"
//         >
//           Business Card Scanner 📇
//         </motion.h2>
//         <p className="max-w-2xl text-base text-gray-600 md:text-lg">
//           Tired of typing business cards manually? Upload a card and let AI do the rest.
//         </p>
//       </section>

//       {/* Upload Section */}
//       <section className="flex justify-center px-4 md:px-12">
//         <div className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl md:p-8">
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             id="upload-card"
//             onChange={handleImageUpload}
//           />
//           <label
//             htmlFor="upload-card"
//             className="flex items-center justify-center w-full transition border-2 border-gray-400 border-dashed cursor-pointer h-44 md:h-56 rounded-xl hover:bg-gray-50"
//           >
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Business Card Preview"
//                 className="object-contain rounded-lg shadow-md max-h-44 md:max-h-56"
//               />
//             ) : (
//               <span className="flex flex-col items-center gap-2 text-sm text-gray-500 md:text-base">
//                 <FaCloudUploadAlt size={36} className="text-blue-500" />
//                 Drag & Drop or Click to Upload
//               </span>
//             )}
//           </label>

//           {/* Extracted Info */}
//           <div className="w-full mt-6 text-left">
//             <h2 className="mb-3 text-lg font-semibold">Extracted Details</h2>
//             <div className="p-4 space-y-2 text-sm bg-gray-100 rounded-xl md:text-base">
//               <p>
//                 <strong>Name:</strong> {extractedData.name}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {extractedData.phone}
//               </p>
//               <p>
//                 <strong>Email:</strong> {extractedData.email}
//               </p>
//             </div>
//           </div>

//           {/* Save Button */}
//           <button className="w-full py-3 mt-6 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600 md:text-base">
//             Save as Contact
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="grid grid-cols-1 gap-6 px-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-4 md:px-12">
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaIdCard className="mb-3 text-4xl text-blue-500" />
//           <h3 className="font-semibold text-gray-700">Upload Any Card</h3>
//           <p className="mt-1 text-sm text-gray-500">Supports images from camera or gallery.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaRobot className="mb-3 text-4xl text-green-500" />
//           <h3 className="font-semibold text-gray-700">AI Extraction</h3>
//           <p className="mt-1 text-sm text-gray-500">Smartly detects name, phone & email.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaAddressBook className="mb-3 text-4xl text-purple-500" />
//           <h3 className="font-semibold text-gray-700">Save Contacts</h3>
//           <p className="mt-1 text-sm text-gray-500">Quickly add info into your address book.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaCloudUploadAlt className="mb-3 text-4xl text-orange-500" />
//           <h3 className="font-semibold text-gray-700">Export Options</h3>
//           <p className="mt-1 text-sm text-gray-500">Export to CSV or sync with Google Contacts.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 mt-auto text-sm text-center text-gray-300 bg-gray-800 md:text-base">
//         <p>© {new Date().getFullYear()} CardSnap. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaIdCard, FaRobot, FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";

// interface ExtractedData {
//   name: string;
//   phone: string;
//   email: string;
//   company: string;
//   designation: string;
// }

// export default function BusinessCardScanner() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [extractedData, setExtractedData] = useState<ExtractedData>({
//     name: "—",
//     phone: "—",
//     email: "—",
//     company: "—",
//     designation: "—",
//   });

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setLoading(true);

//       // TODO: Hook OCR + AI (e.g., Tesseract + Ollama)
//       setTimeout(() => {
//         setExtractedData({
//           name: "John Doe",
//           phone: "+91 9876543210",
//           email: "john.doe@email.com",
//           company: "ACME Corp",
//           designation: "Software Engineer",
//         });
//         setLoading(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 via-blue-200 to-white">
//       {/* Header */}
//       <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">
//         <h1 className="text-2xl font-bold text-blue-600">CardSnap</h1>
//         <p className="text-sm italic text-gray-600 md:text-base">
//           Scan. Extract. Save Contacts Instantly.
//         </p>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center px-4 py-12 text-center md:px-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl"
//         >
//           Business Card Scanner 📇
//         </motion.h2>
//         <p className="max-w-2xl text-base text-gray-600 md:text-lg">
//           Tired of typing business cards manually? Upload a card and let AI do the rest.
//         </p>
//       </section>

//       {/* Upload Section */}
//       <section className="flex justify-center px-4 md:px-12">
//         <div className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl md:p-8">
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             id="upload-card"
//             onChange={handleImageUpload}
//           />
//           <label
//             htmlFor="upload-card"
//             className="flex items-center justify-center w-full transition border-2 border-gray-400 border-dashed cursor-pointer h-44 md:h-56 rounded-xl hover:bg-gray-50"
//           >
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Business Card Preview"
//                 className="object-contain rounded-lg shadow-md max-h-44 md:max-h-56"
//               />
//             ) : (
//               <span className="flex flex-col items-center gap-2 text-sm text-gray-500 md:text-base">
//                 <FaCloudUploadAlt size={36} className="text-blue-500" />
//                 Drag & Drop or Click to Upload
//               </span>
//             )}
//           </label>

//           {/* Extracted Info */}
//           <div className="w-full mt-6 text-left">
//             <h2 className="mb-3 text-lg font-semibold">Extracted Details</h2>
//             <div className="p-4 space-y-2 text-sm bg-gray-100 rounded-xl md:text-base">
//               {loading ? (
//                 <p className="font-medium text-blue-600">Analyzing card...</p>
//               ) : (
//                 <>
//                   <p>
//                     <strong>Name:</strong> {extractedData.name}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {extractedData.phone}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {extractedData.email}
//                   </p>
//                   <p>
//                     <strong>Company:</strong> {extractedData.company}
//                   </p>
//                   <p>
//                     <strong>Designation:</strong> {extractedData.designation}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Save Button */}
//           <button
//             disabled={loading}
//             className={`w-full py-3 mt-6 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600 md:text-base ${
//               loading ? "opacity-60 cursor-not-allowed" : ""
//             }`}
//           >
//             Save as Contact
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="grid grid-cols-1 gap-6 px-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-4 md:px-12">
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaIdCard className="mb-3 text-4xl text-blue-500" />
//           <h3 className="font-semibold text-gray-700">Upload Any Card</h3>
//           <p className="mt-1 text-sm text-gray-500">Supports images from camera or gallery.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaRobot className="mb-3 text-4xl text-green-500" />
//           <h3 className="font-semibold text-gray-700">AI Extraction</h3>
//           <p className="mt-1 text-sm text-gray-500">Smartly detects name, phone, email, company & designation.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaAddressBook className="mb-3 text-4xl text-purple-500" />
//           <h3 className="font-semibold text-gray-700">Save Contacts</h3>
//           <p className="mt-1 text-sm text-gray-500">Quickly add info into your address book.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaCloudUploadAlt className="mb-3 text-4xl text-orange-500" />
//           <h3 className="font-semibold text-gray-700">Export Options</h3>
//           <p className="mt-1 text-sm text-gray-500">Export to CSV or sync with Google Contacts.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 mt-auto text-sm text-center text-gray-300 bg-gray-800 md:text-base">
//         <p>© {new Date().getFullYear()} CardSnap. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaIdCard, FaRobot, FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";
// import { footer } from "framer-motion/client";

// interface ExtractedData {
//   name: string;
//   phone: string;
//   email: string;
//   company: string;
//   designation: string;
// }

// export default function BusinessCardScanner() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [extractedData, setExtractedData] = useState<ExtractedData>({
//     name: "—",
//     phone: "—",
//     email: "—",
//     company: "—",
//     designation: "—",
//   });
//   const [savedContacts, setSavedContacts] = useState<ExtractedData[]>([]);

//   // Upload + mock extraction
//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setLoading(true);

//       // TODO: Replace with OCR + AI pipeline
//       setTimeout(() => {
//         setExtractedData({
//           name: "John Doe",
//           phone: "+91 9876543210",
//           email: "john.doe@email.com",
//           company: "ACME Corp",
//           designation: "Software Engineer",
//         });
//         setLoading(false);
//       }, 2000);
//     }
//   };

//   // Save contact
//   const handleSaveContact = () => {
//     if (extractedData.name !== "—") {
//       setSavedContacts((prev) => [...prev, extractedData]);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 via-blue-200 to-white">
//       {/* Header */}
//       <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">
//         <h1 className="text-2xl font-bold text-blue-600">CardSnap</h1>
//         <p className="text-sm italic text-gray-600 md:text-base">
//           Scan. Extract. Save Contacts Instantly.
//         </p>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center px-4 py-12 text-center md:px-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl"
//         >
//           Business Card Scanner 📇
//         </motion.h2>
//         <p className="max-w-2xl text-base text-gray-600 md:text-lg">
//           Tired of typing business cards manually? Upload a card and let AI do the rest.
//         </p>
//       </section>

//       {/* Upload Section */}
//       <section className="flex justify-center px-4 md:px-12">
//         <div className="w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl md:p-8">
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             id="upload-card"
//             onChange={handleImageUpload}
//           />
//           <label
//             htmlFor="upload-card"
//             className="flex items-center justify-center w-full transition border-2 border-gray-400 border-dashed cursor-pointer h-44 md:h-56 rounded-xl hover:bg-gray-50"
//           >
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="Business Card Preview"
//                 className="object-contain rounded-lg shadow-md max-h-44 md:max-h-56"
//               />
//             ) : (
//               <span className="flex flex-col items-center gap-2 text-sm text-gray-500 md:text-base">
//                 <FaCloudUploadAlt size={36} className="text-blue-500" />
//                 Drag & Drop or Click to Upload
//               </span>
//             )}
//           </label>

//           {/* Extracted Info */}
//           <div className="w-full mt-6 text-left">
//             <h2 className="mb-3 text-lg font-semibold">Extracted Details</h2>
//             <div className="p-4 space-y-2 text-sm bg-gray-100 rounded-xl md:text-base">
//               {loading ? (
//                 <p className="font-medium text-blue-600">Analyzing card...</p>
//               ) : (
//                 <>
//                   <p><strong>Name:</strong> {extractedData.name}</p>
//                   <p><strong>Phone:</strong> {extractedData.phone}</p>
//                   <p><strong>Email:</strong> {extractedData.email}</p>
//                   <p><strong>Company:</strong> {extractedData.company}</p>
//                   <p><strong>Designation:</strong> {extractedData.designation}</p>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Save Button */}
//           <button
//             onClick={handleSaveContact}
//             disabled={loading}
//             className={`w-full py-3 mt-6 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600 md:text-base ${
//               loading ? "opacity-60 cursor-not-allowed" : ""
//             }`}
//           >
//             Save as Contact
//           </button>

//           {/* Saved Contacts */}
//           {savedContacts.length > 0 && (
//             <div className="mt-8">
//               <h2 className="mb-3 text-lg font-semibold">Saved Contacts</h2>
//               <ul className="space-y-3">
//                 {savedContacts.map((contact, index) => (
//                   <li
//                     key={index}
//                     className="p-3 text-sm border shadow-sm bg-gray-50 rounded-xl md:text-base"
//                   >
//                     <p><strong>{contact.name}</strong></p>
//                     <p>{contact.phone}</p>
//                     <p>{contact.email}</p>
//                     <p>{contact.company} – {contact.designation}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="grid grid-cols-1 gap-6 px-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-4 md:px-12">
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaIdCard className="mb-3 text-4xl text-blue-500" />
//           <h3 className="font-semibold text-gray-700">Upload Any Card</h3>
//           <p className="mt-1 text-sm text-gray-500">Supports images from camera or gallery.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaRobot className="mb-3 text-4xl text-green-500" />
//           <h3 className="font-semibold text-gray-700">AI Extraction</h3>
//           <p className="mt-1 text-sm text-gray-500">Smartly detects name, phone, email, company & designation.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaAddressBook className="mb-3 text-4xl text-purple-500" />
//           <h3 className="font-semibold text-gray-700">Save Contacts</h3>
//           <p className="mt-1 text-sm text-gray-500">Quickly add info into your address book.</p>
//         </div>
//         <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl">
//           <FaCloudUploadAlt className="mb-3 text-4xl text-orange-500" />
//           <h3 className="font-semibold text-gray-700">Export Options</h3>
//           <p className="mt-1 text-sm text-gray-500">Export to CSV or sync with Google Contacts.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 mt-auto text-sm text-center text-gray-300 bg-gray-800 md:text-base">
//         <p>© {new Date().getFullYear()} CardSnap. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaIdCard, FaRobot, FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";

interface ExtractedData {
  name: string;
  phone: string;
  email: string;
  company: string;
  designation: string;
}

export default function BusinessCardScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData>({
    name: "—",
    phone: "—",
    email: "—",
    company: "—",
    designation: "—",
  });
  const [savedContacts, setSavedContacts] = useState<ExtractedData[]>([]);
  const [dummyIndex, setDummyIndex] = useState(0);

  // Dummy dataset
  const dummyContacts: ExtractedData[] = [
    {
      name: "John Doe",
      phone: "+91 9876543210",
      email: "john.doe@email.com",
      company: "ACME Corp",
      designation: "Software Engineer",
    },
    {
      name: "Priya Sharma",
      phone: "+91 9876501234",
      email: "priya.sharma@email.com",
      company: "TechNova Ltd",
      designation: "Product Manager",
    },
    {
      name: "Aarav Mehta",
      phone: "+91 9988776655",
      email: "aarav.mehta@email.com",
      company: "FinEdge",
      designation: "Data Scientist",
    },
    {
      name: "Emily Johnson",
      phone: "+1 456 789 1234",
      email: "emily.j@email.com",
      company: "Global Solutions",
      designation: "Marketing Lead",
    },
  ];

  // Upload + mock extraction
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setLoading(true);

      // simulate OCR delay
      setTimeout(() => {
        const nextContact = dummyContacts[dummyIndex];
        setExtractedData(nextContact);
        setDummyIndex((prev) => (prev + 1) % dummyContacts.length); // cycle
        setLoading(false);
      }, 2000);
    }
  };

  // Save contact
  const handleSaveContact = () => {
    if (extractedData.name !== "—") {
      setSavedContacts((prev) => [...prev, extractedData]);
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
              {loading ? (
                <p className="font-medium text-blue-600">Analyzing card...</p>
              ) : (
                <>
                  <p><strong>Name:</strong> {extractedData.name}</p>
                  <p><strong>Phone:</strong> {extractedData.phone}</p>
                  <p><strong>Email:</strong> {extractedData.email}</p>
                  <p><strong>Company:</strong> {extractedData.company}</p>
                  <p><strong>Designation:</strong> {extractedData.designation}</p>
                </>
              )}
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveContact}
            disabled={loading}
            className={`w-full py-3 mt-6 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600 md:text-base ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            Save as Contact
          </button>

          {/* Saved Contacts */}
          {savedContacts.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-semibold">Saved Contacts</h2>
              <ul className="space-y-3">
                {savedContacts.map((contact, index) => (
                  <li
                    key={index}
                    className="p-3 text-sm border shadow-sm bg-gray-50 rounded-xl md:text-base"
                  >
                    <p><strong>{contact.name}</strong></p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{contact.company} – {contact.designation}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          <p className="mt-1 text-sm text-gray-500">Smartly detects name, phone, email, company & designation.</p>
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
