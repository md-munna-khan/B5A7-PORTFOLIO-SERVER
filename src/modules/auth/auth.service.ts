import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import bcryptjs from "bcryptjs";


const loginWithEmailAndPassword = async ({ email, password }: { email: string, password: string }) => {

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!user) {
        throw new Error("User not found!")
    }
 const isPasswordMatch = await bcryptjs.compare(password, user.password as string);

    if (!isPasswordMatch) {
        throw new Error("Password is incorrect!");
    }
    return user
}

const authWithGoogle = async (data: Prisma.UserCreateInput) => {
    let user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (!user) {
        user = await prisma.user.create({
            data
        })
    }

    return user;
}

export const AuthService = {
    loginWithEmailAndPassword,
    authWithGoogle
}