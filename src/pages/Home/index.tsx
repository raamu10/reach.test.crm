import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import User from '../../components/user/userDetails';
import AddUser from '../../components/user/addUser';
import Contacts from '../../components/contacts';

import './home.scss';


const Home = () => {
    console.log("In Home")
    
    return(
        <div>
            {/* Home */}
                <div>
                    <Button variant="secondary" className="ms-3" target = "_blank" href="https://crm-test.reachmobile.com/services/api/login_user.php?NAME=devops@reachmobile.com&PASS=LnsK9V80oXQGPGzfzZrq&url=/company/personal/user/1/tasks/?id=14">
                            Tickets
                    </Button>

                    <Button variant="secondary" className="ms-3" target = "_blank" href="https://crm-test.reachmobile.com/services/api/login_user.php?NAME=devops@reachmobile.com&PASS=LnsK9V80oXQGPGzfzZrq&url=/company/personal/user/1/tasks/">
                            Tasks
                    </Button>

                    <Button variant="secondary" className="ms-3" target = "_blank" href="https://crm-test.reachmobile.com/services/api/login_user.php?NAME=devops@reachmobile.com&PASS=LnsK9V80oXQGPGzfzZrq&url=/crm/contact/details/15/?contact_id=test">
                            Contact
                    </Button>

                    <Button variant="secondary" className="ms-3" target = "_blank" href="https://crm-test.reachmobile.com/services/api/login_user.php?NAME=devops@reachmobile.com&PASS=LnsK9V80oXQGPGzfzZrq&url=/marketplace/app/10/?id=15">
                            Call
                    </Button>

                    <Button variant="secondary" className="ms-3" target = "_blank" href="https://crm-test.reachmobile.com/services/api/login_user.php?NAME=devops@reachmobile.com&PASS=LnsK9V80oXQGPGzfzZrq&url=/marketplace/app/11/">
                            Chat
                    </Button>
                </div>
            
                <div style={{marginTop: '10px'}}>
                    <Link to="/">
                        <Button className="ms-3">
                            Home
                        </Button>
                    </Link>
                    <Link to="/getUser">
                        <Button className="ms-3"> 
                            Get Users 
                        </Button>
                    </Link>
                    <Link to="/addUser">
                        <Button className="ms-3"> 
                            Add User
                        </Button>
                    </Link>
                    <Link to="/contacts">
                        <Button className="ms-3"> 
                            Get Contacts
                        </Button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<> </>} />
                    <Route path="/getUser" element={<User />} />
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
        </div>
    )

}

export default Home;