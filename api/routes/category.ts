import { Hono } from "hono";
import { PrismaClient } from "../src/generated/prisma";
import { zValidator } from "@hono/zod-validator";
import { categorySchema } from "../validations/qoute.schema";

const categoryRouter = new Hono();
const prisma = new PrismaClient();

categoryRouter.post("/", zValidator("json", categorySchema), async (c) => {
  const { name } = await c.req.valid("json");
  const category = await prisma.category.create({
    data: {
      name,
    },
  });

  return c.json({
    status: "success",
    data: category,
  });
});

categoryRouter.get("/list", async (c) => {
  const categories = await prisma.category.findMany();
  return c.json({
    status: "success",
    data: categories,
  });
});

categoryRouter.get("/:id", async (c) => {
  const categoryId = await parseInt(c.req.param("id"));
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  const all = await prisma.category.findMany();

  if (!category) {
    return c.json(
      {
        status: "error",
        message: "Category not found",
      },
      404
    );
  }

  return c.json({
    status: "success",
    data: all,
  });
});

categoryRouter.delete("/:id", async (c) => {
  try {
    const categoryId = await parseInt(c.req.param("id"));
    const category = await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return c.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    return c.json({
      status: "error",
      message: error,
    });
  }
});

export default categoryRouter;
