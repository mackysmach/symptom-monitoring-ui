// components/Profile.js
import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Petprofile = ({ user }) => {
    return (
        <Container>
            <Row className="align-items-center text-center">
                <Col xs={12} md={2}>
                    <Link href={`/Account/${user.pet_id}`}>
                        <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: 'auto' }}>
                            <Image
                                src={user.photo}
                                alt={user.name}
                                roundedCircle
                                fluid
                                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%' }}
                            />
                        </div>

                    </Link>


                    <h4>
                        <Link href={`/Account/${user.pet_id}`}>
                            <p>DOG</p>
                        </Link>
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Petprofile;
