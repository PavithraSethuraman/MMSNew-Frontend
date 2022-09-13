import { useContext, useState } from "react";
import UserContext from "../../UserContext";

function FilterComp({onNameFilter,onDateFilter}) {

  const userContext = useContext(UserContext) 
  

    const [filters, setFilters] = useState({
        name: "",
        startDate: "",
        endDate: "",
      });
    
      const handleInput = (field) => (event) => {
        const { value } = event.target;
    
        setFilters({
          ...filters,
          [field]: value,
        });
    
        switch (field) {
          case "name":
            onNameFilter(value);
            break;
          case "startDate":
            onDateFilter(value, "startDate");
            break;
          case "endDate":
            onDateFilter(value, "endDate");
            break;
          default:
            break;
        }
      };

      userContext.setStartFilterDate(filters.startDate)
      userContext.setEndFilterDate(filters.endDate)

  return (
   <>
   <div className="form-group">
        <div className="controls">
          <input
            type="text"
            id="name"
          value={filters.name}
          onChange={handleInput("name")}
            className="form-control"
            placeholder="Search Names Here..."
          />
          <div className="help-block with-errors"></div>
        </div>
      </div><br/>
      <br/>
      <div style={{ marginLeft: "350px" }}>
          From :{" "}
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filters.startDate}
          onChange={handleInput("startDate")}

            
          />{" "}
          To :{" "}
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filters.endDate}
          onChange={handleInput("endDate")}
          />
        </div>
        <br/>
      <br/>

   </>
  );
}

export default FilterComp;