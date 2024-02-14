'use client'
import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { extract_drug_label } from '../Handlers/extract_drug_label';
import DrugInfoForm from './Druginfo';
const ImageInputModal = ({user_id,pet_id}) => {
    const [imageData, setImageData] = useState(null);
    const [fileInput, setFileInput] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [drug_label,setDrug_label] = useState({});


console.log(user_id)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFileInput(e.target.files[0]);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageData(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
// console.log(user_id)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fileInput) {
            setDrug_label(await extract_drug_label(fileInput,user_id));
           
        }

        handleCloseModal();
    };
    // console.log(drug_label)

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShowModal}>
                Select Label Image
            </Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="imageInput">
                            <Form.Label column sm="2">
                                Upload Image
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="file" onChange={handleImageChange} />
                            </Col>
                        </Form.Group>

                        {imageData && (
                            <div>
                                <img src={imageData} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit Image
                    </Button>
                </Modal.Footer>
            </Modal>
            <DrugInfoForm drugInfo={drug_label} user_id={user_id} pet_id={pet_id}/>
        </div>
    );
};

export default ImageInputModal;
