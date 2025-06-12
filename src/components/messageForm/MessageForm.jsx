import { COURSES, IDENTITY_OPTIONS, NATIONALITIES } from "@/lib/constant";
import React, { useState } from "react";
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    nationality: "",
    nicPassport: "",
    academicProgramme: "",
    branch: "",
    message: "",
    file: null,
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = files[0];
      if (!file) return;

      if (!file.type.includes('pdf')) {
        setStatus("Please upload a PDF file only");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setStatus("File size must be less than 5MB");
        return;
      }

      setFileName(file.name);
      setFormData((prev) => ({ ...prev, file }));
      setStatus(null);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Thank you! Your application has been submitted successfully.',
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        nationality: "",
        nicPassport: "",
        academicProgramme: "",
        branch: "",
        message: "",
        file: null,
      });
      setFileName("");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || "Failed to send the message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#100B25] text-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Get in Touch with us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           {NATIONALITIES.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
          </select>

          <input
            name="contact"
            type="text"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="nicPassport"
            value={formData.nicPassport}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
             {IDENTITY_OPTIONS.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
          </select>

          <select
            name="academicProgramme"
            value={formData.academicProgramme}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
             {COURSES.map((course) => (
             <option key={course.value} value={course.value}>
              {course.label}
            </option>
  ))}
          </select>

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="branch"
            type="text"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
            className="px-3 py-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* File Upload Section */}
        <div className="flex items-center justify-center w-full bg-transparent">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload PDF</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only (MAX. 5MB)</p>
              {fileName && <p className="text-sm text-green-500 mt-2">Selected: {fileName}</p>}
            </div>
            <input 
              id="dropzone-file" 
              name="file" 
              type="file" 
              accept=".pdf"
              onChange={handleChange} 
              className="hidden" 
              required 
            />
          </label>
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          // rows="5"
          className="p-3 rounded-md border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? 'bg-blue-400' : 'bg-blue-600'
          } transition-colors py-3 rounded-md text-white font-semibold`}
        >
          {isLoading ? 'Sending...' : 'Send Now'}
        </button>
        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
