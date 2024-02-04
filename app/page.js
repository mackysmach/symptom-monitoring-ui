'use client'

import liff from '@line/liff'
import { useState, useEffect } from 'react'

const liffId ="2003132004-R8W9JPw8"

const handleLogout = () => {
    liff.logout()
    window.location.reload()
}


export default function Home() {
    const [loading, setLoading] = useState(true)
    const [lineProfile, setlineProfile] = useState({})

    useEffect(() => {
        const main = async () => {
            await liff.init({ liffId })
            if (!liff.isLoggedIn()) {
                liff.login()
                return
            }

            const lineProfile = await liff.getProfile()
            setlineProfile(lineProfile)
        }

        try {
            main()
        } catch (err) {
            console.log(err)
        }
    }, [])

    // console.log(lineProfile)

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <div>
                <img src={lineProfile.pictureUrl} />
                <h1>{lineProfile.displayName}</h1>
                <h2>{lineProfile.userId}</h2>
            </div>

            <button onClick={handleLogout}>logout</button>
        </>

    )
}