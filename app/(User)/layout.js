// 'use client'
import liff from '@line/liff';
import { useState, useEffect } from 'react'
import React from 'react';
import { useMyContext } from '../Handlers/Mycontext';

// const liffId = "2003132004-R8W9JPw8"

// const handleLogout = () => {
//     liff.logout()
//     window.location.reload()
// }

export default function User_Layout({ children }) {
    // const { setlineProfile } = useMyContext();
    // useEffect(() => {
    //     const main = async () => {
    //         await liff.init({ liffId })
    //         if (!liff.isLoggedIn()) {
    //             liff.login()
    //             return
    //         }

    //         const lineProfile = await liff.getProfile()
    //         setlineProfile(lineProfile)
    //         // setlineProfile('mac');
    //     }

    //     try {
    //         main()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])
    // console.log(lineProfile)

    return (
        <>
            
                <div className="pt-5">
                    <div className='mb-4 '>

                        <section>{children}</section>
                    </div>

                </div>
        </>
    );
}