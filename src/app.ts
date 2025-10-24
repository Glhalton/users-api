import { FastifyInstance } from "fastify";
import userRoutes from "./routes/user.routes.js";

export default async function routes(app: FastifyInstance){
    app.register(userRoutes,{prefix: "/users"})
}