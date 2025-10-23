import { FastifyRequest, FastifyReply } from "fastify";
import { createUserSchema } from "../schemas/user.schemas.js";
import {
  createUserService,
  getUserService,
} from "../services/user.services.js";

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const dataParsed = createUserSchema.parse(request.body);

    const user = await getUserService(dataParsed.email);
    if (user) {
      throw new Error("Email já cadastrado no sistema!")
    }

    const createdUser = await createUserService(dataParsed);

    return reply
      .status(401)
      .send({ message: "Usuário criado com sucesso:", createdUser });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
