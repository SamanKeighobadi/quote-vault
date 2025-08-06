import { Hono } from "hono";
import {logger} from 'hono/logger'

import userRouter from "../routes/users";
import qouteRouter from "../routes/qoutes";
import categoryRouter from "../routes/category";

import { errorHandler } from "../utils/errors";

const app = new Hono();

app.use(logger())
app.use("*", errorHandler);

app.route("/api/user", userRouter);
app.route("/api/quotes", qouteRouter);
app.route("/api/quotes/category", categoryRouter);

app.get("/", (c) => {
  return c.json({ message: "Welcome to the Hono API!" });
});

export default app;
