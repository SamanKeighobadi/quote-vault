import { Hono } from "hono";
import { PrismaClient } from "../src/generated/prisma";
import { zValidator } from "@hono/zod-validator";
import { qouteSchema } from "../validations/qoute.schema";

const qouteRouter = new Hono();
const prisma = new PrismaClient();

qouteRouter.get("/", async (c) => {
  const quotes = await prisma.quote.findMany();
  return c.json({
    status: "success",
    data: quotes,
  });
});

qouteRouter.get("/:id", async (c) => {
  const qouteId = await parseInt(c.req.param("id"));
  const qoute = await prisma.quote.findUnique({
    where: {
      id: qouteId,
    },
  });

  if (!qoute) {
    return c.json({
      status: "error",
      message: "Qoute not found",
    });
  }

  return c.json({
    status: "success",
    data: qoute,
  });
});

qouteRouter.post("/", zValidator("json", qouteSchema), async (c) => {
  const body = await c.req.valid("json");

  const qoute = await prisma.quote.create({
    data: body,
  });

  return c.json({
    status: "success",
    data: qoute,
  });
});

qouteRouter.delete("/:id", async (c) => {
  const quoteId = await parseInt(c.req.param("id"));
  await prisma.quote.delete({
    where: {
      id: quoteId,
    },
  });

  return c.json(
    {
      status: "success",
      message: "Qoute deleted successfully",
    },
    200
  );
});

export default qouteRouter;
