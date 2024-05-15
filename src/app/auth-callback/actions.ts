"use server"

import { db } from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const getAuthStatus = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if(!user?.id || !user.email) {
        throw new Error('invalid user data')
    }

    const existingUser = await db.user.findFirst({
        where: { id: user.id },
    })

    if(!existingUser) {
        await db.user.create({
            data: {
                id: user.id,
                email: user.email
            },
        })
    }

    return { success: true }
}

export default getAuthStatus
