import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { userSchema } from "../validations/user.schema";
import { PrismaClient } from "../src/generated/prisma";

const userRouter = new Hono();
const prisma = new PrismaClient();

userRouter.post("/", zValidator("json", userSchema), async (c) => {
  const body = await c.req.valid("json");
  const user = await prisma.user.create({
    data: body,
  });
  return c.json({
    status: "success",
    data: user,
  });
});

userRouter.get("/", async (c) => {
  const users = await prisma.user.findMany();
  return c.json({
    status: "success",
    data: users,
  });
});

export default userRouter;
