'use client'
import React from 'react';
import { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './Addpetbutton.css'


function Addpetbutton(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [fileInput, setFileInput] = useState(null);
    const formRef = useRef(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (input1 && input2 && input3) {
            try {

                const formResponse = await Addnewvideo(json_data);
                const id = await formResponse.doc_id;

               
                handleCloseModal();
                setInput1('');
                setInput2('');
                setInput3('');
                setFileInput(null);
                toast.success(formResponse.message, {
                    autoClose: 1500,
                    onClose: () => {
                        setTimeout(() => {
                            console.log(trigger)
                            setTrigger(prev=>prev+1)
                        }, 1700);
                    },
                });


            } catch (error) {
                console.error('Error:', error);
                toast.error('Error adding video. Please try again.');

            }
        } else {
            console.log('Please fill in all inputs.');
        }
    };


    return(
        <>
        <Button variant='success' className='Addbutton' onClick={handleShowModal}>New Pet</Button>

        <Modal show={showModal} onHide={handleCloseModal} centered size='xl' >
            <Modal.Header className="text-center p-3">
                <Modal.Title className="mx-auto">Insert New Video</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-5'>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group controlId="formInput1" className="position-relative mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Video Name "
                            value={input1}
                            style={{ width: '50%', backgroundColor: '#EEEFF4', borderRadius: '12px', height: '50px' }}
                            onChange={(e) => setInput1(e.target.value)}
                            required
                        />

                    </Form.Group>

                    <Form.Group controlId="formInput2" className="position-relative mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Video URL "
                            value={input2}
                            style={{ width: '50%', backgroundColor: '#EEEFF4', borderRadius: '12px', height: '50px' }}
                            onChange={(e) => setInput2(e.target.value)}
                            required
                        />

                    </Form.Group>
                   
                    <Form.Group controlId="formInput3" className="position-relative mb-4">
                        <Form.Control
                            as="textarea"
                            rows={10}
                            placeholder="Description "
                            value={input3}
                            style={{ backgroundColor: '#EEEFF4', borderRadius: '12px' }}
                            onChange={(e) => setInput3(e.target.value)}
                            required
                        />

                    </Form.Group>
                    <Modal.Footer className="d-flex justify-content-center align-items-center">
                        <Button variant="success" onClick={handleCloseModal} type='submit' disabled={!input1 || !input2 || !input3}>
                            Insert
                        </Button>

                        <Button variant="danger" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </Modal.Footer>

                </Form>

            </Modal.Body>

        </Modal>
        </>

    );
};

export default Addpetbutton;