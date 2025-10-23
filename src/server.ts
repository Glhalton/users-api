import "dotenv/config";
import fastify from "../node_modules/fastify/fastify.js";
import userRoutes from "./routes/user.routes.js";

const app = fastify({
  //logger: true,
});

app.register(userRoutes, {prefix: "/users"});

app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
  console.log("Server is running");
});

