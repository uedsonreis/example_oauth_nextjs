import Head from 'next/head'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const githubId = process.env.NEXT_PUBLIC_CLIENT_ID
const githubUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${githubId}`

export default function LoginPage() {

    function signInGitHub() {
        window.open(githubUrl, '_self')
    }

    return (
        <>
            <Head>
                <title>Example OAuth</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.main} ${inter.className}`}>

                <button className={styles.githubButton} onClick={signInGitHub}>
                    Entrar com GitHub
                </button>

            </main>
        </>
    )
}
