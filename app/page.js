'use client'
import liff from '@line/liff';

function Main(){

    liff
    .init({
        liffId: "2003132004-R8W9JPw8", // Use own liffId
    })
    .then(() => {
        liff.login();
        const profile = liff.getProfile();
        console.log(profile);
    })
    .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
    });
    
    return(
       <h1>name:</h1>

    );
}
export default Main;