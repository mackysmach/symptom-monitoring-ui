'use client'
import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { extract_drug_label } from '../Handlers/extract_drug_label';
import DrugInfoForm from './Druginfo';
const ImageInputModal = () => {
    const [imageData, setImageData] = useState(null);
    const [fileInput, setFileInput] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [drug_label,setDrug_label] = useState();



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


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fileInput) {
            setDrug_label(await extract_drug_label(fileInput));
        }

        handleCloseModal();
    };

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
            <DrugInfoForm drugInfo={drug_label}/>
        </div>
    );
};

export default ImageInputModal;
