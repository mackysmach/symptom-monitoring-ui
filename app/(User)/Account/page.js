'use client'
import Profile from "@/app/componenets/Userprofile";
import { Row, Col, Container } from "react-bootstrap";
import Addpetbutton from "@/app/componenets/Addpetbutton";
import './page.css'
import Petprofile from "@/app/componenets/Petprofile";
import { useMyContext } from '../../Handlers/Mycontext';
import { useEffect } from "react";



function Account() {
//     const liffId = "2003132004-R8W9JPw8"

// const handleLogout = () => {
//     liff.logout()
//     window.location.reload()
// }
//     const { setlineProfile } = useMyContext();
//     useEffect(() => {
//         const main = async () => {
//             await liff.init({ liffId })
//             if (!liff.isLoggedIn()) {
//                 liff.login()
//                 return
//             }

//             const lineProfile = await liff.getProfile()
//             setlineProfile(lineProfile)
//             // setlineProfile('mac');
//         }

//         try {
//             main()
//         } catch (err) {
//             console.log(err)
//         }
//     }, [])
    const {lineProfile} = useMyContext();
    // console.log(lineProfile);
    const user = {
        name: 'lineProfile.diplayName',
        photo:' lineProfile.pictureUrl',
        pet_id: "001",
        user_id: 'lineProfile.userId'
    
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