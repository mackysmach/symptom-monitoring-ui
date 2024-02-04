'use client'
import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const DrugInfoForm = ({ drugInfo }) => {
    const [formData, setFormData] = useState({
        drug_name: '',
        usage: '',
        notification_type: '',
        notify: {
            เช้า: false,
            กลางวัน: false,
            เย็น: false,
            ก่อนนอน: false,
        },
        frequency: '',
    });

    // Set initial form data from the provided response when drugInfo changes
    useEffect(() => {
        if (drugInfo) {
            setFormData(drugInfo);
        }
    }, [drugInfo]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => {
            if (type === 'checkbox') {
                return {
                    ...prevData,
                    notify: {
                        ...prevData.notify,
                        [name]: checked,
                    },
                };
            }

            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform actions with the form data (e.g., submit to an API)
        console.log('Form data submitted:', formData);
    };
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleImageSubmit = (imageData) => {
        // Handle image data in the parent component
        console.log('Image data received in parent component:', imageData);
    };

    return (
        <>
           
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="drugName">
                    <Form.Label column sm="2">
                        Drug Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="drug_name"
                            value={formData.drug_name}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="usage">
                    <Form.Label column sm="2">
                        Usage
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="usage"
                            value={formData.usage}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="notificationType">
                    <Form.Label column sm="2">
                        Notification Type
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="notification_type"
                            value={formData.notification_type}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="notificationTime">
                    <Form.Label column sm="2">
                        Notification Time
                    </Form.Label>
                    <Col sm="10">
                        {Object.entries(formData.notify).map(([time, isChecked]) => (
                            <Form.Check
                                key={time}
                                type="checkbox"
                                label={time}
                                name={time}
                                checked={isChecked}
                                onChange={handleChange}
                            />
                        ))}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="frequency">
                    <Form.Label column sm="2">
                        Frequency
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default DrugInfoForm;
