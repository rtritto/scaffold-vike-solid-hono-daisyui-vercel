import { createTodoHandler } from "./server/create-todo-handler";
import { vikeHandler } from "./server/vike-handler";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { createHandler } from "@universal-middleware/hono";

const app = new Hono();

app.post("/api/todo/create", createHandler(createTodoHandler)());

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export const GET = handle(app);

export const POST = handle(app);

export default process.env.NODE_ENV === "production" ? undefined : app;
