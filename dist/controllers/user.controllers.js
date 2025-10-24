import { createUserSchema, updateUserSchema, userIdSchema } from "../schemas/user.schemas.js";
import { createUserService, deleteUserByIdService, getAllUsersService, getUserByIdService, getUserService, updateUserByIdService, } from "../services/user.services.js";
export async function createUserController(request, reply) {
    try {
        const dataParsed = createUserSchema.parse(request.body);
        const user = await getUserService(dataParsed.email);
        if (user) {
            throw new Error("Email já cadastrado no sistema!");
        }
        const createdUser = await createUserService(dataParsed);
        return reply
            .status(401)
            .send({ message: "Usuário criado com sucesso:", createdUser });
    }
    catch (error) {
        return reply.status(400).send({ message: error.message });
    }
}
export async function getAllUsersController(request, reply) {
    try {
        const users = await getAllUsersService();
        if (!users) {
            throw new Error("Nenhum usuário encontrado!");
        }
        return reply.status(200).send(users);
    }
    catch (error) {
        return reply.status(400).send({ message: error.message });
    }
}
export async function getUserByIdController(request, reply) {
    try {
        const { id } = userIdSchema.parse(request.params);
        const user = await getUserByIdService(id);
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        return reply.status(200).send(user);
    }
    catch (error) {
        return reply.status(400).send({ message: error.message });
    }
}
export async function deleteUserByIdController(request, reply) {
    try {
        const { id } = userIdSchema.parse(request.params);
        const user = await getUserByIdService(id);
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        const deletedUser = await deleteUserByIdService(id);
        return reply.status(200).send(deletedUser);
    }
    catch (error) {
        return reply.status(400).send({ message: error.message });
    }
}
export async function updateUserByIdController(request, reply) {
    try {
        const { id } = userIdSchema.parse(request.params);
        const dataParsed = updateUserSchema.parse(request.body);
        const user = await getUserByIdService(id);
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        const updatedUser = await updateUserByIdService(id, dataParsed);
        return reply.status(200).send({ updatedUser });
    }
    catch (error) {
        return reply.status(400).send({ message: error.message });
    }
}
