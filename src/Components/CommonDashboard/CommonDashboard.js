import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import UserContext from "../../UserContext";

const CommonDashboard = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const load = () => {
    navigate("/dashboard");
    window.location.reload();
  };

  const [name, setName] = useState("");

  // the search result
  const userContext = useContext(UserContext);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = userContext.searchName.filter((user) => {
        return user.userFname.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      userContext.setFoundUsers(results);
    } else {
      userContext.setFoundUsers(userContext.searchName);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <>
      <div className="navigation navbar px-lg-3 px-2 py-lg-3 py-2">
        <a
          href=""
          onClick={load}
          className="brand-icon d-flex align-items-center"
        >
          <svg
            className="avatar me-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 80"
            fill="none"
          >
            <path
              className="fill-white"
              d="M58.8996 22.7L26.9996 2.2C23.4996 -0.0999999 18.9996 0 15.5996 2.5C12.1996 5 10.6996 9.2 11.7996 13.3L15.7996 26.8L3.49962 39.9C-3.30038 47.7 3.79962 54.5 3.89962 54.6L3.99962 54.7L36.3996 78.5C36.4996 78.6 36.5996 78.6 36.6996 78.7C37.8996 79.2 39.1996 79.4 40.3996 79.4C42.9996 79.4 45.4996 78.4 47.4996 76.4C50.2996 73.5 51.1996 69.4 49.6996 65.6L45.1996 51.8L58.9996 39.4C61.7996 37.5 63.3996 34.4 63.3996 31.1C63.4996 27.7 61.7996 24.5 58.8996 22.7ZM46.7996 66.7V66.8C48.0996 69.9 46.8996 72.7 45.2996 74.3C43.7996 75.9 41.0996 77.1 37.9996 76L5.89961 52.3C5.29961 51.7 1.09962 47.3 5.79962 42L16.8996 30.1L23.4996 52.1C24.3996 55.2 26.5996 57.7 29.5996 58.8C30.7996 59.2 31.9996 59.5 33.1996 59.5C35.0996 59.5 36.9996 58.9 38.6996 57.8C38.7996 57.8 38.7996 57.7 38.8996 57.7L42.7996 54.2L46.7996 66.7ZM57.2996 36.9C57.1996 36.9 57.1996 37 57.0996 37L44.0996 48.7L36.4996 25.5V25.4C35.1996 22.2 32.3996 20 28.9996 19.3C25.5996 18.7 22.1996 19.8 19.8996 22.3L18.2996 24L14.7996 12.3C13.8996 8.9 15.4996 6.2 17.3996 4.8C18.4996 4 19.8996 3.4 21.4996 3.4C22.6996 3.4 23.9996 3.7 25.2996 4.6L57.1996 25.1C59.1996 26.4 60.2996 28.6 60.2996 30.9C60.3996 33.4 59.2996 35.6 57.2996 36.9Z"
              fill="black"
            />
          </svg>
          <span className="fw-bold fs-4 mb-0">MMS</span>
        </a>

        <ul className="nav navbar-nav flex-row flex-grow-1 justify-content-end">
          <li className="nav-item flex-grow-1 d-flex align-items-center ps-lg-5 ps-3 main-search">
            <input
              style={{ color: "white" }}
              className="form-control"
              type="text"
              id="search"
              value={name}
              onChange={filter}
              placeholder="Enter your search key word"
            />
          </li>

          <li className="nav-item">
            <div className="Language position-relative">
              <a
                className="nav-link dropdown-toggle pulse py-2 px-2 px-lg-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-user"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end rounded-4 shadow border-0 p-0 mt-2 position-absolute"
                data-bs-popper="none"
              >
                <div className="card border-0">
                  <div
                    className="list-group list-group-custom"
                    style={{ width: "200px" }}
                  >
                    <a
                      href=""
                      className="list-group-item"
                      onClick={() => navigate("/employeeProfileComp")}
                    >
                      <span className=" me-2"></span>Profile
                    </a>

                    <a
                      href=""
                      className="list-group-item"
                      onClick={() => dispatch(logout(navigate("/")))}
                    >
                      <span className="me-2"></span>Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link py-2 px-2 px-lg-3"
              href="#"
              title="Settings"
              data-bs-toggle="modal"
              data-bs-target="#SettingsModal"
            >
              <i className="fa fa-gear"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link py-2 px-2 px-lg-3 d-block d-xl-none menu-toggle me-2 me-lg-0"
              href="#"
            >
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar py-2 py-md-3">
        <div className="d-flex flex-column h-100">
          <div className="user-details mb-4 px-4">
            <div className="d-flex align-items-start justify-content-center">
              <div>
                <img
                  className="avatar lg rounded-circle"
                  src="dashboardAssets/assets/images/profile_av.png"
                  alt="avatar lg"
                  title=""
                />
              </div>
              <div className="media-body text-light ms-3">
                <small>Welcome</small>
                <h6 className="mb-0">{user.details.userFname}</h6>
                <p>{user.details.role}</p>
                <ul className="social mb-0 list-inline mt-3"></ul>
              </div>
            </div>
          </div>

          <ul className="menu-list flex-grow-1 mt-1 px-4">
            <li className="divider py-2 border-top">
              <small>MAIN</small>
            </li>
            <li onClick={load}>
              <a className="m-link active" href="#layout-k">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
             
                <a
                  className="m-link"
                  href=""
                  onClick={() =>{user.details.role==='user' ? navigate("/employeeDcmDetailsComp") : navigate('/adminEmployeeDCMDatabase')} }
                >
                  <i className="fa fa-calendar"></i>{" "}
                  <span>Daily Customer Meet</span>
                </a>
             
            </li>
            {/* <li>
                <a className="m-link" href="chat.html">
                  <i className="fa fa-comments"></i> <span>Chat app</span>
                </a>
              </li> */}
          </ul>

          <button
            type="button"
            className="btn btn-link sidebar-mini-btn text-light"
          >
            <span>
              <i className="fa fa-arrow-left"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CommonDashboard;
