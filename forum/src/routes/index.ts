import type { RequestHandler } from '@sveltejs/kit'

import prisma from '../lib/prisma'

export const GET: RequestHandler = async () => {
    // get the posts and the user data (Prisma)
    const data = await prisma.post.findMany({
        orderBy: { id: 'desc' }
    })

    // we can shape the data however we want
    // so our user doesn't have to pay the cost for it
    const posts = data.map((post) => {
        return {
            id: post.id,
            content: post.content,
        }
    })

    if (!posts) {
        return { status: 400 }
    }

    return {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        body: { posts }
    }
}

export const POST: RequestHandler = async ({ request }) => {
    const form = await request.formData()
    const post = String(form.get('post'))

    // you should probably use a validation library
    if (post.length > 140) {
        return {
            status: 400,
            body: 'Maximum Post length exceeded.',
            headers: { location: '/routes' }
        }
    }

    // the user id is hardcoded but you can get it from a session
    await prisma.post.create({
        data: {
            url: Math.random().toString(16).slice(2),
            content: post,
        }
    })

    return {}
}