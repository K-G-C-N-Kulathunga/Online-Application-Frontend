import { useLocation, useHistory } from "react-router-dom";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  const history = useHistory();

  const stateNo = location.state?.applicationNo;
  const stateName = location.state?.customerName;

  const applicationNo = stateNo || sessionStorage.getItem("lastApplicationNo") || "—";
  const customerName = stateName || sessionStorage.getItem("lastCustomerName") || "Customer";

  const handleExit = () => {
    // Clear session & local storage
    sessionStorage.removeItem("lastApplicationNo");
    sessionStorage.removeItem("lastCustomerName");
    localStorage.removeItem("tempId");
    localStorage.removeItem("passingTempId");

    // Redirect to homepage or dashboard
    history.replace("/"); // or "/dashboard"
  };

  return (
    <div className="success-container">
      <h2>Application Submitted Successfully!</h2>
      <p>Dear {customerName}, your application has been successfully submitted.</p>
      <p>Your reference number is: <strong>{applicationNo}</strong></p>

      <button className="exit-btn" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default SuccessPage;
