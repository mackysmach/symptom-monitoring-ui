
import Profile from "@/app/componenets/Userprofile";
import { Row, Col, Container } from "react-bootstrap";
import Addpetbutton from "@/app/componenets/Addpetbutton";
import './page.css'
import Petprofile from "@/app/componenets/Petprofile";


function Account() {
    const user = {
        name: 'John Doe',
        photo: '/teahub.io-bmw-car-wallpaper-375141.jpg',
        pet_id: "001"
    };
    return (
        <Container sm={12}>
            <Row className="mb-5">
                <Profile user={user} />
            </Row>
            <Row className="mt-3">
                <Col md={6} xs={7} sm={6} lg={6} className='flex-search-container'>
                    <h4>My pets</h4>
                </Col>
                <Col md={2} xs={1} sm={2} lg={2}></Col>
                <Col md={4} xs={4} sm={4} lg={4} className='flex-button-container'>
                    <Addpetbutton/>
                </Col>
            </Row>
            <Row >
                <hr style={{ margin: '20px 0', borderColor: '#000', borderWidth: '2px' }} />
            </Row>
            <Row>
                <Petprofile user={user}/>
            </Row>
        </Container>
    );

};
export default Account;