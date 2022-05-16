import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';
import { getUserList } from '../../../api';
import SendMessage from '../../message';

const User = () => {

    const [contactId, setContactId] = useState('');
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let payload = {
            "id":24
        };
        
        getUserList(payload).then((resp: any) => {
            if (resp) {
                setUserList(resp);
            }
        }, (error: any) => {
            console.log(error);
        });
    }, [])
    

    return (
        <div className="mt-3 p-3">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Send Message </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((item: any, idx: any) => {
                            return(
                                <tr key={idx}>
                                    <td>{item?.ID}</td>
                                    <td>{item?.NAME}</td>
                                    <td>{item?.LAST_NAME}</td>
                                    <td>{item?.EMAIL}</td>
                                    <td>
                                        <Button variant="info" onClick={() => { setContactId(item.ID) }}>
                                            Message
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


            <SendMessage contactId={contactId}  setContactId={setContactId}/>
        </div>
    )
};

export default User;