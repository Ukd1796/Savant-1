import React, { useState, useEffect } from 'react';
import { getDateStringFromTimestamp, getTimeFromTimestamp } from '../../utilities';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectUserData } from '../../reduxSlices/authSlice';
import CircularProgress from "@material-ui/core/CircularProgress";
import CreateDraft from "./WritePaper/CreateDraft";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Button } from 'reactstrap';
import "./Drafts.css";

const Drafts = ({ classCode, adminEmail, isDraftCreated, setIsDraftCreated }) => {
    const storeData = useSelector(selectUserData);
    const [show, setShow] = useState(false);
    const [drafts, setDrafts] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [showCreate, setShowCreate] = useState(false);
    const toggleCreate = () => setShowCreate(prevState => !prevState);
    const [loading, setLoading] = useState(false);
    const [adminName, setAdminName] = useState();

    const getDrafts = () => {
        setLoading(true);
        axios.post("http://localhost:5000/workspace/getDrafts", {
            classCode: classCode
        }, { headers: { Authorization: 'Bearer ' + storeData.token } }
        )
            .then((res) => {
                setDrafts(res.data);
                setLoading(false);
            })
            .catch(err => { console.log(err.response); setLoading(false); })
    }

    useEffect(async () => {
        getDrafts();
    }, []);

    useEffect(() => {
        if (isDraftCreated) {
            getDrafts();
            window.scrollTo(0, 0);
        }
        setIsDraftCreated(false);
    }, [isDraftCreated]);

    return (
        <div className=" row Assignments content-box py-3 px-4 pt-4">
            <div className="d-flex justify-content-center">
                <Button outline color="primary" className="Button_Hover d-flex align-items-center py-2 px-3 fs-6" onClick={() => setShowCreate(true)}>
                    <AddRoundedIcon style={{ fontSize: "28px", margin: "-2px 3px 0 0" }} />
                    Create Draft
                </Button>
            </div>
            {
                (loading) ? (
                    <div className="col-12 d-flex justify-content-center align-items-center mt-4 mb-4">
                        <CircularProgress size={50} className="display-block" />
                    </div>
                ) : drafts.length !== 0 ? (

                    (drafts.map((draft, index) => {

                        let backgroundStyle = {};
                        {/* let card = Card1; */}
                        switch (index % 5) {
                            case 0: {
                                backgroundStyle = { backgroundColor: "#130636", borderRadius: "12px" };
                                {/* card = Card1; */}
                            }
                                break;
                            case 1: {
                                backgroundStyle = { backgroundColor: "#130636", borderRadius: "12px" };
                                {/* card = Card2; */}
                            }
                                break;
                            case 2: {
                                backgroundStyle = { backgroundColor: "#130636", borderRadius: "12px" };
                                {/* card = Card3; */}
                            }
                                break;
                            case 3: {
                                backgroundStyle = { backgroundColor: "#130636", borderRadius: "12px" };
                                {/* card = Card4; */}
                            }
                                break;
                            case 4: {
                                backgroundStyle = { backgroundColor: "#130636", borderRadius: "12px" };
                                {/* card = Card5; */}
                            }
                        }

                        return (
                            <div key={draft._id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center pt-4">
                                <a href={
                                    "/workspace/" + classCode + "/drafts/" + draft._id
                                } style={{ maxWidth: "100%", minWidth: "100%" }} >
                                    <div className="d-none d-md-flex card class-card card-width mx-auto" style={backgroundStyle}>
                                        <div className="card-body m-3 mx-md-4 rounded-3" style={{ backgroundColor: "#fff" }}>
                                            <h5 className="card-title heading-3 text-start mb-0">{draft.name}</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                    )) : <div>
                    <div>No drafts created yet.</div>

                </div>

            }
            <div className="floating-btn d-block d-md-none">
                <Dropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav>
                        <Fab style={{ color: 'white', backgroundColor: "#1B559C" }}>
                            <AddIcon style={{ fontSize: "28px" }} />
                        </Fab>
                    </DropdownToggle>
                    <DropdownMenu className="bg-transparent" style={{ border: "none" }}>
                        <button className="join-create-btn" onClick={() => setShowCreate(true)}>
                            Create Draft
                        </button>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <CreateDraft
                setIsDraftCreated={setIsDraftCreated}
                isModalOpen={showCreate}
                toggleModal={toggleCreate}
                setShow={setShowCreate}
                classCode={classCode}
            />

        </div>

    )
}

export default Drafts;