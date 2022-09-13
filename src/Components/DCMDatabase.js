import React, {useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/AuthContext";


const DCMDatabase = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get("https://mms-application.herokuapp.com/api/dcm");
      setUserData(users.data);
    }
    fetchData();
  }, []);


  const [name, setName] = useState("");


  // the search result
  const [foundUsers, setFoundUsers] = useState(userData);

  

  const filter = (e) => {
    const keyword = e.target.value;
   
    if (keyword !== "") {
      const results = userData.filter((user) => {
        const name = user.employeeName.toLowerCase();
        return name.startsWith(keyword);
      });
      setFoundUsers(results);
     
      
    } else {
      setFoundUsers(userData);
    }
setName(keyword)
  }



  const [dateRange, setDateRange] = useState({
    startDate:"",
    endDate:"",
  })
  const handleChange = (e) => {
    setDateRange((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
console.log(dateRange)


const dateFilter = async ()=>{
   try {
    const res = await axios.post("http://localhost:5000/api/search/filtered", dateRange);
    console.log(res)
    setFoundUsers(res)
      
  } catch (error) {
    console.log(error)
  }
}



  return (
    <>
      <div className="form-group">
        <div className="controls">
          <input
            type="text"
            id="search"
            onChange={filter}
             value={name}
            className="form-control"
            placeholder="Search Names Here..."
          />
          <div className="help-block with-errors"></div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: "400px" }}>
          From :{" "}
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleChange}
           
          />{" "}
          To :{" "}
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleChange}
          />
        </div>
      <br />
      <br />
      <div className="card">
      <div className="card-header">
        <h5 className="card-title text-center">Daily Customer Meet Details</h5>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-primary text-white text-center">
              <th>#</th>
              <th>Employee Name</th>
              <th>Date</th>
              <th>In Time</th>
              <th>Customer Name</th>
              <th>Needs</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Out Time</th>
            </tr>
          </thead>
          <tbody>
          {foundUsers && foundUsers.length > 0 ? foundUsers.map((e, index) => {
             return (
                <tr key={index}>
                  <td className="text-center ">{e.dcmId}</td>
                  <td className="text-center ">{e.employeeName}</td>
            
                <td className="text-center ">{e.createDate}</td>
        
                  <td className="text-center ">{e.inTime}</td>
                  <td className="text-center ">{e.customerName}</td>
                  <td className="text-center ">{e.needs}</td>
                  <td className="text-center ">{e.mobile}</td>
                  <td className="text-center ">{e.email}</td>
                  <td className="text-center ">{e.outTime}</td>
                </tr>
              );
            }) :
            userData.map((e, index) => {
              return (
                <tr key={index}>
                  <td className="text-center ">{e.dcmId}</td>
                  <td className="text-center ">{e.employeeName}</td>
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

    </>
  );
};

export default DCMDatabase;
