import { prisma } from "../plugins/prisma.js";
import {
  createUserSchema,
  createUserSchemaInput,
  updateUserSchemaInput,
} from "../schemas/user.schemas.js";

export const createUserService = async (data: createUserSchemaInput) => {
  return await prisma.users.create({
    data,
  });
};

export const getUserService = async (email: string) => {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
};

export const getAllUsersService = async () => {
  return await prisma.users.findMany();
};

export const getUserByIdService = async (id: number) => {
  return await prisma.users.findFirst({
    where: {
      id,
    },
  });
};

export const deleteUserByIdService = async (id: number) => {
  return prisma.users.delete({
    where:{
      id
    }
  })
}

export const updateUserByIdService = async (id: number, data: updateUserSchemaInput) => {
  return prisma.users.update({
    where: {id},
    data
  })
}