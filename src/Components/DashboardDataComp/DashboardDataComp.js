import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import CommonDashboard from "../CommonDashboard/CommonDashboard";
import CreateDCM from "../CreateDCM/CreateDCM";
import SettingModal from "../SettingModal/SettingModal";

const DashboardDataComp = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const load = () => {
    navigate("/dashboard");
    window.location.reload();
  };
  return (
    <>
      <div id="layout-k" className="theme-orange">
        <CommonDashboard />

        <div className="main px-lg-4 px-1">
          <div className="body-header border-bottom d-flex py-3">
            <div className="container-fluid">
              <div className="row align-items-center">
                
                <CreateDCM />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SettingModal />
    </>
  );
};

export default DashboardDataComp;
