'use client'
import React, { useEffect, useState } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { getallpet } from '../Handlers/Getallpet';
import { useMyContext } from '../Handlers/Mycontext';

const Petprofile = ({ user }) => {
    const { trigger, setTrigger } = useMyContext();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getallpet(user.user_id).then(data => {
            if (data) {
                setPets(data);
            } 
        });
    }, [trigger]);

    return (
        <Container>
            <Row className="align-items-center text-center">
                {pets?.map((item, index) => (
                    <Col xs={12} md={2} mr={4} key={index}>
                        <Link href={`/Account/${item.pet_id}`}>
                            <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: 'auto' }}>
                                <Image
                                    src={user.photo}
                                    alt={item.name}
                                    roundedCircle
                                    fluid
                                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%' }}
                                />
                            </div>
                        </Link>
                        <h4>
                            <Link href={`/Account/${item.pet_id}`}>
                                <p>{item.name}</p>
                            </Link>
                        </h4>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Petprofile;
