// components/ContactCard.jsx
import React from 'react';

// Define the types for the props if you are using TypeScript
// interface ContactCardProps {
//   title: string;
//   titleHighlight: string;
//   addressLabel: string;
//   addressContent: React.ReactNode; // Can be string or multiple <p> tags
//   emailLabel: string;
//   emailContent: string;
//   callLabel: string;
//   callContent: string;
// }

const ContactCard = ({
  title,
  titleHighlight,
  addressLabel,
  addressContent,
  emailLabel,
  emailContent,
  callLabel,
  callContent,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col justify-between w-full sm:w-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {title} <span className="text-[#02AEC9]">{titleHighlight}</span>
      </h2>

      <div className="mb-6">
        <p className="text-gray-600 font-bold mb-1">{addressLabel}</p>
        <div className="text-gray-700 text-bold">{addressContent}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Section */}
        <div>
          <p className="text-gray-600 font-semibold mb-1">{emailLabel}</p>
          <a href={`mailto:${emailContent}`} className="text-lg font-bold  hover:underline">
            {emailContent}
          </a>
        </div>

        {/* Call Section */}
        <div>
          <p className="text-gray-600 font-semibold mb-1">{callLabel}</p>
          <a href={`tel:${callContent.replace(/\s/g, '')}`} className="text-lg font-bold  hover:underline">
            {callContent}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;