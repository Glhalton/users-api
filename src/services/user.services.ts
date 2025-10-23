import { prisma } from "../plugins/prisma.js";
import {
  createUserSchema,
  createUserSchemaInput,
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
