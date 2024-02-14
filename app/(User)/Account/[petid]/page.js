'use client'
import { Form, Button } from 'react-bootstrap';
import DrugInfoForm from '@/app/componenets/Druginfo';
import ImageInputModal from '@/app/componenets/Imageinput';
import { getonepet } from '@/app/Handlers/Getonepet';
const PetDetails = async ({ params }) => {
 const user = await getonepet(params.petid)
    return(
        <ImageInputModal user_id={user.user_id} pet_id={user.pet_id} />
    );

    }
export default PetDetails;