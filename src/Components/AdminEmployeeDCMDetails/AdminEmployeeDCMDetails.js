import React from 'react'
import AdminEmployeeDCMDatabase from '../AdminEmployeeDCMDatabase/AdminEmployeeDCMDatabase'
import CommonDashboard from '../CommonDashboard/CommonDashboard'
import SettingModal from '../SettingModal/SettingModal'

const AdminEmployeeDCMDetails = () => {
  return (
    <>
    <div id="layout-k" className="theme-orange">
     
      <CommonDashboard/>

      <div className="main px-lg-4 px-1">
        <div className="body-header border-bottom d-flex py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <AdminEmployeeDCMDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SettingModal />
  </>
  )
}

export default AdminEmployeeDCMDetails