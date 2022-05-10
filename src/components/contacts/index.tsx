import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; 
import { getContacts } from '../../api';


const Contacts = () => {

    useEffect( () => {
        let payload = {
            "start" : 10,
            "offset":0,
            "id":15
        };

        getContacts(payload).then(resp => {
            console.log(resp);
        }, error => {
            console.log(error);
        });

    }, [])

    const contactList:any = [
        /* {
            "ID": "15",
            "NAME": "yugal",
            "VALUE": "+919320863928",
            "TYPE_ID": "PHONE"
        },
        {
            "ID": "15",
            "NAME": "yugal",
            "VALUE": "yugal.pandey@nevpro.co.in",
            "TYPE_ID": "EMAIL"
        } */
    ];

    return (
        <div className="mt-3 p-3">
            <div>
                <h2>Contacts</h2>
            </div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactList.map((item:any, idx:0) => {
                            return(
                                <tr key={idx}>
                                    <td>{item.ID}</td>
                                    <td>{item.NAME}</td>
                                    <td>{item.TYPE_ID}</td>
                                    <td>{item.VALUE}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
};

export default Contacts;