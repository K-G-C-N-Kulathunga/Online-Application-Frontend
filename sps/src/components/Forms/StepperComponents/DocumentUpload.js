import React, { useState } from "react";

const MAX_FILE_SIZE_MB = 50;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const MAX_NOTES_LENGTH = 300;

const DocumentUpload = ({ formData, handleChange,agreed, setAgreed }) => {
  const [errors, setErrors] = useState({});
  const [showAgreement, setShowAgreement] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files?.[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrors((prev) => ({
        ...prev,
        [name]: `File size must not exceed ${MAX_FILE_SIZE_MB} mb`,
      }));
      e.target.value = "";
      return;
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
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
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {errors.idCopy && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.idCopy}</div>
          )}
        </div>
      </div>

      {/* Ownership Certificate */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label required w-1/2">
          Ownership Certificate
        </label>
        <div className="w-1/2">
          <input
            type="file"
            name="ownershipCertificate"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {errors.ownershipCertificate && (
            <div style={{ color: "red", fontSize: 12 }}>
              {errors.ownershipCertificate}
            </div>
          )}
        </div>
      </div>

      {/* Grama Niladhari Certificate */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <label className="form-label required w-1/2">
          Grama Niladhari Certificate
        </label>
        <div className="w-1/2">
          <input
            type="file"
            name="gramaNiladhariCertificate"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {errors.gramaNiladhariCertificate && (
            <div style={{ color: "red", fontSize: 12 }}>
              {errors.gramaNiladhariCertificate}
            </div>
          )}
        </div>
      </div>

      {/* Chartered Engineer Certificate */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <label className="form-label w-1/2">
          Chartered Engineer Certificate
        </label>
        <div className="w-1/2">
          <input
            type="file"
            name="threephChartedEngineerCertificate"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {errors.threephChartedEngineerCertificate && (
            <div style={{ color: "red", fontSize: 12 }}>
              {errors.threephChartedEngineerCertificate}
            </div>
          )}
        </div>
      </div>

      {/* Special Notes */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <label className="form-label w-1/2">Any Special Notes</label>

        <div className="w-1/2">
          <textarea
            name="specialNotes"
            rows={4}
            maxLength={MAX_NOTES_LENGTH}
            value={formData.specialNotes || ""}
            onChange={handleChange}
            placeholder="Enter any additional notes (optional)"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: 4,
              fontSize: 14,
              resize: "vertical",
            }}
          />

          <div
            style={{
              fontSize: 12,
              textAlign: "right",
              marginTop: 4,
              color:
                (formData.specialNotes?.length || 0) >= MAX_NOTES_LENGTH
                  ? "red"
                  : "#555",
            }}
          >
            {(formData.specialNotes?.length || 0)} / {MAX_NOTES_LENGTH}
          </div>
        </div>
      </div> 
      {/* ================= AGREEMENT SECTION ================= */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: 16,
          marginTop: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            id="agreement"
            style={{ marginTop: 4 }}
          />

          <label htmlFor="agreement" style={{ fontSize: 14 }}>
            I confirm that the information provided is accurate to the best of my
            knowledge.
            <button
              type="button"
              onClick={() => setShowAgreement(!showAgreement)}
              style={{
                marginLeft: 6,
                color: "#2563eb",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: 14,
              }}
            >
              {showAgreement ? "Show less" : "Read more"}
            </button>
          </label>
        </div>

        {showAgreement && (
          <div
            style={{
              marginTop: 8,
              fontSize: 13,
              lineHeight: "1.6",
              color: "#333",
              paddingLeft: 26,
            }}
          >
            I understand that if any inaccurate or incomplete information is
            submitted, this application may be rejected, resulting in delays to
            processing. I am aware that upon discovery of any forged
            documentation (or any copies of them) presented by me to the Lanka
            Electricity Company (Private) Limited with respect to this
            application, relating to ownership or occupancy of the premises or
            identity of the applicant, this application will be rejected or, if
            discovered after obtaining the electricity connection, the
            connection is liable to be disconnected.
          </div>
        )}

        {!agreed && (
          <div style={{ color: "red", fontSize: 12, marginTop: 6 }}>
            You must agree before submitting the application.
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;