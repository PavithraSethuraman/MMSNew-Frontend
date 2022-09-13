import React from 'react'
import CommonDashboard from '../CommonDashboard/CommonDashboard'
import EmployeeProfileEdit from '../EmployeeProfileEdit/EmployeeProfileEdit'
import SettingModal from '../SettingModal/SettingModal'

const EmployeeProfileEditComp = () => {
  return (
    <>
    <div id="layout-k" className="theme-orange">
     
      <CommonDashboard/>

      <div className="main px-lg-4 px-1">
        <div className="body-header border-bottom d-flex py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <EmployeeProfileEdit/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SettingModal />
  </>
  )
}

export default EmployeeProfileEditComp