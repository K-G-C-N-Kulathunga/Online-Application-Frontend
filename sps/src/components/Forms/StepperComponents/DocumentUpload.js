import React, { useState } from 'react';

const DocumentUpload = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({
    idCopy: "",
    ownershipCertificate: "",
    gramaNiladhariCertificate: "",
    threephChartedEngineerCertificate: ""
  });

  const validateFileSize = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file && file.size > 50 * 1024 * 1024) { 
      setErrors(prev => ({
        ...prev,
        [name]: "File size must be 50 mb or less"
      }));
      e.target.value = ""; // Clear the file input
      return;
    }
    
    // Clear error for this field
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
    
    // Call the parent's handleChange
    handleChange(e);
  };

  return (
    <div className="form-box">
      {/* ID Copy */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label required w-1/2">ID Copy</label>
        <div className="w-1/2">
          <input
            type="file"
            name="idCopy"
            accept=".pdf,.jpg"
            onChange={validateFileSize}
            className="w-full"
          />
          {errors.idCopy && (
            <div className="text-red-500 text-sm mt-1">
              {errors.idCopy}
            </div>
          )}
        </div>
      </div>

      {/* Ownership Certificate */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label required w-1/2">Ownership Certificate</label>
        <div className="w-1/2">
          <input
            type="file"
            name="ownershipCertificate"
            accept=".pdf,.jpg"
            onChange={validateFileSize}
            className="w-full"
          />
          {errors.ownershipCertificate && (
            <div className="text-red-500 text-sm mt-1">
              {errors.ownershipCertificate}
            </div>
          )}
        </div>
      </div>

      {/* Grama Niladhari Certificate */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label required w-1/2">Grama Niladhari Certificate</label>
        <div className="w-1/2">
          <input
            type="file"
            name="gramaNiladhariCertificate"
            accept=".pdf,.jpg"
            onChange={validateFileSize}
            className="w-full"
          />
          {errors.gramaNiladhariCertificate && (
            <div className="text-red-500 text-sm mt-1">
              {errors.gramaNiladhariCertificate}
            </div>
          )}
        </div>
      </div>

      {/* Charted Engineer Certificate */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label w-1/2">Charted Engineer Certificate</label>
        <div className="w-1/2">
          <input
            type="file"
            name="threephChartedEngineerCertificate"
            accept=".pdf,.jpg"
            onChange={validateFileSize}
            className="w-full"
          />
          {errors.threephChartedEngineerCertificate && (
            <div className="text-red-500 text-sm mt-1">
              {errors.threephChartedEngineerCertificate}
            </div>
          )}
        </div>
      </div>

      {/* File size note - compact */}
      {Object.values(errors).some(error => error) && (
        <div className="text-xs text-gray-500 mt-2">
          Max file size: 50 mb per file
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;