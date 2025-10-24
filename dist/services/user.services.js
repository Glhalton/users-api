import { prisma } from "../plugins/prisma.js";
export const createUserService = async (data) => {
    return await prisma.users.create({
        data,
    });
};
export const getUserService = async (email) => {
    return await prisma.users.findFirst({
        where: {
            email,
        },
    });
};
export const getAllUsersService = async () => {
    return await prisma.users.findMany();
};
export const getUserByIdService = async (id) => {
    return await prisma.users.findFirst({
        where: {
            id,
        },
    });
};
export const deleteUserByIdService = async (id) => {
    return prisma.users.delete({
        where: {
            id
        }
    });
};
export const updateUserByIdService = async (id, data) => {
    return prisma.users.update({
        where: { id },
        data
    });
};
