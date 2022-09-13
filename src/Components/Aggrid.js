import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import './style.css'

const dateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("-");
    var cellDate = new Date(
      Number(dateParts[0]),
      Number(dateParts[1]) - 1,
      Number(dateParts[2])
    );
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }

    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
  },
  browserDatePicker: true,
};

const Aggrid = () => {

    
  const { user } = useContext(AuthContext);
  const [gridApi, setGridApi] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

    setName(keyword);
  };

//   const columns = [
//     { headerName: "Dcm Id", field: "dcmId" },
//     { headerName: "Employee Name", field: "employeeName" },
//     { headerName: "Create Date", field: "createDate" },
//     {
//       headerName: "Create Time",
//       field: "createTime",
//       filter: "agDateColumnFilter",
//       filterParams: dateFilterParams,
//     },
//     { headerName: "In-Time", field: "inTime" },
//     { headerName: "Customer Name", field: "customerName" },
//     { headerName: "Needs", field: "needs" },
//     { headerName: "Contact No", field: "mobile" },
//     { headerName: "Email", field: "email" },
//     { headerName: "Out-Time", field: "outTime" },
//   ];
//   const defColumnDefs = { flex: 1 };


  

  const onGridReady = (params) => {
    setGridApi(params);
  };
  const getFilterType = () => {
    if (startDate !== "" && endDate !== "") return "inRange";
    else if (startDate !== "") return "Equals";
    else if (endDate !== "") return "Equals";
  };
  useEffect(() => {
    if (gridApi) {
      if (startDate !== "" && endDate !== "" && startDate > endDate) {
        alert("Start Date should be before End Date");
        setEndDate("");
      } else {
        var dateFilterComponent = gridApi.api.getFilterInstance("createDate");
        dateFilterComponent.setModel({
          type: getFilterType(),
          dateFrom: startDate ? startDate : endDate,
          dateTo: endDate,
        });
        gridApi.api.onFilterChanged();
      }
    }
  }, [startDate, endDate]);



  return (
    <>
      <div className="form-group">
        <div className="controls">
          <input
            type="text"
            id="search"
            value={name}
            onChange={filter}
            className="form-control"
            placeholder="Search Names Here..."
          />
          <div className="help-block with-errors"></div>
        </div>
        {/* <!-- end controls --> */}
      </div>
    <br/>
    <br/>
   
      <div className="ag-theme-alpine" style={{ height: 500}}>
        <div className="dateDiv" style={{ marginLeft: "350px" }}>
          From :{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />{" "}
          To :{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <br/>
        {foundUsers && foundUsers.length > 0 ? (
          <AgGridReact 
         
            defaultColDef={{ flex: 1 }}
            rowHeight={60}
            rowData={foundUsers}
            onGridReady={onGridReady}
          >
          
            <AgGridColumn
              
              field="employeeName"
              headerName="E.Name"
              filter={true}
              cellClass="vertical-middle "
              resizable={true}

            />
            <AgGridColumn
              field="createDate"
              headerName="Date"
              sortable={true}
              filter="agDateColumnFilter"
              filterParams={dateFilterParams}
              cellClass="vertical-middle"
              resizable={true}

            />
          
            <AgGridColumn
              field="inTime"
              headerName="In-Time"
              sortable={true}
              filter={true}
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="customerName"
              headerName="Customer Name"
              sortable={true}
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="needs"
              headerName="Needs"
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="mobile"
              headerName="Contact No"
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="email"
              headerName="Email"
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="outTime"
              headerName="Out-Time"
              sortable={true}
              filter={true}
              cellClass="vertical-middle"
              resizable={true}

            />
          
          </AgGridReact>
        ) : (
          <AgGridReact
          cellClass="vertical-middle"
            defaultColDef={{ flex: 1, width: 200 }}
            rowHeight={60}
            rowData={userData} 
            onGridReady={onGridReady}
            
          >
         
            <AgGridColumn
              field="employeeName"
              headerName="E.Name"
              sortable="asc"
              filter={true}
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="createDate"
              headerName="Date"
              sortable={true}
              filter="agDateColumnFilter"
              filterParams={dateFilterParams}
              cellClass="vertical-middle"
              resizable={true}

            
            />
          
            <AgGridColumn
              field="inTime"
              headerName="In-Time"
              sortable={true}
              filter={true}
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="customerName"
              headerName="Customer Name"
              sortable={true}
              cellClass="vertical-middle"
            />
            <AgGridColumn
              field="needs"
              headerName="Needs"
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="mobile"
              headerName="Contact No"
              cellClass="vertical-middle"
              resizable={true}

            />
            <AgGridColumn
              field="email"
              headerName="Email"
              cellClass="vertical-middle"
              resizable={true}
            />
            <AgGridColumn
              field="outTime"
              headerName="Out-Time"
              sortable={true}
              filter={true}
              cellClass="vertical-middle"
              resizable={true}

            />
         
          </AgGridReact>
        )}

        {/* <AgGridReact
      rowData={userData}
      columnDefs={columns}
      defaultColDef={defColumnDefs}
      onGridReady={onGridReady} sortable={true} filter={true} /> */}
      </div>
      {/* <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead className="text-center">
            <tr>
              <th>Dcm ID</th>
              <th>Employee Name</th>
              <th>In Time</th>
              <th>Customer Name</th>
              <th>Needs</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Out Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {foundUsers && foundUsers.length > 0 ? foundUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center ">{item.dcmId}</td>
                      <td className="text-center ">{item.employeeName}</td>
                      <td className="text-center ">{item.inTime}</td>
                      <td className="text-center ">{item.customerName}</td>
                      <td className="text-center ">{item.needs}</td>
                      <td className="text-center ">{item.mobile}</td>
                      <td className="text-center ">{item.email}</td>
                      <td className="text-center ">{item.outTime}</td>
                      <td className="text-center ">
                        <Link to={`/dcm-edit/${item.userId}`}>
                          <i className="fa fa-pencil"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : userData.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center ">{e.dcmId}</td>
                      <td className="text-center ">{e.employeeName}</td>
                      <td className="text-center ">{e.inTime}</td>
                      <td className="text-center ">{e.customerName}</td>
                      <td className="text-center ">{e.needs}</td>
                      <td className="text-center ">{e.mobile}</td>
                      <td className="text-center ">{e.email}</td>
                      <td className="text-center ">{e.outTime}</td>
                      <td className="text-center ">
                        <Link to={`/dcm-edit/${e.dcmId}`}>
                          <i className="fa fa-pencil"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table> */}
    </>
  );
};

export default Aggrid;
