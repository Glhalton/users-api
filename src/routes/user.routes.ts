import { FastifyInstance } from "fastify";
import { createUserController, deleteUserByIdController, getAllUsersController, getUserByIdController, updateUserByIdController } from "../controllers/user.controllers.js";

export default async function userRoutes(app: FastifyInstance) {
  app.get("/", getAllUsersController);
  
  app.get("/id/:id", getUserByIdController);
  
  app.post("/", createUserController);

  app.delete("/id/:id", deleteUserByIdController);

  app.patch("/id/:id", updateUserByIdController);
}
