// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const githubId = process.env.NEXT_PUBLIC_CLIENT_ID
const githubSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET
const github_server_auth = 'https://github.com/login/oauth/access_token'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const code = req.query['code']

    if (code) console.log('Código de verificação recebido')
    else console.log('Falha na solicitação da permissão')

    fetch(github_server_auth, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            code,
            client_id: githubId,
            client_secret: githubSecret,
        })

    }).then(async response => {
        const { access_token } = await response.json()
        res.redirect(`/home/${access_token}`)

    }).catch(error => {
        console.error(error)
    })
}
