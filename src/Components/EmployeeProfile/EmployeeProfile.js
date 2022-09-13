import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";

const EmployeeProfile = () => {
 
  let showDate = new Date();
  let todayDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
  let timeNow = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds()

  const { user } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    empId: user.details.userId,
    empFname: undefined,
    empMname: undefined,
    empLname: undefined,
    email: undefined,
    mobile: undefined,
    pan: undefined,
    createDate:todayDate+","+timeNow
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://mms-application.herokuapp.com/api/employee/${user.details._id}/${user.details.userId}`,
        credentials
      );
      navigate("/dashboard");
     
      window.location.reload()
    } catch (err) {
      setError(err.response.data);
    }
  };


  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(
        `https://mms-application.herokuapp.com/api/employee/${user.details.empId}`
      );
      setUserData(users.data);
    }
    fetchData();
  }, []);

  return (
    <div class="content">
      <div class="card">
        <div class="card-body">
          <form class="form-validate-jquery" action="#">
            <fieldset class="mb-3">
              <legend class="text-uppercase font-size-sm font-weight-bold border-bottom text-center">
                Employee Profile
              </legend>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  First Name <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    name="empFname"
                    id="empFname"
                    class="form-control"
                    onChange={handleChange}
                    required
                    value={user.details.userFname.toLowerCase().toUpperCase()}
                    disabled={user.details.role==='user'}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Middle Name <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    name="empMname"
                    id="empMname"
                    onChange={handleChange}
                    required
                    class="form-control touchspin-postfix"
                    placeholder="Middle Name"
                    value={userData.empMname}
                    disabled={userData.empMname ? true : false}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Last Name <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    id="empLname"
                    name="empLname"
                    class="form-control"
                    onChange={handleChange}
                    required
                    value={user.details.userLname.toLowerCase().toUpperCase()}
                    disabled={user.details.role==='user'}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Mobile No <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    class="form-control"
                    onChange={handleChange}
                    required
                    value={user.details.mobile}
                    disabled={user.details.role==='user'}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Email <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    onChange={handleChange}
                    required
                    value={user.details.email}
                    disabled={user.details.role==='user'}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  PAN No <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    id="pan"
                    name="pan"
                    onChange={handleChange}
                    class="form-control"
                    required
                    value={userData.pan}
                    placeholder="Enter PAN Number"
                    disabled={userData.pan ? true : false}
                  />
                </div>
              </div>

              {/* <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Customer Need <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    id="needs"
                    name="needs"
                    class="form-control"
                    onChange={handleChange}
                    required
                    placeholder="Enter Customer Needs"
                  />
                </div>
              </div> */}

              {/* <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Expected Date <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="date"
                    id="expectedDate"
                    name="expectedDate"
                    class="form-control"
                    onChange={handleChange}
                    required
                    placeholder='Enter Expexted Date'
                  />
                </div>
              </div> */}

              {/* <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Remarks <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    id="remarks"
                    name="remarks"
                    class="form-control"
                    onChange={handleChange}
                    required
                    placeholder="Enter Remarks"
                  />
                </div>
              </div> */}

              {/* <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Out-Time <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="text"
                    id="outTime"
                    name="outTime"
                    class="form-control"
                    min="09:00" max="18:00"
                    onChange={handleChange}
                    required
                    placeholder="Enter Out-Time"
                  />
                </div>
              </div> */}
            </fieldset>

            <div class="d-flex justify-content-end align-items-center">
              <button type="reset" class="btn btn-lg btn-light" id="reset">
                Reset <i class="icon-reload-alt ml-2"></i>
              </button>
              <button
                type="submit"
                class="btn btn-lg btn-primary ml-3"
                onClick={handleClick}
              >
                Submit <i class="icon-paperplane ml-2"></i>
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
