import React from "react";
import './FindPaper.css';
import { FaSearch } from "react-icons/fa";

const FindPaper = () => {
  return (
    <div className="row m-0 justify-content-center">
      <div className="Workspace_Info col-11 col-md-10 col-lg-9 col-xl-11 d-flex justify-content-between content-box mt-4 py-2 px-2 py-sm-3 px-sm-4">
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              placeholder="Type to search..."
            />
          </div>
      </div>
    </div>
  )
}

export default FindPaper;