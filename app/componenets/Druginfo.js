'use client'
import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Addhourreminder from '../Handlers/Addhourreminder';
import Addperiodreminder from '../Handlers/Addperiodreminder';

const DrugInfoForm = ({ drugInfo, user_id, pet_id }) => {
    console.log(user_id)
    console.log(pet_id)
    const [formData, setFormData] = useState({
        drug_name: '',
        drug_usage: '',
        reminder_type: '',
        frequency: '',
        every: '',
        first_usage:'',
        notify: {
            morning: false,
            noon: false,
            evening: false,
            before_bed: false,
        },
        time: {
            morning: null,
            noon: null,
            evening: null,
            before_bed: null,
        },

    });


    useEffect(() => {
        if (drugInfo) {
            const { drug_name, drug_usage, reminder_type, every, frequency, morning, noon, evening, before_bed } = drugInfo;
            const updatedFormData = {
                drug_name,
                drug_usage,
                reminder_type,
                frequency,
                every: drugInfo.hasOwnProperty('every') ? every : '',
                notify: {
                    morning: !!morning,
                    noon: !!noon,
                    evening: !!evening,
                    before_bed: !!before_bed,
                },
                time: {
                    morning: morning ? new Date(morning).toISOString().slice(11, 16) : '',
                    noon: noon ? new Date(noon).toISOString().slice(11, 16) : '',
                    evening: evening ? new Date(evening).toISOString().slice(11, 16) : '',
                    before_bed: before_bed ? new Date(before_bed).toISOString().slice(11, 16) : '',
                },
            };

            setFormData(prevFormData => ({
                ...prevFormData,
                ...updatedFormData
            }));

        }
    }, [drugInfo]);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'every') {
            setFormData(prevData => ({
                ...prevData,
                every: value
            }));
        } else if (name === 'first_usage') {
            setFormData(prevData => ({
                ...prevData,
                first_usage: value

            }));
        } else if (type === 'checkbox') {
            setFormData(prevData => ({
                ...prevData,
                notify: {
                    ...prevData.notify,
                    [name]: checked
                }
            }));
        } else {
            if (['morning', 'noon', 'evening', 'before_bed'].includes(name)) {
                setFormData(prevData => ({
                    ...prevData,
                    time: {
                        ...prevData.time,
                        [name]: value
                    }
                }));
            } else {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: value
                }));
            }
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            // Create JSON data object
            let jsonData = {
                "pet_id": pet_id, // Adjust as needed
                "user_id": user_id, // Adjust as needed
                "drug_name": formData.drug_name,
                "drug_usage": formData.drug_usage,
                "frequency": formData.frequency,
            };
            const convertToISOStringThaiTime = (time) => {
                if (!time) return null; 
                const [hours, minutes] = time.split(':').map(Number); 
                const dateObj = new Date(); 
                dateObj.setUTCHours(hours); 
                dateObj.setUTCMinutes(minutes); 
                
               
                const isoStringThaiTime = dateObj.toISOString().replace('Z', '+07:00');
              
                return isoStringThaiTime;
            };

            // Check the reminder type
            if (formData.reminder_type === 'hour') {
                jsonData = {
                    ...jsonData,
                    "first_usage": convertToISOStringThaiTime(formData.first_usage),
                    "every":parseInt(formData.every),
                };
                const formResponse = await Addhourreminder(jsonData);
                console.log(formResponse)
                toast.success(formResponse.message, {
                    autoClose: 1500,
                    onClose: () => {
                        setTimeout(() => {
                        }, 1700);
                    },
                });
            } else if (formData.reminder_type === 'period') {

                jsonData = {
                    ...jsonData,
                    "morning": convertToISOStringThaiTime(formData.time.morning),
                    "noon": convertToISOStringThaiTime(formData.time.noon),
                    "evening": convertToISOStringThaiTime(formData.time.evening),
                    "before_bed": convertToISOStringThaiTime(formData.time.before_bed)
                };
                const formResponse = await Addperiodreminder(jsonData);
                console.log(formResponse)
                toast.success(formResponse.message, {
                    autoClose: 1500,
                    onClose: () => {
                        setTimeout(() => {
                        }, 1700);
                    },
                });


            }

            console.log(jsonData)
            setFormData({
                drug_name: '',
                drug_usage: '',
                reminder_type: '',
                frequency: '',
                every: '',
                first_usage:'',
                notify: {
                    morning: false,
                    noon: false,
                    evening: false,
                    before_bed: false,
                },
                time: {
                    morning: '',
                    noon: '',
                    evening: '',
                    before_bed: '',
                },
            });
        } catch (error) {
            // Handle errors
            console.error('Error submitting form data:', error);
        }
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
                            name="drug_usage"
                            value={formData.drug_usage}
                            onChange={handleChange}

                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="notificationType">
                    <Form.Label column sm="2">
                        Reminder Type
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="select"  // Use a select element for the dropdown
                            name="reminder_type"
                            value={formData.reminder_type}
                            onChange={handleChange}
                        >
                            <option value=""></option>
                            <option value="hour">Hour</option>
                            <option value="period">Period</option>
                        </Form.Control>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} controlId="Every">
                    <Form.Label column sm="2">
                        Every
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="every"
                            value={formData.every}
                            onChange={handleChange}
                            disabled={formData.reminder_type === 'period'}

                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="first_usage">
                    <Form.Label column sm="2">
                        First usage
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="time"
                            name="first_usage"
                            value={formData.first_usage}
                            disabled={formData.every === ''}
                            onChange={handleChange}

                        />
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


                <Form.Group as={Row} controlId="notificationTime">
                    <Form.Label column sm="2">Reminder Time</Form.Label>
                    <Col sm="10">
                        {Object.entries(formData.notify).map(([time, isChecked]) => (
                            <div key={time}>
                                <Form.Check
                                    type="checkbox"
                                    label={time.charAt(0).toUpperCase() + time.slice(1)}
                                    name={time}
                                    checked={isChecked}
                                    onChange={handleChange}
                                    disabled={formData.reminder_type === 'hour'}


                                />
                                <Form.Control
                                    type="time"
                                    name={time}
                                    value={formData.time[time]}
                                    onChange={handleChange}
                                    disabled={!isChecked}
                                />
                            </div>
                        ))}
                    </Col>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </>
    );
};

export default DrugInfoForm;
