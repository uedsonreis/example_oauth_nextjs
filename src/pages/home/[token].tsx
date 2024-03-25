import React from 'react'
import { useParams } from 'next/navigation'

import styles from '@/styles/Home.module.css'

const dataServerUrl = 'https://api.github.com/user'

export default function HomePage() {

    const params = useParams()

    const [user, setUser] = React.useState<any>()

    React.useEffect(() => {
        if (params && params.token) {
            getUserData(params.token as string)
        }
    }, [params])

    async function getUserData(accessToken: string) {
        const data = await fetch(dataServerUrl, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${accessToken}` },
        })
        setUser(await data.json())
    }

    return (
        <>
            <main className={`${styles.main}`}>
                <div className={styles.description}>
                    <span>Usuário: {user?.name}</span>
                    <span>E-mail: {user?.email}</span>
                </div>
            </main>
        </>
    )
}
