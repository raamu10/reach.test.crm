import React, { useState, useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';
import { getUserList } from '../../../api';
import SendMessage from '../../message';

const User = () => {

    const [contactId, setContactId] = useState('')

    useEffect(() => {
        let payload = {
            "id":1
        };
        
        getUserList(payload).then(resp => {
            console.log(resp);
        }, error => {
            console.log(error);
        });
    }, [])

    const users = [
        {
          "ID": "1",
          "LOGIN": "devops@reachmobile.com",
          "NAME": "Admin",
          "LAST_NAME": "admin",
          "EMAIL": "devops@reachmobile.com"
        },
        {
          "ID": "3",
          "LOGIN": "lisa",
          "NAME": "Lisa",
          "LAST_NAME": "",
          "EMAIL": "lisa@reachmobile.com"
        },
        {
          "ID": "4",
          "LOGIN": "cyan",
          "NAME": "Cyan",
          "LAST_NAME": "",
          "EMAIL": "cyan@reachmobile.com"
        },
        {
          "ID": "5",
          "LOGIN": "rania",
          "NAME": "Rania",
          "LAST_NAME": "",
          "EMAIL": "rania@reachmobile.com"
        },
        {
          "ID": "6",
          "LOGIN": "steffy",
          "NAME": "Steffy",
          "LAST_NAME": "",
          "EMAIL": "steffy@reachmobile.com"
        },
        {
          "ID": "7",
          "LOGIN": "balvinder",
          "NAME": "Balvinder",
          "LAST_NAME": "",
          "EMAIL": "Balvinder@reachmobile.com"
        },
        {
          "ID": "8",
          "LOGIN": "kiran",
          "NAME": "Kiran",
          "LAST_NAME": "",
          "EMAIL": "kiran@reachmobile.com"
        },
        {
          "ID": "9",
          "LOGIN": "anita",
          "NAME": "Anita",
          "LAST_NAME": "",
          "EMAIL": "anita@reachmobile.com"
        },
        {
          "ID": "10",
          "LOGIN": "reetika",
          "NAME": "Reetika",
          "LAST_NAME": "",
          "EMAIL": "reetika@reachmobile.com"
        },
        {
          "ID": "11",
          "LOGIN": "divya",
          "NAME": "Divya",
          "LAST_NAME": "",
          "EMAIL": "divya.rajan@reachmobile.com"
        },
        {
          "ID": "12",
          "LOGIN": "preeti",
          "NAME": "Preeti",
          "LAST_NAME": "",
          "EMAIL": "preeti@reachmobile.com"
        },
        {
          "ID": "13",
          "LOGIN": "harsha",
          "NAME": "Harsha",
          "LAST_NAME": "",
          "EMAIL": "harsha@reachmobile.com"
        },
        {
          "ID": "14",
          "LOGIN": "srivatsan",
          "NAME": "Srivatsan",
          "LAST_NAME": "",
          "EMAIL": "srivathsan@reachmobile.com"
        },
        {
          "ID": "15",
          "LOGIN": "arul",
          "NAME": "Arul",
          "LAST_NAME": "",
          "EMAIL": "arul@reachmobile.com"
        },
        {
          "ID": "16",
          "LOGIN": "somesh",
          "NAME": "Somesh",
          "LAST_NAME": "",
          "EMAIL": "somesh@reachmobile.com"
        },
        {
          "ID": "17",
          "LOGIN": "steph",
          "NAME": "Steph",
          "LAST_NAME": "",
          "EMAIL": "stephanie@reachmobile.com"
        },
        {
          "ID": "18",
          "LOGIN": "karthik",
          "NAME": "Karthik",
          "LAST_NAME": "",
          "EMAIL": "karthik@reachmobile.com"
        },
        {
          "ID": "19",
          "LOGIN": "imopenlines_wgt_8573TEXYx",
          "NAME": "test",
          "LAST_NAME": "",
          "EMAIL": "test@gmail.com"
        },
        {
          "ID": "20",
          "LOGIN": "bot_imbot_giphy_GzK08",
          "NAME": "Giphy",
          "LAST_NAME": null,
          "EMAIL": null
        },
        {
          "ID": "21",
          "LOGIN": "bot_imbot_properties_rutrZ",
          "NAME": "Business partner check",
          "LAST_NAME": null,
          "EMAIL": null
        },
        {
          "ID": "22",
          "LOGIN": "bot_imbot_propertiesua_mQ6DV",
          "NAME": "Company Search",
          "LAST_NAME": null,
          "EMAIL": null
        },
        {
          "ID": "23",
          "LOGIN": "bot_imbot_support_LjcKG",
          "NAME": "Bitrix24 Support",
          "LAST_NAME": null,
          "EMAIL": null
        },
        {
          "ID": "24",
          "LOGIN": "yugal",
          "NAME": "yugal",
          "LAST_NAME": "pandey",
          "EMAIL": "yugal.pandey@nevpro.co.in"
        },
        {
          "ID": "25",
          "LOGIN": "abhishek.kumar@reachmobile.com",
          "NAME": "Abhishek",
          "LAST_NAME": "kumar",
          "EMAIL": "abhishek.kumar@reachmobile.com"
        },
        {
          "ID": "26",
          "LOGIN": "imopenlines_wgt_7501fGMvg",
          "NAME": "",
          "LAST_NAME": "",
          "EMAIL": null
        },
        {
          "ID": "27",
          "LOGIN": "test",
          "NAME": "Test user",
          "LAST_NAME": "test",
          "EMAIL": "yugal@email.com"
        },
        {
          "ID": "28",
          "LOGIN": "imopenlines_wgt_5995Xmnyz",
          "NAME": "Yugal",
          "LAST_NAME": "",
          "EMAIL": "yugal.pandey@nevpro.co.in"
        },
        {
          "ID": "29",
          "LOGIN": "imopenlines_wgt_8683lZFC9",
          "NAME": "",
          "LAST_NAME": "",
          "EMAIL": null
        },
        {
          "ID": "30",
          "LOGIN": "imopenlines_wgt_9009gws83",
          "NAME": "",
          "LAST_NAME": "",
          "EMAIL": null
        },
        {
          "ID": "31",
          "LOGIN": "imopenlines_wgt_36376dLsb",
          "NAME": "",
          "LAST_NAME": "",
          "EMAIL": null
        },
        {
          "ID": "32",
          "LOGIN": "imopenlines_wgt_2848QOvHe",
          "NAME": "test",
          "LAST_NAME": "",
          "EMAIL": "test@email.com"
        },
        {
          "ID": "33",
          "LOGIN": "imopenlines_wgt_1390fHjY5",
          "NAME": "",
          "LAST_NAME": "",
          "EMAIL": null
        },
        {
          "ID": "34",
          "LOGIN": "imopenlines_wgt_3719fb7v7",
          "NAME": "yugal",
          "LAST_NAME": "",
          "EMAIL": "yugal@nevpro.co.in"
        }
      ];
    

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
                        users.map((item, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{item.ID}</td>
                                    <td>{item.NAME}</td>
                                    <td>{item.LAST_NAME}</td>
                                    <td>{item.EMAIL}</td>
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