import React from "react";
import CommonDashboard from "../CommonDashboard/CommonDashboard";
import EmployeeProfile from "../EmployeeProfile/EmployeeProfile";
import SettingModal from "../SettingModal/SettingModal";

const EmployeeProfileComp = () => {
  return (
    <>
    <div id="layout-k" className="theme-orange">
     
      <CommonDashboard/>

      <div className="main px-lg-4 px-1">
        <div className="body-header border-bottom d-flex py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <EmployeeProfile/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SettingModal />
  </>
  );
};

export default EmployeeProfileComp;
