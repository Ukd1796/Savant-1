import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import TextEditor from "./TextEditor";
import "./WritePaper.css";
import MobileHeader from "../../partials/Header/MobileHeader";
import Header from "../../partials/Header/Header";

const WritePaper = () => {
  const history = useHistory();
  const classCode = useParams().id;
  const draftId = useParams().draftId;
  const [seeAll, setSeeAll] = useState(false);
  const [activeTab, setActiveTab] = useState(useParams().tab);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(prevState => !prevState);
  const [loading, setLoading] = useState(false);
  const [isDraftCreated, setIsDraftCreated] = useState(false);
  const [reminderLoading, setReminderLoading] = useState(false);

  useEffect(() => {
    if (!activeTab) setActiveTab("upload");
    if (activeTab === "upload") {
      history.replace('/workspace/' + classCode + '/drafts/' + draftId + '/upload');
    } else if (activeTab === "plagiarism") {
      history.replace('/workspace/' + classCode + '/drafts/' + draftId + '/plagiarism');
    } else if (activeTab === "paraphrase") {
      history.replace('/workspace/' + classCode + '/drafts/' + draftId + '/paraphrase');
    } else if (activeTab === "ask") {
      history.replace('/workspace/' + classCode + '/drafts/' + draftId + '/ask');
    }
  }, [activeTab])


  return (
    <div className="WritePaper">
      <div className="d-none d-md-block">
        <Header />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader />
      </div>

      <div className="WritePaper_Body col-12 col-md-10 col-lg-9 col-xl-12 d-flex mt-4 px-2 px-sm-4">
        <div className="WritePaper_Nav col-5 col-md-3 col-lg-3 col-xl-5 d-flex content-box mt-4 py-2 px-4 py-sm-3 px-sm-4">
          <div className="col-12 col-md-10 col-lg-9 col-xl-12">
              <div className="d-flex justify-content-between WritePaper_Navtab mt-4">
                <div
                  onClick={() => setActiveTab("upload")}
                  className={activeTab === "upload" ? "active" : ""}
                >
                  Upload
                </div>
                <div
                  onClick={() => setActiveTab("plagiarism")}
                  className={activeTab === "plagiarism" ? "active" : ""}
                >
                  Plagiarism
                </div>
                <div
                  onClick={() => setActiveTab("paraphrase")}
                  className={activeTab === "paraphrase" ? "active" : ""}
                >
                  Paraphrase
                </div>
                <div
                  onClick={() => setActiveTab("ask")}
                  className={activeTab === "ask" ? "active" : ""}
                >
                  Ask ChatGPT
                </div>

            </div>
          </div>
        </div>
        <div className="WritePaper_info col-7 col-md-5 col-lg-4 col-xl-7 d-flex justify-content-between content-box mt-4 py-2 px-2 py-sm-3 px-sm-4">
          <div className="Editor col-12 col-md-10 col-lg-9 col-xl-12">
            <TextEditor />
          </div>
        </div>


      </div>
    </div>

  )
}

export default WritePaper;