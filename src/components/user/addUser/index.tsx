import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addNewUser } from '../../../api'

const AddUser = () => {

    const [user, setUser] = useState({'TITLE': '', 'NAME': '', 'LAST_NAME': '', 'SECOND_NAME': '', 'EMAIL': ''});

    const setFormValues = (event:any) => {
        let key = event.target.name;
        setUser({
            ...user,
            [key]: event.target.value
        })
    };

    const addUser = () => {
        let payLoad = {
            ...user,
            "LOGIN":"test",
            "PERSONAL_PROFESSION":"",
            "PERSONAL_WWW":"",
            "PERSONAL_ICQ":"",
            "PERSONAL_GENDER":"",
            "PERSONAL_BIRTHDAY":"",
            "PERSONAL_PHONE":"",
            "PERSONAL_FAX":"",
            "PERSONAL_MOBILE":"",
            "PERSONAL_PAGER":"",
            "PERSONAL_STREET":"",
            "PERSONAL_MAILBOX":"",
            "PERSONAL_CITY":"",
            "PERSONAL_STATE":"",
            "PERSONAL_ZIP":"",
            "PERSONAL_COUNTRY":"",
            "PERSONAL_NOTES":"",
            "WORK_COMPANY":"",
            "WORK_DEPARTMENT":"",
            "WORK_POSITION":"",
            "WORK_PHONE":"",
            "WORK_CITY":"",
            "WORK_STATE":"",
            "WORK_ZIP":"",
            "WORK_COUNTRY":"",
            "WORK_PROFILE":"",
            "PHONE_NUMBER":"",
            "PASSWORD_EXPIRED":"Y",
            "LID":"s1",
            "ACTIVE":"Y",
            "GROUP_ID":[{
                "GROUP_ID":1
            }],
            "PASSWORD":"Nev@123pro",
            "CONFIRM_PASSWORD":"Nev@123pro",
            "UF_DEPARTMENT":[
                18
            ]
        };

        addNewUser(payLoad).then( resp => {
            console.log(resp)
        }, (error) => {
            console.log(error);
        })

    };

    return (
        <div className="mt-3 p-3">
            <div>
                <h2>Add User</h2>
            </div>
            <Form>
                <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="TITLE" onChange={(event) => { setFormValues(event)}}/>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="name">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="NAME" onChange={(event) => { setFormValues(event)}}/>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="LAST_NAME" onChange={(event) => { setFormValues(event)}}/>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="secondName">
                    <Form.Label>Second Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Second Name" name="SECOND_NAME" onChange={(event) => { setFormValues(event)}}/>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="secondName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="EMAIL" onChange={(event) => { setFormValues(event)}}/>
                </Form.Group>

                <Button variant="primary" onClick={addUser}>
                    Add
                </Button>
            </Form>
        </div>
    )
};

export default AddUser;