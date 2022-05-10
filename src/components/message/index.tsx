import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { sendUserContactMessage } from '../../api';

const SendMessage = ( {contactId, setContactId} : {contactId: string, setContactId:any } ) => {

    const [showMsgModal, setShowMsgModal] = useState(false);
    const [ msgObj, setMsgObj ] = useState({/* 'contact_id': 0 , */ 'body': '', 'DESC': ''});

    const closeMsgModal = () => {
        setShowMsgModal(false);
        setContactId('');
    };

    const setFormValues = (event: any) => {
        let key = event.target.name;
        setMsgObj({
            ...msgObj,
            [key]: event.target.value
        });
    };

    const sendContactMessage = () => {
        let payload = {
            ...msgObj,
            contact_id: parseInt(contactId)
        }
        sendUserContactMessage(payload).then((resp) => {
            console.log("msg resp:", resp);
        }, (error) => {
            console.log("msg err", error)
        })
    };

    useEffect(() => {
        setShowMsgModal(contactId.length > 0);
    }, [contactId])


    return (
        <div className="mt-3 p-3">
            <Modal
                show={showMsgModal}
                onHide={closeMsgModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Send Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="userId">
                            <Form.Label>Contact ID</Form.Label>
                            <Form.Control type="number" placeholder="Enter Contact ID" value={msgObj.contact_id} onChange={(event) => { setFormValues( 'contact_id', event) }}/>
                        </Form.Group> */}

                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="bodyMsg">
                            <Form.Label>Body Message</Form.Label>
                            <Form.Control type="text" placeholder="Enter Body Message" name='body' onChange={(event) => { setFormValues(event)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6" controlId="desc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter Description" name='DESC' onChange={(event) => { setFormValues(event)}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeMsgModal}>
                        Cancel
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                    <Button variant="primary" onClick={sendContactMessage}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default SendMessage;