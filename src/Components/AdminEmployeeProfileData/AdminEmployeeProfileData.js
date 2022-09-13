import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

const AdminEmployeeProfileData = () => {
  const userContext = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(
        "https://mms-application.herokuapp.com/api/users/"
      );
      setUserData(users.data);
    }
    fetchData();
  }, []);

  userContext.setSearchName(userData);
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title text-center">Employee Database</h5>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-primary text-white text-center">
              <th>#</th>
              <th>Employee Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userContext.foundUsers && userContext.foundUsers.length > 0
              ? userContext.foundUsers.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center ">{e.userId}</td>
                      <td className="text-center ">{e.userFname}</td>
                      <td className="text-center ">
                        <Link to={`/user-edit/${e.userId}`}>
                          <i className="fa fa-pencil"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : userData.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center ">{e.userId}</td>
                      <td className="text-center ">{e.userFname}</td>
                      <td className="text-center ">
                        <Link to={`/user-edit/${e.userId}`}>
                          <i className="fa fa-pencil"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEmployeeProfileData;
