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
