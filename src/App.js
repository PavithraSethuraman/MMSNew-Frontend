import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import Register from './Components/Register/Register'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import DashboardDataComp from "./Components/DashboardDataComp/DashboardDataComp";
import EmployeeProfileComp from "./Components/EmployeeProfileComp/EmployeeProfileComp";
import EmployeeDCMDetailsComp from "./Components/EmployeeDCMDetailsComp/EmployeeDCMDetailsComp";
import { UserProvider } from "./UserContext";
import AdminEmployeeProfileDetails from "./Components/AdminEmployeeDCMDetails/AdminEmployeeDCMDetails";
import AdminEmployeeDCMDetails from "./Components/AdminEmployeeDCMDetails/AdminEmployeeDCMDetails";
import AdminDCMEdit from "./Components/AdminDCMEdit/AdminDCMEdit";
import EmployeeProfileEditComp from "./Components/EmployeeProfileEditComp/EmployeeProfileEditComp"

function App() {
  const { user } = useContext(AuthContext);
  const [searchName, setSearchName] = useState()
  const [foundUsers, setFoundUsers] = useState();
  const [startFilterDate, setStartFilterDate] = useState();
  const [endFilterDate, setEndFilterDate] = useState();
  return (
    <Router>
      <UserProvider value={{searchName,setSearchName,foundUsers, setFoundUsers,startFilterDate,setStartFilterDate,endFilterDate,setEndFilterDate}}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route exact path="/" element={<Home />} />

        {user && (
          <>
            {/* <Route path="/userdetails" element={<UserDetails />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route path="/dcm" element={<DCM />} /> */}

            <Route path="/dashboardDataComp" element={<DashboardDataComp />} />  

            <Route path="/employeeProfileComp" element={<EmployeeProfileComp />} />  

            <Route path="/employeeDcmDetailsComp" element={<EmployeeDCMDetailsComp />} />  

            <Route path="/adminEmployeeDatabase" element={<AdminEmployeeProfileDetails />} />  

            <Route path="/adminEmployeeDCMDatabase" element={<AdminEmployeeDCMDetails />} />  

            <Route path="/user-edit/:id" element={<EmployeeProfileEditComp />} />
          
            <Route path="/dcm-edit/:id" element={<AdminDCMEdit />} />
            
          </>
        )}
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
