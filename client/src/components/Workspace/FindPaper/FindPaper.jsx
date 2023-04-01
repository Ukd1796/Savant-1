import { useState } from 'react';
import React from "react";
import './FindPaper.css';
import axios from 'axios';
import xml2js from 'xml2js';


const FindPaper = () => {
  const [values, setValues] = useState({
    keyword: "",
});

const [loading, setLoading] = useState(false);
const [result,viewResult] = useState(false)
const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
  const handleSubmit = (event) =>{
      event.preventDefault();
      viewResult(true);
      console.log(values.keyword);
      axios.get(`http://export.arxiv.org/api/query?search_query=all:${values.keyword}&start=0&max_results=5`)
    .then(function (response) {
        // console.log(response.data); // this will print xml data structure
        let parser = new xml2js.Parser();
        parser.parseString(response.data,function(err, result) {
          console.log(result);
       })
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {

      
        
    });  
    setLoading(true);
  }

  return (
    <div className="row m-0 justify-content-center">
      <div className="Workspace_Info col-11 col-md-10 col-lg-9 col-xl-11 d-flex justify-content-between content-box mt-4 py-2 px-2 py-sm-3 px-sm-4">
      <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" className="form-control" onChange={handleChange("keyword")}  value={values.keyword}/>
        <button type="submit" className="btn btn-success submitBtn " >Submit</button>
        </form>
        {result && <>new result</>}
        {!result && <>no result</>}
      </div>
    </div>
  )
}

export default FindPaper;