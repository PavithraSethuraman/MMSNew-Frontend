import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import './style.css'

const EmployeeDCMDetails = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(
        `https://mms-application.herokuapp.com/api/dcm/dcmUser/${user.details.userId}`
      );
      setUserData(users.data);
    }
    fetchData();
  }, []);

  
  return (
    
    <div className="card">
      <div className="card-header">
        <h5 className="card-title text-center">Daily Customer Meet Details</h5>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-primary text-white text-center">
              <th>#</th>
              <th>Date</th>
              <th>In Time</th>
              <th>Customer Name</th>
              <th className="customCss">Customer Needs</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Out Time</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, index) => {
              return (
                <tr key={index}>
                  <td className="text-center ">{index+1}</td>
                  <td className="text-center ">{e.createDate}</td>
                  <td className="text-center ">{e.inTime}</td>
                  <td className="text-center ">{e.customerName}</td>
                  <td className="text-center ">{e.needs}</td>
                  <td className="text-center ">{e.mobile}</td>
                  <td className="text-center ">{e.email}</td>
                  <td className="text-center ">{e.outTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDCMDetails;
