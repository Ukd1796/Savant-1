import React, { useState } from 'react';
import "./Dashboard.css";
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import CreateWorkspace from '../CreateWorkspace'; 
import JoinWorkspace from '../JoinWorkspace';
const SideDash = (props) => {
  const [show, setShow] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const toggle = () => setShow(prevState=>!prevState);
  const toggleJoin = () => setShowJoin(prevState=>!prevState);
  const owned = props.owned;
  const enrolled = props.enrolled;
  const [seeAllOwned , setSeeAllOwned] = useState(false);
  const [seeAllEnrolled , setSeeAllEnrolled] = useState(false);
  return (
   <div></div>
  );
}

export default SideDash;
