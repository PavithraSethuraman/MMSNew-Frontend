import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../authContext/AuthContext";
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter,dateFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'


const Dummy = () => {
  const { user } = useContext(AuthContext);

  const columns = [{
    dataField:"dcmId" , text:"#"
  },
  {
    dataField:"employeeName" , text:"Employee Name",sort:true, filter: textFilter()
  },
  {
    dataField:"createDate" , text:"Create Date", filter: dateFilter(),sort:true
  },

  {
    dataField:"inTime" , text:"In-Time",sort:true
  },

]



const pagination = paginationFactory({
  page:1,
  sizePerPage:10,
  lastPageText:'>>',
  firstPageText:'<<',
  nextPageText:'>',
  prePageText:'<',
  showTotal:true,
  alwaysShowAllBtns:true,
  onPageChange:function(page, sizePerPage){
    console.log('page',page);
    console.log('sizePerPage',sizePerPage)
  }
})
  

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get("http://localhost:5000/api/dcm");
      setUserData(users.data);
    }
    fetchData();
  }, []);

 

  return (
    <>
   <div>
    <BootstrapTable bootstrap4 keyField="dcmId"
    filterPosition="top"
    columns={columns} data={userData} pagination={pagination} filter={filterFactory()}/>
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
            {userData && userData.length > 0 ? userData.map((item, index) => {
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
                      
                    </tr>
                  );
                })}
          </tbody>
        </table> */}
    </>
  );
};

export default Dummy;
