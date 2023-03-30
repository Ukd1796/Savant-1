import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import './App.css';
import React, {useEffect} from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Workspace/Dashboard/Dashboard';
import Workspace from './components/Workspace/Workspace';
import ScrollToTop from './components/partials/ScrollToTop/ScrollToTop';
import AssignmentAdmin from './components/Workspace/AssignmentAdmin/AssignmentAdmin';
import StudentSubmission from './components/Workspace/StudentSubmission/StudentSubmission';
import { useDispatch, useSelector } from 'react-redux';
import { AUTOLOGIN, selectUserData } from './reduxSlices/authSlice';
import Reminders from './components/partials/Header/MobileReminder'
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AUTOLOGIN());
  }, []);

  return (
    <div className="app">
      <ScrollToTop>
        <Router>
          {
            userData.loading ? (
              <div className="col-12 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <CircularProgress size={80} className="display-block"/>
              </div>
            ) : userData.token ? (
              <Switch>
                {/* <Route path='/' component={Home} exact/>
                <Route path='/classes' component={Dashboards} exact/>
                <Route path='/classes/reminders' component={Reminders}/>
                <Route path='/classes/:id' component={Classroom} exact/>
                <Route path='/classes/:id/:tab' component={Classroom} exact/>
                <Route path='/classes/:id/assignment/:assignId/admin' component={AssignmentAdmin} exact/>
                <Route path='/classes/:id/assignment/:assignId' component={StudentSubmission} exact/> */}



                <Route path='/' component={Home} exact/>
                <Route path='/workspace' component={Dashboard} exact/>
                <Route path='/workspace/reminders' component={Reminders}/>
                <Route path='/workspace/:id' component={Workspace} exact/>
                <Route path='/workspace/:id/:tab' component={Workspace} exact/>
                <Route path='/workspace/:id/draft/:draftId/admin' component={AssignmentAdmin} exact/>
                <Route path='/workspace/:id/draft/:draftId' component={StudentSubmission} exact/>
                <Redirect to ="/" />
              </Switch> 
            ) : (
              <Switch>
                <Route path='/' component={Home} exact/>
                <Redirect to ="/" />
              </Switch>
            )
          }
        </Router>
      </ScrollToTop>
    </div>
  )
} 

export default App