import { FastifyInstance } from "fastify";
import { createUserController } from "../controllers/user.controllers.js";

export default async function userRoutes(app: FastifyInstance){

    app.post("/", createUserController);
    
}

